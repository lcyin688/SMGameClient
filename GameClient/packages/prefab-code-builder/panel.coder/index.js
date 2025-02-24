let fs = require('fs');
let path = require('fire-path');

Editor.Panel.extend({
    // 路径是相对路径：fetools 不是文件夹的名字 而是 json文件夹中的name字段 扩展包的名字
    style: fs.readFileSync(Editor.url('packages://prefab-code-builder/panel.coder/index.css'), 'utf-8'),
    template: fs.readFileSync(Editor.url('packages://prefab-code-builder/panel.coder/index.html'), 'utf-8'),

    $: {},

    ready() {
        window.creatyorHelper = new window.Vue({
            el: this.shadowRoot,
            created() { //声明局部变量 this.变量 = data中的数据
                this.t_Name = 'Panel_Start';
                this.t_Inter = '';

                //给选择框 赋予初始值
                this.defNameGame = this.Script_Game_Dic.script1.content;
                this.defNameUI = this.Script_UI_Dic.script8.content;

                this.defUrl_1 = this.Url_1_Arr[0].name;
                this.defUrl_2 = this.Url_2_Arr[1].name;
                this.defUrl = this.defUrl_1 + '/UI'; //'db://assets/' + url1/ + this.defUrl_2;

                this.defBase = this.Script_Base_Dic.script1.content;
                this.defInterface = this.Script_Interface_Dic.script1.content;
            },
            data: {
                defUrl: '',
                defUrl_1: '',
                defUrl_2: '',
                defNameUI: '',
                defNameGame: '',

                t_Name: '',
                t_Inter: '',

                defBase: '',
                defInterface: '',

                Url_1_Arr: [
                    { name: 'Script' },
                    { name: 'Scripts' },
                    { name: 'script' },
                    { name: 'scripts' },
                    { name: 'script' },
                    { name: '' },
                ],
                Url_2_Arr: [
                    { name: '' },
                    { name: 'UI' },
                    { name: 'Game' },
                    { name: 'Base' },
                    { name: 'Tools' },
                    { name: 'Singleton' },
                ],

                Script_UI_Dic: { //排序无关scriptX数字X，自上向下排序，可以随意拖动
                    script8: { name: "开始面板", content: "Panel_Start" },
                    script1: { name: "关于游戏", content: "Panel_About" },
                    script12: { name: "团队面板", content: "Panel_Team" },
                    script10: { name: "设置面板", content: "Panel_SetUp" },
                    script13: { name: "教程面板", content: "Panel_Tech" },

                    script9: { name: "选择角色", content: "Panel_SelectRole" },

                    script21: { name: "------------|", content: "--" },
                    script5: { name: "关卡面板", content: "Panel_Level" },
                    script2: { name: "成就面板", content: "Panel_Achievement" },
                    script20: { name: "武将面板", content: "Panel_General" },
                    script14: { name: "商店面板", content: "Panel_Store" },
                    script15: { name: "升级角色", content: "Panel_UpLv_Role" },
                    script16: { name: "升级装备", content: "Panel_UpLv_Equip" },
                    script17: { name: "升级技能", content: "Panel_UpLv_Skill" },
                    script11: { name: "提示面板", content: "Panel_Tip" },

                    script22: { name: "------------|", content: "--" },
                    script3: { name: "战斗面板", content: "Panel_Battle" },
                    script7: { name: "暂停面板", content: "Panel_Pause" },
                    script4: { name: "退出面板", content: "Panel_Exit" },

                    script18: { name: "胜利面板", content: "Panel_Win" },
                    script19: { name: "失败面板", content: "Panel_Lose" },
                },
                Script_Game_Dic: { //排序无关scriptX数字X，自上向下排序，可以随意拖动
                    script1: { name: "敌人", content: "Enemy" },
                    script2: { name: "英雄", content: "Hero" },
                    script3: { name: "游戏控制", content: "Game_Ctr" },
                    script4: { name: "关卡控制", content: "Level_Ctr" },
                    script5: { name: "战斗控制", content: "Battle_Ctr" },
                },
                Script_Base_Dic: { //排序无关scriptX数字X，随意拖动，name做显示用，可以更改
                    script1: { name: "cc.Component", content: "cc.Component" },
                    script2: { name: "单例模式基类", content: "Singleton" },
                    script3: { name: "SuperUI", content: "SuperUI" },
                    script4: { name: "SuperRole", content: "SuperRole" },
                    script5: { name: "无基类", content: "Empty" },
                },
                Script_Interface_Dic: { //排序无关scriptX数字X，自上向下排序，可以随意拖动
                    script1: { name: "无接口", content: "" },
                    script2: { name: "开始拖拽", content: "IDragStart" },
                    script3: { name: "持续拖拽", content: "IDrag" },
                    script4: { name: "结束拖拽", content: "IDragEnd" },
                    script5: { name: "全部拖拽", content: "IDragStart,IDrag,IDragEnd" },
                }
            },
            methods: {
                showTip(msg) { //this.$els是实例，v-el:val 赋予标识，用$实例取出来
                    this.$els.tip.innerText = msg;
                    setTimeout(() => { this.$els.tip.innerText = '--'; }, 2000);
                },

                /** 给节点添加图片：
                 ** 目前res以外的路径作为texture，即使找到也无法赋值成功，醉了!
                 ** 在res文件夹根目录：预留了UI文件夹的位置，没有同名文件，可以先放进去赋值，之后再拖出来即可。 */
                onSetTexture() {
                    var uuid_node = this.$els.node_tar.value;
                    var uuid_tex = this.$els.tex_tar.value;
                    Editor.Scene.callSceneScript('fe-code-try', 'set-texture', uuid_node, uuid_tex, (err,) => { });
                },

                //#region  设置目标节点 以及导航
                onSetTar_Cvs() {
                    var name_target = 'Canvas'
                    Editor.Scene.callSceneScript('fe-code-try', 'set-target-node', name_target, (err, uuid) => {
                        this.$els.node_tar.value = uuid;
                    });
                },

                onSetTar_Last() {
                    var uuid = this.$els.node_tar.value; //若为空，则直接赋值为Canvas
                    //获取相对于node_tar上一个节点的uuid
                    Editor.Scene.callSceneScript('fe-code-try', 'set-target-node-last', uuid, (err, uuid) => {
                        this.$els.node_tar.value = uuid;
                    });
                },

                onSetTar_Next() {
                    var uuid = this.$els.node_tar.value; //若为空，则直接赋值为Canvas
                    //获取相对于node_tar下一个节点的uuid
                    Editor.Scene.callSceneScript('fe-code-try', 'set-target-node-next', uuid, (err, uuid) => {
                        this.$els.node_tar.value = uuid;
                    });
                },
                //#endregion

                /** 创建target节点下的子节点【需要uuid，指定name】 */
                onCreateNode() {
                    // uuid指定 不用去寻找节点，直接使用父节点uuid创建子节点即可。
                    var uuid = this.$els.node_tar.value; //若为空，则直接放到场景下
                    var name = this.$els.node_name.value; //节点的name
                    if (name == '') { name = 'New Node'; }
                    if (uuid == null) {
                        Editor.log("父节点 Target 为空，创建到场景下");
                        //创建后 需不需要设置带target的位置？ 发送消息即可
                        Editor.Ipc.sendToPanel('scene', 'scene:create-node-by-classid', name, '', null);
                    } else { //创建后 需不需要设置带target的位置？
                        Editor.Ipc.sendToPanel('scene', 'scene:create-node-by-classid', name, '', uuid);
                    }
                },

                //#region 添加组件
                /** 找到name节点 挂载同名脚本，脚本为空，提示创建！ */
                onAddScript() {
                    Editor.log('功能已迁移至节点生成器！');
                },

                onAddSprite() {
                    var uuid = this.$els.node_tar.value; //根据cvs的节点获得name节点，进行组件挂载！
                    Editor.Scene.callSceneScript('fe-code-try', 'add-Sprite', uuid, (err) => { });
                },

                onAddButton() {
                    var uuid = this.$els.node_tar.value; //根据cvs的节点获得name节点，进行组件挂载！
                    Editor.Scene.callSceneScript('fe-code-try', 'add-Button', uuid, (err) => { });
                },

                onAddBlock() {
                    var name = this.$els.node_tar.value; //根据cvs的节点获得name节点，进行组件挂载！
                    Editor.Scene.callSceneScript('fe-code-try', 'add-Block', name, (err) => { });
                },

                //#endregion

                //#region 设置图片尺寸Widget控件
                /** 根据uuid获得name节点，进行组件挂载！ */
                onAddWidget() {
                    var uuid = this.$els.node_tar.value;
                    Editor.Scene.callSceneScript('fe-code-try', 'add-Widget', uuid, 0, (err) => { });
                },
                setWidgetFull() {
                    var uuid = this.$els.node_tar.value;
                    Editor.Scene.callSceneScript('fe-code-try', 'add-Widget', uuid, 1, (err) => { });
                },
                setWidgetCenter() {
                    var uuid = this.$els.node_tar.value;
                    Editor.Scene.callSceneScript('fe-code-try', 'add-Widget', uuid, 2, (err) => { });
                },
                setSpriteTRIMMED() {
                    var uuid = this.$els.node_tar.value;
                    Editor.Scene.callSceneScript('fe-code-try', 'add-Widget', uuid, 3, (err) => { });
                },
                //#endregion

                //#region 设置Canvas
                onSetCanvas() {
                    var w = this.$els.cvs_width.value;
                    var h = this.$els.cvs_height.value;
                    Editor.Scene.callSceneScript('fe-code-try', 'init-canvas', w, h, (err) => { });
                },
                /** 变更横竖 */
                onRotCanvas() {
                    var w = this.$els.cvs_width.value;
                    var h = this.$els.cvs_height.value;
                    this.$els.cvs_width.value = h;
                    this.$els.cvs_height.value = w;
                },
                onDesign1334() {
                    this.$els.cvs_width.value = 1334;
                    this.$els.cvs_height.value = 750;
                },
                onDesign1920() {
                    this.$els.cvs_width.value = 1920;
                    this.$els.cvs_height.value = 1080;
                },
                //#endregion

                setAuto() {
                    var uuid_tex = this.$els.tex_tar.value;
                    Editor.Scene.callSceneScript('fe-code-try', 'set-auto', uuid_tex, (err,) => { });
                },

                onCreateScene() {
                    // Editor.Ipc.sendToPanel('scene', 'scene:new-scene');
                    // Editor.Ipc.sendToPanel('scene', 'scene:stash-and-save', 'Start');
                },

                //#region 选择 更新 url 创建模板目录
                onChange_Url_1(event) {
                    //当前组件的值 = 事件 的 目标 的$ ui-后边的组件类型. value
                    let url_ = event.currentTarget.$select.value;
                    this.$els.url_1.value = url_;
                    this.onUpdateUrl();
                    this.showTip('【更新】 url_1');
                },
                onChange_Url_2(event) {
                    //当前组件的值 = 事件 的 目标 的$ ui-后边的组件类型. value
                    let url_ = event.currentTarget.$select.value;
                    this.$els.url_2.value = url_;
                    this.onUpdateUrl();
                    this.showTip('【更新】 url_2');
                },
                onUpdateUrl() {
                    let url1 = '';
                    let url2 = '';
                    if (this.$els.url_1.value != '') {
                        url1 = this.$els.url_1.value;
                    }
                    if (this.$els.url_2.value != '') {
                        if (url1 == '') { url2 = this.$els.url_2.value; } else { url2 = "/" + this.$els.url_2.value; }
                    }

                    let t = url1 + url2;
                    let error = [ //中英文符号校验
                        "`", "~", "!", "@", "#", "%", "^", "&", "*", "(", ")", " ",
                        ",", "<", ">", "?", ";", ":", "'", "\"", "\\",
                        "|", "-", "+", "=", "·", "[", "]", "——", "—", "……", "…",
                        "！", "￥", "（", "）", "，", "。", "《", "》", "？", "；", "：",
                        "‘", "’", "“", "”", "【", "】", "{", "}", "、", ".",
                    ]
                    //插入字符：清除任意位置的其他符号
                    for (let i = 0; i < error.length; i++) {
                        if (t.includes(error[i])) {
                            //Editor.log("替换了"+ error[i]);
                            this.$els.name_script.value = t.replace(error[i], '');
                        }
                    }
                    this.$els.url_script.value = t;

                    this.$els.res_url.innerText = 'db://assets/' + this.$els.url_script.value;
                },
                /** 生成模板目录 x11 */
                onMakeDir() {
                    let Url_assets = Editor.Project.path + "/assets/"; // 绝对路径
                    let url_assets = 'db://assets/'; // 相对路径,指向文件
                    let urls = [ //11个文件夹
                        'resources/Audio',
                        'resources/Prefab/Enemy', 'resources/Prefab/Hero', 'resources/Prefab/UI',
                        'Scene',
                        'Script/Base', 'Script/Game', 'Script/Singleton', 'Script/Tools', 'Script/UI',
                        'UI',
                    ]
                    Editor.log('目录创建开始！');
                    for (let i = 0; i < urls.length; i++) {
                        const url = urls[i];

                        fs.readdir(Url_assets + url, function (err1) {
                            if (!err1) {
                                //存在
                                Editor.log('目录存在:' + url);
                            } else {
                                //不存在 进行创建
                                //Editor.log('进行创建！' + url);
                                fs.mkdir(Url_assets + url, { recursive: true }, (err2) => {
                                    if (err2) Editor.log('创建目录出错:' + err2);
                                    else {
                                        Editor.log(url + '创建完毕！'); //创建 再删除 临时文件
                                        //Editor.assetdb.create(url_assets + url + '/temp.ts', '// 这是一个临时生成文件', (err3) => { if (err3) { Editor.log("创建临时文件失败"); } });
                                    }
                                });
                            }
                        });
                    }
                    setTimeout(() => {
                        this.onRefresh();
                    }, 1000);
                },
                /** 去除临时文件 file.ts + file.ts.meta */
                onRemoveTS(url, name_) {
                    fs.readFile(url + '/' + name_ + '.ts', function (err1, datas) {
                        if (!err1) { //存在文件 删除
                            fs.unlink(url + '/' + name_ + '.ts', (err) => {
                                if (err) {
                                    Editor.log("RM FAIL,手动删除temp" + url);
                                    //setTimeout(() => {
                                    //Editor.log('二次清除：2s后执行');
                                    //this.onRemoveTS(url, 'temp');
                                    //}, 2000);
                                } else {
                                    //Editor.log("RM TS");
                                }
                            });
                        }
                    });
                    fs.readFile(url + '/' + name_ + '.ts.meta', function (err1, datas) {
                        if (!err1) { //存在文件 删除
                            fs.unlink(url + '/' + name_ + '.ts.meta', (err) => {
                                if (err) {
                                    Editor.log("RM FAIL,手动删除temp" + url);
                                } else {
                                    //Editor.log("RM META");
                                }
                            });
                        }
                    });
                },

                /** 刷新目录 */
                onRefreshDir() {
                    Editor.assetdb.refresh('db://assets/resources', function (err, results) { });
                    Editor.assetdb.refresh('db://assets/Scene', function (err, results) { });
                    Editor.assetdb.refresh('db://assets/Script', function (err, results) { });
                    Editor.assetdb.refresh('db://assets/UI', function (err, results) { });
                },
                //#endregion

                //#region 更新脚本名字1 GAME

                // 更新脚本名字1 GAME
                onChange_Name(event) {
                    //当前组件的值 = 事件 的 目标 的$ ui-后边的组件类型. value
                    let name_ = event.currentTarget.$select.value;
                    if (name_ != '--') {
                        //this.$els.node_name.value = name_;
                        this.$els.name_script.value = name_;
                    }
                    this.onPreview();
                    this.showTip('【更新】 脚本名');
                },

                // 更新脚本名字1 GAME
                onChange_Name_GAME() {
                    //当前组件的值 = 事件 的 目标 的$ ui-后边的组件类型. value
                    let name_ = this.$els.game_name_select.value;
                    if (name_ != '--') {
                        this.$els.node_name.value = name_;
                        this.$els.name_script.value = name_;
                    }
                    this.onPreview();
                    this.showTip('【更新】 脚本名');
                },

                // 更新脚本名字2 UI
                onChange_Name_UI() {
                    //当前组件的值 = 事件 的 目标 的$ ui-后边的组件类型. value
                    let name_ = this.$els.ui_name_select.value;
                    if (name_ != '--') {
                        this.$els.node_name.value = name_;
                        this.$els.name_script.value = name_;
                    }
                    this.onPreview();
                    this.showTip('【更新】 脚本名');
                },

                onUpdateName() {
                    let t = this.$els.name_script.value; //toString();
                    //Editor.log(this.$els.name_script.value);

                    //长度限制
                    if (t.length >= 20) {
                        //Editor.log('too long -1');
                        this.$els.name_script.value = t.substr(0, t.length - 1);
                    }

                    //插入字符：清除开头数字
                    for (let i = 0; i < 10; i++) {
                        if (t.substr(0, 1) == i.toString()) { this.$els.name_script.value = t.substr(1, t.length - 1); }
                    }
                    let error = [ //中英文符号校验
                        "`", "~", "!", "@", "#", "%", "^", "&", "*", "(", ")", " ",
                        ",", "/", "<", ">", "?", ";", ":", "'", "\"", "\\",
                        "|", "-", "+", "=", "·", "[", "]", "——", "—", "……", "…",
                        "！", "￥", "（", "）", "，", "。", "《", "》", "？", "；", "：",
                        "‘", "’", "“", "”", "【", "】", "{", "}", "、", ".",
                    ]
                    //插入字符：清除任意位置的其他符号
                    for (let i = 0; i < error.length; i++) {
                        if (t.includes(error[i])) {
                            //Editor.log("替换了"+ error[i]);
                            this.$els.name_script.value = t.replace(error[i], '');
                        }
                    }
                    this.onPreview();
                    //Editor.log(this.$els.name_script.value)
                },
                //#endregion

                //#region 选择和更新 基类 接口
                onChangeBase(event) {
                    let base_ = event.currentTarget.$select.value;
                    this.$els.base_script_input.value = base_;
                    this.onPreview();
                    this.showTip('【更新】 base');
                },
                onUpdateBase() {
                    let t = this.$els.base_script_input.value;
                    if (t.length >= 20) {
                        this.$els.base_script_input.value = t.substr(0, t.length - 1);
                    }
                    //插入字符：清除开头数字
                    for (let i = 0; i < 10; i++) {
                        if (t.substr(0, 1) == i.toString()) {
                            this.$els.base_script_input.value = t.substr(1, t.length - 1);
                        }
                    }
                    let error = [ //中英文符号校验
                        "`", "~", "!", "@", "#", "%", "^", "&", "*", "(", ")", " ",
                        ",", "/", "<", ">", "?", ";", ":", "'", "\"", "\\",
                        "|", "-", "+", "=", "·", "[", "]", "——", "—", "……", "…",
                        "！", "￥", "（", "）", "，", "。", "《", "》", "？", "；", "：",
                        "‘", "’", "“", "”", "【", "】", "{", "}", "、",
                    ]
                    //插入字符：清除任意位置的其他符号
                    for (let i = 0; i < error.length; i++) {
                        if (t.includes(error[i])) {
                            this.$els.base_script_input.value = t.replace(error[i], '');
                        }
                    }
                    this.onPreview();
                },
                onChangeInterface1() {
                    let inter1 = this.$els.interface_script_select1.value;

                    this.$els.ifunall.checked = false;
                    this.onAlliFun();

                    switch (inter1) {
                        case '':
                            this.$els.ifunall.checked = false;
                            this.onAlliFun();
                            break;
                        case 'IDragStart':
                            this.$els.ifun1.checked = true;
                            break;
                        case 'IDrag':
                            this.$els.ifun2.checked = true;
                            break;
                        case 'IDragEnd':
                            this.$els.ifun3.checked = true;
                            break;
                        case 'IDragStart,IDrag,IDragEnd':
                            this.$els.ifunall.checked = true;
                            this.onAlliFun();
                            break;
                    }

                    this.$els.interface_script_input.value = inter1;

                    this.onPreview();
                    this.showTip('【更新】 interface');
                },
                onUpdateInterface() {
                    let t = this.$els.interface_script_input.value;
                    //Editor.log("t= "+this.$els.interface_script_input.value);

                    //插入字符：清除开头数字
                    for (let i = 0; i < 10; i++) {
                        if (t.substr(0, 1) == i.toString()) {
                            this.$els.interface_script_input.value = t.substr(1, t.length - 1);
                            //Editor.log("1st number=="+i);
                        }
                    }

                    let error = [ //中英文符号校验
                        "`", "~", "!", "@", "#", "%", "^", "&", "*", "(", ")", " ",
                        "/", "<", ">", "?", ";", ":", "'", "\"", "\\",
                        "|", "-", "+", "=", "·", "[", "]", "——", "—", "……", "…",
                        "！", "￥", "（", "）", "，", "。", "《", "》", "？", "；", "：",
                        "‘", "’", "“", "”", "【", "】", "{", "}", "、", ".",
                    ]

                    //插入字符：清除任意位置的其他符号
                    for (let i = 0; i < error.length; i++) {
                        if (t.includes(error[i])) {
                            this.$els.interface_script_input.value = t.replace(error[i], '');
                            //Editor.log("error code=="+error[i]);
                        }
                    }
                    this.onPreview();
                    //Editor.log(this.$els.interface_script_input.value);
                },
                onCreateSingleton() {
                    let _name = 'Singleton'; //脚本名

                    let _code = 'const { ccclass, property } = cc._decorator;\n\n'; //代码预览文本
                    _code += 'export class Singleton<T>\n{\n\tprivate static ins: any = null;\n\n\t/** 泛型方法约束 - 构造函数约束 返回值 T */\n';
                    _code += '\tpublic static GetIns<T>(t: { new(): T }) { if (this.ins == null) { this.ins = new t(); } return this.ins as T; }\n\n';
                    _code += '\t// 创建 实例\n\t// static creatIns<T>(t:{new():T;}):T{ return new t(); }\n}';

                    this.onCreateScriptStr(_name, _code, 'Singleton');
                },
                onCreateIDrag() {
                    let _name = 'IDrag'; //脚本名

                    let _code = 'declare module "IDRAG"\n{\n'; //代码预览文本
                    _code += '\texport interface IDragStart {\n\t\tOnDragStart(): void;\n\t}\n'
                    _code += '\texport interface IDrag {\n\t\tOnDrag(e: cc.Event.EventTouch): void;\n\t}\n'
                    _code += '\texport interface IDragEnd {\n\t\tOnDragEnd(): void;\n\t}\n'
                    _code += '\texport interface IDragCancel {\n\t\tOnDragCancel(): void;\n\t}\n}'
                    this.onCreateScriptStr(_name, _code, 'Base');
                },
                /** 创建基类 接口 */
                onCreateScriptStr(_name, _code, folder) {
                    let Url_assets = Editor.Project.path + "/assets/";
                    let _url = 'Script/' + folder; // asset/ 之后的路径[中]
                    let _url_foder = Url_assets + _url; // 本地绝对路径,无脚本
                    let _url_script = _url_foder + '/' + _name + '.ts'; // 本地的绝对路径,指向脚本
                    let _url_script_create = 'db://assets/' + _url + '/' + _name + '.ts'; // 相对路径,指向脚本

                    this.onCreateTS(_url_foder, _url_script, _url_script_create, _name, _code, true);
                },
                //#endregion

                //#region 创建 清除 刷新 预览
                onClearName() {
                    this.showTip('脚本清空');

                    ScriptName = '';
                    this.$els.name_script.value = '';

                    data_code = '';
                    this.$els.sript_perview.value = 'none'; //代码预览文本
                },
                onPreview() {
                    let _name = this.$els.name_script.value;
                    if (_name == '') {
                        this.showTip('脚本名为空');
                        return;
                    }

                    this.showTip('刷新预览');

                    //脚本创建
                    let data_code = ''; //增加接口引用 检验接口存在的文件夹 创建后 直接修复创建函数
                    //设置基类名称 继承单例 不去引入头文件 直接创建出来再解决。
                    let BaseName = this.$els.base_script_input.value;
                    if (BaseName == "Singleton") { BaseName = ' extends Singleton<' + _name + '>'; } else if (BaseName == "Empty") { BaseName = ''; } else { BaseName = ' extends ' + this.$els.base_script_input.value; }

                    //设置基类导入文件
                    if (BaseName.includes('SuperUI')) data_code += 'import SuperUI from "../Base/SuperUI";\n\n';
                    else if (BaseName.includes('SuperRole')) data_code += 'import SuperRole from "../Base/SuperRole";\n\n';

                    //设置接口名称和导入
                    let InterName = this.$els.interface_script_input.value;
                    if (InterName != '') { InterName = ' implements ' + InterName; } else { InterName = ''; }
                    if (InterName != '') data_code += 'import { IDrag, IDragEnd, IDragStart } from "IDRAG";\n\n'

                    if (BaseName.includes("Singleton")) { data_code += 'import { Singleton } from "../Singleton/Singleton";\n\n'; }
                    data_code += 'const {ccclass, property} = cc._decorator;\n\n@ccclass\n';
                    data_code += 'export default class ' + _name + BaseName + InterName + "\n{\n\n";

                    //单例判断
                    let Ins = '\t/** 单例 */\n\tprivate static instance: ' + _name + ' = new ' + _name + '();\n\n';
                    Ins += '\t/** 获取单例 */\n\tstatic getIns() { return ' + _name + '.instance; }\n\n'
                    if (this.$els.myfun5.value) { data_code += Ins; }

                    if (this.$els.myfun4.value) { data_code += '\tconstructor() { super(); }\n\n'; }
                    if (this.$els.fun6.value) { data_code += '\tonEnable(){  }\n\n'; }
                    if (this.$els.fun1.value) {
                        data_code += '\tonLoad(){\n';
                        if (this.$els.myfun6.value || this.$els.myfun7.value)
                            data_code += '\t\tcc.director.getCollisionManager().enabled = true;';
                        data_code += '\n\t}\n\n';
                    }
                    if (this.$els.fun2.value) { data_code += '\tstart(){  }\n\n'; }

                    if (this.$els.myfun1.value) { data_code += '\tinitVar(){  }\n\n'; }
                    if (this.$els.myfun2.value) { data_code += '\tinit(){  }\n\n'; }

                    if (BaseName.includes('SuperUI')) {
                        data_code += '\tinitVar() {\n\t}\n\n';
                        data_code += '\tinitBtn(){\n';
                        data_code += '\t}\n\n';
                        data_code += '\tinitMsg(){\n\t}\n\n';
                        data_code += '\tUpdatePanel(){\n\t}\n\n';
                    }
                    if (BaseName.includes('SuperRole')) {
                        data_code += '\tinitAI() {\n\t}\n\n';
                        data_code += '\tinitBat(){\n\t}\n\n';
                        data_code += '\tinitRole(){\n\t}\n\n';
                        data_code += '\tinitDragon(){\n\t}\n\n';
                    }

                    if (this.$els.ifun1.value) { data_code += '\tOnDragStart(): void { }\n\n'; }
                    if (this.$els.ifun2.value) { data_code += '\tOnDrag(e: cc.Event.EventTouch): void { }\n\n'; }
                    if (this.$els.ifun3.value) { data_code += '\tOnDragEnd(): void { }\n\n'; }

                    if (this.$els.myfun6.value) { data_code += '\tonCollisionEnter(other: cc.Collider, self: cc.Collider): void {\n\n\t}\n\n'; }
                    if (this.$els.myfun7.value) { data_code += '\tonCollisionExit(other: cc.Collider, self: cc.Collider): void {\n\n\t}\n\n'; }

                    if (this.$els.fun3.value) { data_code += '\tupdate(dt){  }\n\n'; }
                    if (this.$els.fun4.value) { data_code += '\tlateUpdate(){  }\n\n'; }

                    if (this.$els.myfun3.value) { data_code += '\tUpdatePanel(){  }\n\n'; }

                    if (this.$els.fun5.value) { data_code += '\tonDestroy(){  }\n\n'; }
                    if (this.$els.fun7.value) { data_code += '\tonDisable(){  }\n\n' }

                    data_code += '}';

                    this.$els.sript_perview.value = data_code;
                },
                onCreate() {
                    let Url_assets = Editor.Project.path + "/assets/";
                    let _name = this.$els.name_script.value; //脚本名
                    let _code = this.$els.sript_perview.value; //代码预览文本
                    let _url = this.$els.url_script.value; // asset/ 之后的路径[中]
                    let _url_foder = Url_assets + _url; // 本地绝对路径,无脚本
                    let _url_script = _url_foder + '/' + _name + '.ts'; // 本地的绝对路径,指向脚本
                    let _url_script_create = 'db://assets/' + _url + '/' + _name + '.ts'; // 相对路径,指向脚本

                    // Editor.log("【创建】目录：" + _url_foder); // Editor.log("【创建】目录：" + _url_script); // Editor.log("【创建】目录：" + _url_script_create);

                    if (_name == '') { this.showTip("脚本名称为空"); return; }
                    if (this.$els.sript_perview.value == '') { this.showTip("请先预览再创建"); return; }

                    this.onCreateTS(_url_foder, _url_script, _url_script_create, _name, _code, false);
                },
                onCreate_Str() {
                    this.showTip('【强创建】');

                    let Url_assets = Editor.Project.path + "/assets/";
                    let _name = this.$els.name_script.value; //脚本名
                    let _code = this.$els.sript_perview.value; //代码预览文本
                    let _url = this.$els.url_script.value; // asset/ 之后的路径[中]
                    let _url_foder = Url_assets + _url; // 本地绝对路径,无脚本
                    let _url_script = _url_foder + '/' + _name + '.ts'; // 本地的绝对路径,指向脚本
                    let _url_script_create = 'db://assets/' + _url + '/' + _name + '.ts'; // 相对路径,指向脚本

                    if (_name == '') { this.showTip("脚本名称为空"); return; }
                    if (this.$els.sript_perview.value == '') { this.showTip("请先预览再创建"); return; }

                    this.onCreateTS(_url_foder, _url_script, _url_script_create, _name, _code, true);
                },
                onRefresh() {
                    this.showTip('刷新assets文件夹，会出现轻微卡顿');

                    Editor.assetdb.refresh('db://assets', function (err, results) { });
                },
                /** 创建！ */
                onCreateTS(_url_foder, _url_script, _url_script_create, _name, _code, isSTR) {
                    fs.readdir(_url_foder, function (err) {
                        if (err) { //路径不存在
                            if (!isSTR) { Editor.log("【创建】 路径不存在，可以使用强创建"); } else {
                                //Editor.log("【强创建】 目录以及脚本创建成功");
                                fs.mkdir(_url_foder, { recursive: true }, (err2) => {
                                    if (err2) { return Editor.error(err2); } else {
                                        Editor.log("【强创建】【目录】" + _url_foder + "【脚本】" + _name + '.ts');
                                        Editor.assetdb.createOrSave(_url_script_create, _code, (err) => { }); //脚本创建 自动刷新
                                    }
                                });
                            }
                        } else { //路径存在
                            fs.readFile(_url_script, function (err1, datas) {
                                if (err1) { //无同名文件存在，进行脚本创建
                                    Editor.assetdb.create(_url_script_create, _code, (err2) => { });
                                    Editor.log(_name + '.ts 创建成功');
                                } else {
                                    if (isSTR) {
                                        Editor.assetdb.createOrSave(_url_script_create, _code, (err) => { }); //脚本创建 自动刷新
                                        Editor.log("【强创建】 " + _name + ".ts 已更新数据，脚本已备份到控制台!\n" + datas.toString());
                                    } else {
                                        Editor.log("【创建】 " + _name + ".ts 已存在");
                                    }
                                }
                            });
                        }
                    });
                },
                //#endregion

                //#region 选择函数
                onAllFun() {
                    if (this.$els.funall.checked) {
                        this.$els.fun1.checked = true;
                        this.$els.fun2.checked = true;
                        this.$els.fun3.checked = true;
                        this.$els.fun4.checked = true;
                        this.$els.fun5.checked = true;
                        this.$els.fun6.checked = true;
                        this.$els.fun7.checked = true;
                    } else {
                        this.$els.fun1.checked = false;
                        this.$els.fun2.checked = false;
                        this.$els.fun3.checked = false;
                        this.$els.fun4.checked = false;
                        this.$els.fun5.checked = false;
                        this.$els.fun6.checked = false;
                        this.$els.fun7.checked = false;
                    }
                    this.showTip("生命周期全选");
                },
                onAllMyFun() {
                    if (this.$els.myfunall.checked) {
                        this.$els.myfun1.checked = true;
                        this.$els.myfun2.checked = true;
                        this.$els.myfun3.checked = true;
                        this.$els.myfun6.checked = true;
                        this.$els.myfun7.checked = true;
                    } else {
                        this.$els.myfun1.checked = false;
                        this.$els.myfun2.checked = false;
                        this.$els.myfun3.checked = false;
                        this.$els.myfun6.checked = false;
                        this.$els.myfun7.checked = false;
                    }
                    this.showTip("预置函数全选");
                },
                onAlliFun() {
                    if (this.$els.ifunall.checked) {
                        this.$els.ifun1.checked = true;
                        this.$els.ifun2.checked = true;
                        this.$els.ifun3.checked = true;
                    } else {
                        this.$els.ifun1.checked = false;
                        this.$els.ifun2.checked = false;
                        this.$els.ifun3.checked = false;
                    }
                    this.showTip("接口函数全选");
                }
                //#endregion

            }
        });
    },
});