var fs = require('fs');
var path = require('path');
const I18n = require('../../eazax/i18n');
const RendererUtil = require('../../eazax/renderer-util');
const SpineRuntime = require('../../common/spine-runtime');
const analysisSpine = require('../../common/analysisSpine');
const { dir } = require('console');

/** 语言 */
const LANG = Editor.lang;

/**
 * i18n
 * @param {string} key
 * @returns {string}
 */
const translate = (key) => I18n.translate(LANG, key);


var canvas = null;
var gl = null;



/** Vue 应用 */
const App = {

	/**
	 * 数据
	 */
	data() {
		return {
			greeting: translate('nice'),
			logView: "",
			version: 'unknown',
			assetManager: null,
			files: [],
			spineCount: {},
			audioCount: {},
		};
	},

	/**
	 * 计算属性
	 */
	computed: {
	},

	/**
	 * 监听属性
	 */
	watch: {

	},

	/**
	 * 实例函数
	 */
	methods: {

		/**
		 * i18n
		 * @param {string} key 
		 */
		i18n(key) {
			return translate(key);
		},

		/**
		 * Greet
		 */
		greet() {
			this.logView = "";
			// （主进程）问好
			//RendererUtil.send('greet', translate('greet'));
		},

		/**
		 * （主进程）事件回复回调
		 * @param {*} event 
		 * @param {string} reply 
		 */
		onGreetReply(event, reply) {
			this.greeting = reply;
		},

		addLog(str) {
			let time = new Date();
			this.logView += `[${time.toLocaleString()}]: ${str}\n`;
			//logListScrollToBottom();
		},

		onApplyBtnClick() {
			this.logView = "";
			this.countAll();
		},

		/**
		 * 获取 Spine 运行时
		 */
		getRuntime() {
			console.log('[methods]', 'getRuntime');
			// 资源对应的 Spine 运行时版本
			let version = '3.8';
			// 处理版本号（保留前两个分量）
			version = version.split('.').slice(0, 2).map(v => parseInt(v)).join('.');
			// 获取目标版本的 Spine 运行时对象
			const spine = SpineRuntime.get(version);
			if (!spine) {
				const content = `${translate('noSpineRuntime')} | ${translate('version')}: ${version}`;
				EditorRendererKit.print('warn', content);
				return false;
			}
			window.spine = spine;
			this.version = spine.version;
			console.log('Spine runtime version', spine.version);
			return true;
		},

		/**
		 * 初始化 Spine 运行时
		 */
		initRuntime() {
			console.log('[methods]', 'initRuntime');
			// 获取画布
			if (!canvas) {
				canvas = this.$refs.canvas;
			}
			// WebGL
			if (!gl) {
				const config = { alpha: false };
				gl = canvas.getContext("webgl", config);
				if (!gl) {
					EditorRendererKit.print('warn', translate('noWebGL'));
					return;
				}
			}
			// 资源管理器
			this.assetManager = new spine.webgl.AssetManager(gl);
		},

		/**
		 * 递归获取目录下所有文件
		 * @param dir 目录
		 * @param filesList 文件列表
		 * @returns 文件列表
		 */
		readFileList(dir, filesList) {
			const files = fs.readdirSync(dir);
			files.forEach((item, index) => {
				let fullPath = path.join(dir, item);
				const stat = fs.statSync(fullPath);
				if (stat.isDirectory()) {
					this.readFileList(path.join(dir, item), filesList);  //递归读取文件
				} else {
					let extname = path.extname(fullPath);
					if (extname == '.skel') {
						filesList.push(fullPath);
					}
				}
			});
			return filesList;
		},

		/** 统计所有 */
		countAll() {
			let dirs = [
				Editor.Project.path + "/assets/mainPack/spine/actor",
				Editor.Project.path + "/assets/mainPack/spine/actorEffect",
			];
			let actorFiles = [];
			this.readFileList(dirs[0], actorFiles);
			let effectFiles = [];
			this.readFileList(dirs[1], effectFiles);
			this.files = actorFiles.concat(effectFiles);

			let curIdx = 0;

			let onceCmpl = (result) => {
				let file = this.files[curIdx];
				let name = path.basename(file, '.skel');
				this.spineCount[name] = result.count;
				for (let key in result.audio) {
					if (!this.audioCount.hasOwnProperty(key)) {
						this.audioCount[key] = result.audio[key];
					}
				}
				curIdx++;
				this.addLog(`[${curIdx}/${this.files.length}]:=> ${file}`);
				countOnce();
			}
			let countOnce = () => {
				if (curIdx < this.files.length) {
					this.countOne(this.files[curIdx], onceCmpl);
				} else {
					if (Object.keys(this.spineCount).length > 0) {
						let spineCount = Editor.Project.path + '/assets/resources/statistic/spineCount.json';
						fs.writeFileSync(spineCount, JSON.stringify(this.spineCount));
						this.addLog('save spineCount to file: ', spineCount);

						//刷新文件
						let idxB = spineCount.indexOf('assets/');
						dbSubPath = spineCount.substring(idxB);
						let dbFullPath = `db://${dbSubPath}`.replace(new RegExp('\\' + '\\', 'g'), '/');
						Editor.log('dbFullPath', dbFullPath)
						Editor.assetdb.refresh(dbFullPath, function (err, results) { });
					}
					if (Object.keys(this.audioCount).length > 0) {
						let audioCount = Editor.Project.path + '/assets/resources/statistic/audioCount.json';
						fs.writeFileSync(audioCount, JSON.stringify(this.audioCount));
						this.addLog('save audioCount to file: ', audioCount);
					}
				}
			}
			countOnce();
		},

		countOne(file, endCb) {
			const assetManager = this.assetManager;
			if (!assetManager) {
				return;
			}
			let name = path.basename(file, '.skel')
			const assets = {
				dir: path.dirname(file),
				skel: `${name}.skel`,
				atlas: `${name}.atlas`,
			};

			// 指定资源目录前缀
			if (assets.dir) {
				assetManager.pathPrefix = assets.dir + '\\';
			}

			// skel（二进制）
			assetManager.loadBinary(
				assets.skel,
				(pathB, binaryDt) => {
					// 图集和纹理		
					assetManager.loadTextureAtlas(
						assets.atlas,
						(pathA, atlasDt) => {
							let atlas = assetManager.get(assets.atlas);
							const atlasLoader = new spine.AtlasAttachmentLoader(atlas);
							const skeletonBinary = new spine.SkeletonBinary(atlasLoader);
							skeletonData = skeletonBinary.readSkeletonData(assetManager.get(assets.skel));
							let ret = analysisSpine.analysisSkeleton(skeletonData, 'jinjiao');
							endCb && endCb(ret);
						},
						(pathA, errA) => {
							console.log(errA);
						});
				},
				(pathB, errB) => {
					console.log(errB);
				});
		},
	},


	/**
	 * 生命周期：实例被挂载
	 */
	mounted() {
		console.log('mounted', this);
		// （主进程）监听回复事件
		RendererUtil.on('greet-reply', this.onGreetReply.bind(this));
		// （主进程）检查更新
		RendererUtil.send('check-update', true);
		//
		this.greet();

		canvas = this.$refs.canvas;
		console.log('mounted:canvas', canvas);

		// 获取运行时
		const result = this.getRuntime();
		if (!result) return;
		// 初始化运行时
		this.initRuntime();
	},

	/**
	 * 生命周期：实例销毁前
	 */
	beforeDestroy() {
		RendererUtil.removeAllListeners('greet-reply');
	},

};

module.exports = App;
