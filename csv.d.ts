declare namespace csv {
	interface Idn_NN {
		id: number
		n: number
	}
	interface Iditemn_NNN {
		id: number
		item: number
		n: number
	}
	interface Idn_SN {
		id: string
		n: number
	}
	interface Filenpos_SNS {
		file: string
		n: number
		pos: string
	}
	interface Idval_NN {
		id: number
		val: number
	}
	interface LvClvSatkC_NNN {
		lvC: number
		lvS: number
		atkC: number
	}
	interface Idn_NS {
		id: number
		n: string
	}
	interface Cntidn_NNN {
		cnt: number
		id: number
		n: number
	}
	interface Cs_NN {
		c: number
		s: number
	}
	interface Starlv_NN {
		star: number
		lv: number
	}
	interface Lvidn_NNN {
		lv: number
		id: number
		n: number
	}
	interface Idvaln_NNN {
		id: number
		val: number
		n: number
	}
	interface Idnw_NNN {
		id: number
		n: number
		w: number
	}
	interface Idnlevel_NNN {
		id: number
		n: number
		level: number
	}
	interface Idnp_NNN {
		id: number
		n: number
		p: number
	}
	interface Idminmaxwgrid_NNNNN {
		id: number
		min: number
		max: number
		w: number
		grid: number
	}
	interface Posidlvhpenergy_NNNNN {
		pos: number
		id: number
		lv: number
		hp: number
		energy: number
	}
	interface Posidxskill_NNN {
		pos: number
		idx: number
		skill: number
	}
	interface Posncritdeath_NNNN {
		pos: number
		n: number
		crit: number
		death: number
	}
	interface Posn_NN {
		pos: number
		n: number
	}
	interface Scalexy_NNN {
		scale: number
		x: number
		y: number
	}
	interface Idnlv_NNN {
		id: number
		n: number
		lv: number
	}
	interface Idnlock_NNN {
		id: number
		n: number
		lock: number
	}
	interface AceChallengeGiftDef {
		id: number
		group: number
		level: number
		achvTab: number
		P2: number
		icon: Idn_NN[]
		gift: Idn_NN[]
	}
	interface AchievementDef {
		id: number
		typ: number
		subTask: number[]
		name_key: number
		name: string
	}
	interface AchvTabDef {
		achvId: number
		cond: number
		des: string
		des_key: number
	}
	interface ActAsylumDef {
		mail: number
	}
	interface ActDaiFirstChargeDef {
		id: number
		typ: number
		page: number
		group: number
		limit: number[]
		reward: Idn_NN[]
		billGiftId: number
		price: number
		heading_key: number
		heading: string
	}
	interface ArenaDef {
		id: number
		counter: number
		itemBuy: number
		refreshCD: number
		recordMax: number
		arenaAttack: Idn_NN[]
	}
	interface ArenaCaseDef {
		id: number
		num: number
		casereward: Idn_NN[]
	}
	interface ArenaChamDanDef {
		id: number
		down: number
		ranking: number
		danIcon: string
		name_key: number
		name: string
		rank_key: number
		rank: string
	}
	interface ArenaChamGlobalDef {
		id: number
		counter: number
		counterBuy: number
		refreshCD: number
		recordMax: number
	}
	interface ArenaChamWeekDef {
		id: number
		typ: number
		pvpUp: number
		pvpDown: number
		rankreward: Idn_NN[]
		dailyPvpMail: number
	}
	interface ArenaDayDef {
		id: number
		pvpUp: number
		pvpDown: number
		rankreward: Idn_NN[]
		dailyPvpMail: number
	}
	interface ArenaPeakGlobalDef {
		id: number
		ranknum: number
		coinIcon: string
		guessCoin: number
		exchange: number
		guessV: number
		guessF: number
		entry: number
		group: string[]
		burial: number
	}
	interface ArenaPeakWeekDef {
		id: number
		pvpUp: number
		pvpDown: number
		rankreward: Idn_NN[]
		dailyPvpMail: number
	}
	interface ArenaWeekDef {
		id: number
		pvpUp: number
		pvpDown: number
		rankreward: Idn_NN[]
		dailyPvpMail: number
	}
	interface ArtifactGlobalDef {
		id: number
		quality: string
		artifactIcon: string
		artifactFile: string
		artifact_key: number
		artifact: string
	}
	interface AsgardDef {
		id: number
		pic: string
		name_key: number
		name: string
		res_key: number
		res: string
	}
	interface AsgardGodDef {
		Id: number
		godNum: number
		counterFree: number
		counterPay: number
		applyLimit: number
		guardTime: Idn_NN[]
		asgardGod: number
		limit: number
	}
	interface AsgardGodRankDef {
		id: number
		rankReward: Idn_NN[]
		guardNum: Idn_NN[]
		godReward: Iditemn_NNN[]
		godMail: Idn_NN[]
	}
	interface AsgardRewardDef {
		id: number
		asgardTpy: number
		rankNum: number
		rankreward: Idn_NN[]
	}
	interface AsgardUpDef {
		lv: number
		cost: Idn_NN[]
		attr: Idn_NN[]
	}
	interface AttributeDef {
		attributeId: number
		name: string
		alias: string
		icon: string
		sIcon: string
		valueType: number
		powerType: number
		limitValue: number
		des1: string
		des2: string
		powerRatio: number
		score: number
		name_key: number
	}
	interface BanquetGiftDef {
		id: number
		giftid: number
		reward: Idn_NN[]
		price: Idn_NN[]
		billGiftId: number
		times: number
		reset: number
		name_key: number
		name: string
	}
	interface BanquetGiftsDef {
		id: number
		item: Idn_NN[]
		price: Idn_NN[]
		counter: number
		popularity: number
	}
	interface BanquetGlobalDef {
		id: number
		share: number
		item: number
		exchange: number
		recordMax: number
		presetsId: number
		balance: number
	}
	interface BanquetHeroDef {
		id: number
		popularity: number
	}
	interface BanquetHoldDef {
		id: number
		material: Idn_NN[]
		position: number
		duration: number
		basis: number
		popularity: number
		name_key: number
		name: string
	}
	interface BanquetRewardDef {
		id: number
		rankUp: number
		rankDown: number
		rankReward: Idn_NN[]
		rankMail: number
	}
	interface BattleTypeDef {
		batType: string
		isFront: number
		isNext: number
		bgImage: string
		battleBgm: string
		team: Idn_SN[]
		pvpTeam: Idn_SN[]
		round: number
		pvp: number
		change: number
		skipFight: Idn_NN[]
		statusOrAnd: number
		speed: number
		noLevel: number
		warReportLimit: number
		warReportTime: number
		fast: number
		moduleId: number
		battle: number
		name_key: number
		name: string
	}
	interface BeastHomeLvDef {
		homeLv: number
		cost: Idn_NN[]
		attr: Idn_NN[]
	}
	interface BeastHomeStepDef {
		id: number
		lvCap: number
		cost: Idn_NN[]
		attr: Idn_NN[]
		beastSearch: number
		heroAttr: number
	}
	interface BoutiqueGlobalDef {
		id: number
		moduleId: number
		label: number[]
		themeIcon: string[]
		heading_key: number
		heading: string
		subtitle_key: number
		subtitle: string
		banner: string
	}
	interface BuffDef {
		id: number
		bufficon: string
		name_key: number
		name: string
		color: string
		group: number
		overlap: number
		round: number
		heroAct: string
		calcRound: number
		persistJson: Filenpos_SNS[]
		position: string
		dispel: number
		deathDrop: number
		attribute: Idval_NN[]
		dynamic: number
		abnormal: number[]
		atkFrom: number
		atkRate: number
		passive: number[]
		eBuff_DmgRate: number[]
		eBuff_CalcDmg: number[]
		eBuff_Damage: number[]
		eBuff_Round: number[]
		eBuff_Attr: number[]
		eBuff_Passive: number[]
	}
	interface CollectionDef {
		ID: number
		level: number
		star: number
		maxLevel: number
		step: number
		reward: Idn_NN[]
		story_key: number
		story: string
		convenientStarDisplay: number
	}
	interface CompanyBlameDef {
		id: number
		blameDown: number
		blameUp: number
		levelPower1: LvClvSatkC_NNN[]
		monster1: number[]
	}
	interface CompanyGiftDef {
		id: number
		item: number
		group: string
		initialTimes: Idn_NS[]
		extraTimes: Idn_NS[]
		score: Idn_NN[]
		show: number[]
		limit: number
		limit1: number
	}
	interface CompanyLvevlDef {
		id: number
		exp: number
		point: number
		box: Idn_NN[]
		redPoint: number
	}
	interface CompanySnsEventDef {
		id: number
		eventRate: number
		eventIcon: string
		name_key: number
		name: string
		logId: number
	}
	interface CompanySnsGlobalDef {
		id: number
		eventGuarantee: number
		counterEvent: number
		counterHelp: number
		counterCaptive: number
		protect: number
		captureTime: number
		captureUp: number
		buckle: number
		obtain: number
		rescueSecond: number
		mailId: number
		log: number
	}
	interface CompanySnsLogDef {
		id: number
		des_key: number
		des: string
	}
	interface CompanyTalkDef {
		id: number
		talk_key: number
		talk: string
	}
	interface CounterDef {
		id: number
		showType: number
		maxValue: number
		ctype: number
		recover: string[]
		des: string
		icon: string
		color: number
		decorate: number
		errorcode: string
		buyCostId: number
		buyCost: number[]
	}
	interface CycleGiftDef {
		id: number
		giftid: number
		condition: Idn_NN[]
		reward: Idn_NN[]
		pay: number
		billGiftId: number
		times: number
		name_key: number
		name: string
	}
	interface DailyDef {
		id: number
		typeFb: number
		stage: number
		monsterLevel: number
		powerNeed: number
		reward: Idn_NN[]
		levelPower1: LvClvSatkC_NNN[]
		monster1: number[]
	}
	interface DailyTypeDef {
		Id: number
		name: string
		icon: string
		banner: string
		freeCounter: number
		payCounter: number
		status: number
		name_key: number
		des_key: number
		des: string
	}
	interface DivineBeastDef {
		id: number
		quality: number
		star: number
		role: number
		fightScale: number
		divineDebris: Idn_NN[]
		name_key: number
		name: string
		des_key: number
		des: string
	}
	interface DivineBeastCaseDef {
		id: number
		num: Idn_NN[]
		casereward: Idn_NN[]
	}
	interface DivineBeastStarDef {
		id: number
		star: number
		beasId: number
		cost: Idn_NN[]
		attr: Idn_NN[]
		skillUnique: number
		skillLv: number
		power: number
		skill_key: number
		skill: string
	}
	interface DivineBeastTramDef {
		id: number
		group: number
		beastTram: Idn_NN[]
		attr: Idn_NN[]
		name_key: number
		name: string
	}
	interface DivineMissionsDef {
		id: number
		subTask: number[]
		stage: number
		reward: Idn_NN[]
		position_key: string
		position: string
	}
	interface DivinebeastRoundDef {
		id: number
		lvCap: number[]
		slotPosition: number
	}
	interface DrawDef {
		Group: string
		typ: number
		plate: number
		name: string
		name_key: number
		des: string
		des_key: number
		cost: Idn_NN[]
		orderBtn: number[]
		equilCost: Idn_NN[]
		discount: Cntidn_NNN[]
		order: number
		orderUpper: number
		counter: number
		initialTimes: Idn_NS[]
		extraTimes: Idn_NS[]
		extraGroup: Idn_NN[]
		score: Idn_NN[]
		items: Idn_NN[]
	}
	interface DrawOddsDef {
		Id: number
		drawGroup: string
		item: Idn_NN[]
		probability: number
		isDelivery: number
	}
	interface DrawShowDef {
		id: number
		Group: string
		name: string
		hero: string
		probability: number
		name_key: number
		hero_key: number
	}
	interface EliminateGlobalDef {
		id: number
		paceInitial: number
		paceUp: number
		restore: number
		onTime: number
		offTime: number
	}
	interface EliminateLevelDef {
		id: number
		vertical: number
		transverse: number
		mazeEvents: number[]
		generate: number[]
		demand: number
		mapReward: Idn_NN[]
	}
	interface EliminateRewardDef {
		id: number
		pvpUp: number
		pvpDown: number
		rankReward: Idn_NN[]
		rankMail: number
	}
	interface EliminateSourceDef {
		id: number
		typ: number
		class: number
		prefab: string
		fractionClose: number
		fraction: number
	}
	interface EliteDef {
		id: number
		index: string
		mainId: number
		battleType: number
		limit: number
		bgImage: string
		battleImage: string
		bossImage: number
		showPower: number
		levelPower1: LvClvSatkC_NNN[]
		monster1: number[]
		levelPower2: LvClvSatkC_NNN[]
		monster2: number[]
		totalRewards: Idn_NN[]
		showReward: number[]
		idReward: number
		des_key: string
		des: string
	}
	interface EnergyOutputDef {
		id: number
		output: Idn_NN[]
		repeat: number
	}
	interface EquipAttrDef {
		id: number
		valueType: number
		group: number
		weight: number
		attribute: Idn_NN[]
		quality: number
		passive: number[]
		lv: number
	}
	interface EquipCloseDef {
		id: number
		cost: Idn_NN[]
		equip: Idn_NN[]
		equipGuar: number
	}
	interface EquipCoreDef {
		id: number
		typ: number
		quality: number
		grade: number
		base: number[]
		strip: number
		random: Idn_NN[]
		cover: number
		coverIcon: string
		activation: Idn_NN[]
		divide: Idn_NN[]
		aut: number
		nextID: number
		consume: Idn_NN[]
	}
	interface ErrorCodeDef {
		id: number
		des_key: number
		des: string
	}
	interface EventDef {
		id: number
		group: string
		prob: number
		evtProb: number[]
		fire: number
		fireTar: number
		fireTarArg: number[]
		fireArg: string
		follow: number
	}
	interface EventGroupDef {
		id: number
		cond: number
		tar: number
		tarArg: number[]
		arg: string
	}
	interface ExploreGlobalDef {
		id: number
		exploreRefreshCost: number
		exploreReFresh: number
		exploreSpeedUp: number
		costCounter: number
		exploreLimit: number
		prompt_key: number
		prompt: string
	}
	interface ExploreGradeDef {
		id: number
		subTask: Idn_NN[]
		taskNum: number
		taskQuality: Idn_NN[]
		taskbottom: Idn_NN[]
		refresh: Idn_NN[]
		initial: Idn_NN[]
	}
	interface ExploreTaskDef {
		id: number
		color: number
		weight: number
		cost: Idn_NN[]
		heroNum: number
		time: number
		reward: Idn_NN[]
		require: Idn_NN[]
		name_key: number
		name: string
		des_key: number
		des: string
	}
	interface FriendDef {
		id: number
		friendNum: number
		friendApplyList: number
		recvLimit: number
		getFriendly: Idn_NN[]
		chatCD: number
		chatLevel: number
		chatSeveral: number
		chatSimilairity: number
		chatNum: number
		chatRepeatNum: number
		chatMax: number
	}
	interface FriendPresetsDef {
		id: number
		des_key: number
		des: string
		linkId_key: number
		linkId: string
	}
	interface FrontCampDef {
		id: number
		front: number
		people: number
		add: Idn_NN[]
		icon: string
		name_key: number
		name: string
		des_key: number
		des: string
	}
	interface FunctionTimeDef {
		id: number
		openId: number
		onTime: string
		offTime: string
		stage_key: number
		stage: string
	}
	interface FundRewardDef {
		id: number
		billGiftId: number
		condition: Idn_NN[]
		freeReward: Idn_NN[]
		payReward: Idn_NN[]
	}
	interface FundWelfareDef {
		id: number
		billGiftId: number
		condition: number
		reward: Idn_NN[]
	}
	interface GlobalBattleDef {
		id: number
		maxRound: number
		uniqueCost: number
		normalEnergy: number
		beHitEnergy: number
		maxEnergy: number
		minHit: number
		critHeal: number
		critDmg: number
		coeff1: number
		coeff2: number
		coeff3: number
		coeff4: number
		campSuppress: Cs_NN[]
		campSupDmg: number
	}
	interface GlobalPublicDef {
		id: number
		heroBagNum: number
		bagBuy: number
		armorBagLimit: number
		stepLimit: number
		heroDestroyLimit: number
		playerNameChange: Idn_NN[]
		freeRename: number
		refundSwitch: number
		rankOpenDay: number[]
		battleDuration: number
		rankMobaiReward: Idn_NN[]
		summonMaxTime: number
		freeskipNum: number
		proportion: number
		price: number
		pushGiftMax: number
		tumbleCD: number
		redPonumLevel: number
		costTip: Idn_NN[]
		friendNum: number
		friendGift: number
		friendApply: number
		heroArtifact: Starlv_NN[]
		attrRate: number
		activeJudgment: number
		performanceShow: number
		employeeTalk: number
		regressionTime: number
		onhookStep: number[]
		skipBattleHard: number[]
		returnTiem: number
		vouchers: number
		vouchersThan: number
		autBattle: number
		autThread: number
		actTower: number
		autTime: number
		taskPop: number
	}
	interface GodGiftDef {
		day: number
		lvReward: Idn_NN[]
	}
	interface GuideDef {
		id: number
		guideType: number
		openId: number
		type: number
		event: string
		conditionGoto: string
		talk: number
		curWin: string
		figLocation: string
		tagBtn: string[]
		skip: number
		closeGuide: number
		rollback: number
		jumpTo: number
		video: string
	}
	interface GuideTalkDef {
		id: number
		card: number
		name_key: number
		name: string
		talk_key: number
		talk: string
		voice: string
	}
	interface GuildAddTechDef {
		id: number
		job: number
		showLv: number
		cost: Idn_NN[]
		attr: Idn_NN[]
		skillImage: string
		node: number
		position: number[]
	}
	interface GuildAssDef {
		id: number
		assNum: number
		assRewards: Idn_NN[]
	}
	interface GuildBossDef {
		id: number
		levelPower1: LvClvSatkC_NNN[]
		icon: number
		monster1: number[]
		regularReward: Idn_NN[]
		damageReward: Idn_NN[]
		knockout: Idn_NN[]
		defeatReward: Idn_NN[]
	}
	interface GuildBossGlobalDef {
		id: number
		bossTime: number
		bossTimePur: number
		defeatMail: number
		knockoutMail: number
		rankMail: number
	}
	interface GuildDutyDef {
		id: number
		des: string
		jobNumber: number
		kickingJob: number[]
		recruit: number
		smokedSet: number
		applyList: number
		rename: number
		des_key: number
	}
	interface GuildGlobalDef {
		id: number
		cond: Idn_NN[]
		cost: Idn_NN[]
		leaveCD: number
		kickCD: number
		name: number
		notice: number
		recFree: number
		recCD: number
		rename: Idn_NN[]
		lv: number[]
		withinDays: number
		log: number
	}
	interface GuildHeadDef {
		id: number
		typ: number
		icon: string
	}
	interface GuildLogDef {
		id: number
		cond: number
		p1: number
		presetsId: number
		analysis: string[]
		des_key: number
		des: string
	}
	interface GuildLvDef {
		guildLevel: number
		mbLimit: number
		upgradeExp: number
	}
	interface GuildMatchDef {
		id: number
		matchDay: number[]
		limitTime: number
		dare: string
		settlement: string
		dareTimes: number
		guildNum: number
		starNum: number
		victoryShow: Idn_NN[]
		victory: number
		moreVictory: number
		victorySound_key: number
		victorySound: string
		loseShow: Idn_NN[]
		lose: number
		moreLose: number
		loseSound_key: number
		loseSound: string
		matchBot: number
		matchMail: number
		nullMail: number
		victoryMail: number
		loseMail: number
	}
	interface GuildMatchPointDef {
		id: number
		hard: number
		attr: Idn_NN[]
		hardPoint1: number
		wipePoint: number
		losePoint: number
		battleReward: Idn_NN[]
		wipeReward: Idn_NN[]
	}
	interface GuildMatchRewardDef {
		id: number
		rankUp: number
		rankDown: number
		rankReward: Idn_NN[]
		moreReward: Idn_NN[]
	}
	interface GuildRankRewardDef {
		id: number
		monsterId: number
		rankUp: number
		rankDown: number
		rankreward: Idn_NN[]
	}
	interface GuildTechGlobalDef {
		typ: number
		skillIcon: string[]
		careerIcon: string
		name_key: number[]
		name: string[]
		attrDisplay: Lvidn_NNN[]
		skillLabel: number[]
		counterId: number
	}
	interface GuildTechSkillDef {
		id: number
		lv: number
		job: number
		showLv: number
		attr: Idn_NN[]
		cost: Idn_NN[]
		ret: Idn_NN[]
		distance: number
		distanceCareer: number
	}
	interface GuildWishDef {
		Id: number
		itemId: Idn_NN[]
		unlockGrade: number
		assistance: number
		assisted: number
	}
	interface GuildWishGlobalDef {
		id: number
		wishNum: number
		wishReward: Idn_NN[]
		mailID: number
		show: number
		prompt_key: number[]
		prompt: string[]
	}
	interface HeroArtifactDef {
		Id: number
		heroID: number
		typ: number
		artifactGrade: number
		attribute: Idn_NN[]
		attributeSenior: Idn_NN[]
		artifactSkill: number
		des_key: number
		des: string
		weight: Idn_NN[]
		divide: Idn_NN[]
		power: number
	}
	interface HeroChangeDef {
		id: number
		camp: number
		herostar: number
		consume: Idn_NN[]
		group: number
	}
	interface HeroChangeOddsDef {
		Id: number
		group: number
		hero: number
		odds: number
	}
	interface HeroConversionDef {
		hero: number
		consume: Idn_NN[]
		formula: Idvaln_NNN[]
	}
	interface HeroGiftDef {
		id: number
		group: number
		sort: number
		achvTab: number
		P2: number
		reward: Idn_NN[]
		billGiftId: number
		name_key: number
		name: string
		groupSort: number
		position: number[]
		zoom: number
	}
	interface HeroGrowDef {
		id: number
		star: number
		lv: number
		attr: Idn_NN[]
	}
	interface HeroLineupDef {
		id: number
		typ: number
		lineup: number[]
		collect: number
		reward: Idn_NN[]
		name_key: number
		name: string
		des_key: number
		des: string
	}
	interface HeroPartsOpenDef {
		id: number
		artifactStartLimit: number
		markAbsorbStartLimit: number
		petStartLimit: number
		TotemStartLimit: number
		jewelryStartLimit: number
		chipStartLimit: number
		runeStartLimit: number
	}
	interface HeroRatingDef {
		id: number
		heroName: number
		heroRank: string
		heroRating: number[]
		imprintRecommend: number[]
		heroDes_key: number
		heroDes: string
		heroStory_key: number
		heroStory: string
		scoringItem_key: number[]
		scoringItem: string[]
		heroStrategy_key: number
		heroStrategy: string
	}
	interface HeroStarInfoDef {
		seq: number
		id: number
		star: number
		kHero: number
		grow: number
		limit: Idn_NN[]
		attr: Idn_NN[]
		energy: number
		exBuff: number[]
		exAttr: Idn_NN[]
		exBatAttr: Idn_NN[]
		exPassive: number[]
		power: number
		wakePersonalAtt: Idn_NN[]
		wakeBattleSkill: Idn_NN[]
		tianqiPersonalAtt: Idn_NN[]
		tianqiBattleSkill: Idn_NN[]
		shenlinPersonalAtt: Idn_NN[]
		shenlinBattleSkill: Idn_NN[]
		des_key: number
		des: string
		wakedes_icon: string
		wakedes_key: number
		wakedes: string
		skillLabel: number[]
		labelDes: number[]
		tianqides_key: number
		tianqides: string
		shenlindes_key: number
		shenlindes: string
	}
	interface HeroStarUpDef {
		star: number
		starCost: Idvaln_NNN[]
		convenientStarCost: Idvaln_NNN[]
		tqtCost: Idvaln_NNN[]
		starAddCost: Idn_NN[]
		convenientStarAddCost: Idn_NN[]
		desc: string
		spUnlock: Idn_NN[]
		spUp: Idn_NN[]
		maxLv: number
		stepCost: Idn_NN[]
		stepCostReset: Idn_NN[]
		sacrifice: Idn_NN[]
		starLimit: Idn_NN[]
		fallback: Idn_NN[]
	}
	interface HeroStepDef {
		seq: number
		id: number
		step: number
		attr: Idn_NN[]
		exAttr: Idn_NN[]
		exBuff: number[]
		exPassive: number[]
		exBatAttr: Idn_NN[]
		energy: number
		Buff_key: number[]
		Buff: string[]
		power: number
		wakePersonalAtt: Idn_NN[]
		TianqiPersonalAtt: Idn_NN[]
		ShenlinPersonalAtt: Idn_NN[]
	}
	interface HeroUpDef {
		lv: number
		toLv: number
		cost: Idn_NN[]
		ret: Idn_NN[]
	}
	interface HoleDef {
		id: number
		stoneCost: Idn_NN[]
		diamondCost: Idn_NN[]
		reductionTime: number
		reductionCost: Idn_NN[]
	}
	interface InitialDef {
		num: number
		initialPlayerFrame: number[]
		initialWorldLevel: number[]
	}
	interface ItemDef {
		id: number
		label: number
		typeLabel_key: number
		typeLabel: string
		type: number
		name_key: number
		name: string
		quality: number
		icon: string
		effec: number
		des_key: number
		des: string
		gridCeiling: number
		stack: number
		display: number
		sequence: number
		funcBtn: Idn_NS[]
		sourceId: number[]
		errorcode_key: string
		errorcode: string
		mapping: number
		fromDes_key: number
		fromDes: string
	}
	interface ItemAtlasDef {
		id: number
		typ: number
		itemId: number
		sort: number
		status: Idn_NN[]
	}
	interface ItemBuyDef {
		id: number
		price: Idn_NN[]
		dayBuy: number
	}
	interface ItemDecomDef {
		id: number
		reward: Idn_NN[]
	}
	interface ItemUseDef {
		id: number
		cost: number
		useLimit: number
		itemNum: number
		reward: Idn_NN[]
		guaji: Idn_NN[]
		zixuan: Idn_NN[]
		suiji: Idnw_NNN[]
	}
	interface LampDef {
		id: number
		cond: number
		box: number
		p1: number
		p2: number
		p3: number
		icon: string
		effect: string
		delay: number
		linkId: number
		type: number
		num: number
		des_key: number
		des: string
	}
	interface LangugeCoreDef {
		id: number
		cn: string
		us: string
		ru: string
		th: string
		tw: string
		ms: string
		vi: string
		jp: string
		kr: string
	}
	interface LevelRewardDef {
		id: number
		lv: number
		lvReward: Idn_NN[]
	}
	interface MailDef {
		key: number
		isNormal: number
		mailIcon: string
		mailItem: Idn_NN[]
		title_key: number
		title: string
		text_key: number
		text: string
		send_key: number
		send: string
	}
	interface MainDef {
		id: number
		index: string
		battleType: number
		limit: number
		bgImage: string
		battleImage: string
		bossImage: number
		showPower: number
		totalRewards: Idn_NN[]
		levelPower1: LvClvSatkC_NNN[]
		monster1: number[]
		showReward: number[]
		idReward: number
		productPerMin: Idnlevel_NNN[]
		productShow: Idn_NN[]
		des_key: string
		des: string
		presetCombat: number
	}
	interface MainTaskDef {
		id: number
		subTask: number[]
		stage: number
		taskNum: number
		reward: Idn_NN[]
		position_key: string
		position: string
	}
	interface MapDef {
		id: number
		number: number
		name_key: number
		name: string
		scene: string
	}
	interface MapHardDef {
		id: number
		number: number
		name_key: number
		name: string
		scene: string
	}
	interface MindCloseDef {
		Id: number
		storey: number[]
		typ: number
		firstReward: Idn_NN[]
		power: number
		boss: number
		levelPower1: LvClvSatkC_NNN[]
		monster1: number[]
		battleImage: string
	}
	interface MindPotionDef {
		itemPotion: number
		potionUse: number
		potionAttr: Idn_NN[]
		potionLife: number
		deathUse: number
		reuse: number
		des_key: number
		des: string
	}
	interface MindRewardDef {
		id: number
		condition: number
		reward: Idn_NN[]
	}
	interface MindTrainDef {
		Id: number
		heroNum: number
		fastTrack: number
		counterFree: number
		counterPay: number
	}
	interface MonsterDef {
		id: number
		heroId: number
		heroStep: number
		heroArtifact: number
		colleId: number
		HeroGroup: number
		star: number
		jobId: number
		elem: number
		locate: number[]
		role: number
		fightScale: number
		bloodType: number
		bloodCount: number
		passive: number[]
		skillNormal: number
		skillUnique: number
		propsRatio: Idn_NN[]
		treasureUnlock: Idn_NN[]
		treasureRec: number[]
		treasureAtt: number[]
		artifactTyp: number
		fastOrder: number
		name_key: number
		name: string
		title_key: number
		title: string
	}
	interface MonsterPowerDef {
		level: number
		baseProps: Idn_NN[]
	}
	interface MonthCardDef {
		lv: number
		actReward: Idn_NN[]
		dayReward: Idn_NN[]
		counter: Idn_NN[]
		mailId: number
		days: number
		name_key: number
		name: string
		des_key: number
		des: string
	}
	interface MysteryEventDef {
		Id: number
		event: number
		status: number
		target: number
		grid: number
		cnt: number
		occupy: number[]
		attribute: Idn_NN[]
		dechp: number
		shop: number
		rewards: Idnp_NNN[]
		monsterGroup: Idn_NN[]
		prefab: string
		name_key: number
		name: string
		des_key: number
		des: string
	}
	interface MysteryGlobalDef {
		Id: number
		open: number[]
		counterResu: number
		levelLimit: number
		persPricing: Idn_NN[]
		recruitResu: number
	}
	interface MysteryHouseDef {
		Id: number
		step: number
		mark: number
		mapType: number
		x: number
		y: number
		mazeEvents: Idminmaxwgrid_NNNNN[]
		status: Idn_NN[]
	}
	interface NameDef {
		nameId: number
		firstName: string
		lastName: string
		firstName_key: number
		lastName_key: number
	}
	interface NameLengthDef {
		id: number
		country: string
		length: number
	}
	interface OfficialAccountDef {
		id: number
		rewards: Idn_NN[]
	}
	interface PassiveDef {
		id: number
		des_key: number
		des: string
		god: number
		eUnit_Start: number[]
		eUnit_RndStart: number[]
		eUnit_RndEnd: number[]
		eUnit_BefAction: number[]
		eUnit_AftAction: number[]
		eUnit_TakeDmg: number[]
		eUnit_HpSub: number[]
		eUnit_HpAdd: number[]
		eUnit_Miss: number[]
		eUnit_Kill: number[]
		eUnit_Death: number[]
		eUnit_NoDeath: number[]
		eUnit_Energy: number[]
		eUnit_AnyDeath: number[]
		eUnit_BuffProb: number[]
		eUnit_AddBuff: number[]
		eSkill_Target: number[]
		eSkill_Before: number[]
		eSkill_Hit: number[]
		eSkill_igDef: number[]
		eSkill_DmgAdd: number[]
		eSkill_DmgRate: number[]
		eSkill_Gain: number[]
		eSkill_Crit: number[]
		eSkill_CritDmg: number[]
		eSkill_Dmg: number[]
		eSkill_DmgDone: number[]
		eSkill_Done: number[]
		eBuff_DmgRate: number[]
		eBuff_CalcDmg: number[]
		eBuff_Damage: number[]
		eBuff_Round: number[]
		eBuff_Attr: number[]
		eBuff_Passive: number[]
		power: number
	}
	interface PerformanceDef {
		id: number
		onHook: number
		click: number
	}
	interface PictureOrderDef {
		id: number
		heroName: number
	}
	interface PlayerHeadDef {
		id: number
		typ: number
		monster: number
		icon: string
		res: string
		robotuse: number
		attachAttrId: Idn_NN[]
		time: number
	}
	interface PlayerUpDef {
		lv: number
		exp: number
		lvReward: Idn_NN[]
	}
	interface PresetCombatDef {
		id: number
		group: number
		event: number
		actor: Posidlvhpenergy_NNNNN[]
		round: number
		useSkill: Posidxskill_NNN[]
		skillTarget: Posncritdeath_NNNN[]
		buffId: Posn_NN[]
		energy: Posn_NN[]
		leave: number[]
		talk: number[]
	}
	interface PrivilegeDef {
		id: number
		statusId: Idn_NN[]
		showReward: Idn_NN[]
		reward: Idn_NN[]
		counter: Idn_NN[]
		mailReward: Idn_NN[]
		mailId: number
		duration: number
		price: Idn_NN[]
		billGiftId: number
		name_key: number
		name: string
		des_key: number
		des: string
		time_key: number
		time: string
		banner: string
		details_key: number
		details: string
		info_key: number
		info: string
	}
	interface RaceTowerOpenDef {
		tap: number
		name_key: number
		name: string
		open: number[]
		limi: number
		sweepFree: number
		challenge: number
		unlock: number
		fastTrack: number
		sweeping: number
	}
	interface RankDef {
		id: number
		Affiliation: number
		rewardBtn: number
		divisor: number
		people: number
		typ: number
		rank: number
		openId: number
		hideTarget: number
		pic: string
		mobai: number
		worshipReward: Idn_NN[]
		des_key: number
		des: string
		name_key: number
		name: string
		reward_key: number
		reward: string
		title_key: number[]
		title: string[]
	}
	interface RankRewardDef {
		id: number
		rankId: number
		rankcond: number
		rankReward: Idn_NN[]
	}
	interface RoleDef {
		id: number
		head: string
		spine: string
		card: string
		scaleXY: Scalexy_NNN[]
		drawScaleXY: Scalexy_NNN[]
		voice: string
	}
	interface ShopDef {
		Id: number
		interface: number
		tab: number
		label: number[]
		icon: string
		refresh: number
		specialCost: number
		freeCounter: number
		payCounter: number
		shopOpen: number
		status: Idn_NN[]
		name_key: number
		name: string
		des_key: number
		des: string
	}
	interface ShopItemDef {
		Id: number
		shopType: number
		blankId: number
		item: Idn_NN[]
		odds: number
		price: Idn_NN[]
		buyCount: number
		hot: number[]
		itemOpen: Idn_NN[]
	}
	interface SignRewardDef {
		day: number
		lvReward: Idn_NN[]
	}
	interface SkillDef {
		Id: number
		name: string
		des: string
		icon: string
		skillAnim: string
		releaseJsonName: string[]
		bulletJsonName: string[]
		bulletRoute: string
		bulletFlyTime: number
		hitJsonName: string
		distance: number
		skillPos: number
		isFriendly: number
		targetType: number
		targetValue: number
		targetDeath: number
		dmgType: number
		dmgFrom: number
		dmgRate: number
		maxDmgFrom: number
		maxDmgRate: number
		deathCast: number
		eSkill_Target: number[]
		eSkill_ExTarget: number[]
		eSkill_Before: number[]
		eSkill_Hit: number[]
		eSkill_igDef: number[]
		eSkill_DmgAdd: number[]
		eSkill_DmgRate: number[]
		eSkill_Gain: number[]
		eSkill_Crit: number[]
		eSkill_CritDmg: number[]
		eSkill_Dmg: number[]
		eSkill_DmgDone: number[]
		eSkill_Done: number[]
		name_key: number
		des_key: number
		skillLabel: number[]
		labelDes: number[]
	}
	interface SkillLabelDef {
		Id: number
		typ: number
		name_key: string
		name: string
		back: string
		state: string
		des_key: number
		des: string
	}
	interface SpaceEventDef {
		id: number
		floorNum: number
		typ: number
		cost: Idn_NN[]
		showReward: Idn_NN[]
		powerReward: Idn_NN[]
		firstReward: Idn_NN[]
		hardEvent: number[]
		name_key: number
		name: string
		shopId: number
	}
	interface SpaceGridDef {
		id: number
		floorNum: number
		typ: Idn_NN[]
	}
	interface SpaceRewardDef {
		id: number
		needPower: Idn_NN[]
		reward: Idn_NN[]
	}
	interface SpaceShopDef {
		id: number
		shopTyp: number
		item: Idn_NN[]
		odds: number
		price: Idn_NN[]
		buyCount: number
		hot: number[]
	}
	interface SpaceTimeDef {
		Id: number
		floor: number
		point: Idn_NN[]
		counterFree: number
		counterPay: number
		supplyPay: number
		shop: number
		buy: Idn_NN[]
		des_key: string
		des: string
		monSpine: number
	}
	interface StandingDef {
		id: number
		camp: number[]
		star: number
	}
	interface StatusTabDef {
		id: number
		type: string
		flag: number
		desc_key: number
		desc: string
	}
	interface SuperHeroAttDef {
		id: number
		heroId: number
		att: number
		unlockPersonalAtt: Idval_NN[]
		anger: number
		des_key: number
		des: string
	}
	interface SuperHeroStarDef {
		id: number
		heroId: number
		star: number
		des: string
		des_key: number
	}
	interface TalkDef {
		id: number
		battleType: number
		battleId: number
		triggerType: number
		group: number
		card: number
		name_key: number
		name: string
		talk_key: number
		talk: string
		voice: string
		skip: number
	}
	interface TargetTaskDef {
		id: number
		typ: number
		taskTyp: number
		start: number
		next: number
		up: number
		openId: number
		lv: number
		achvTab: number
		P2: number
		show: number
		rewards: Idn_NN[]
	}
	interface TaskTipsDef {
		id: number
		openId: number
	}
	interface TempleDef {
		id: number
		consume: Idn_NN[]
		propGrowth: Idn_NN[]
		sharingLevel: number
	}
	interface TempleMedalDef {
		id: number
		propGrowth: Idn_NN[]
		medalExp: number
		probability: Idn_NN[]
		useLimit: number
	}
	interface TempleStepsDef {
		id: number
		exp: number
		propGrowth: Idn_NN[]
	}
	interface TowerDef {
		id: number
		tap: number
		firstReward: Idn_NN[]
		sweepReward: Idn_NN[]
		lvNeed: number
		power: number
		boss: number
		levelPower1: LvClvSatkC_NNN[]
		monster1: number[]
	}
	interface TowerRewardDef {
		id: number
		tap: number
		condition: number
		reward: Idn_NN[]
		pay: Idn_NN[]
		hard: number
	}
	interface TreasureDef {
		id: number
		quality: number
		grade: number
		cover: number
		screen: number
		base1: Idnlv_NNN[]
		base2: Idnlv_NNN[]
		icon: string
		coverIcon: string
		petalIcon: string
		activation: Idn_NN[]
		divide: Idn_NN[]
		aut: number
		succinctCons: Idnlock_NNN[]
		strip: Idn_NN[]
		name_key: string
		name: string
	}
	interface TreasureAttrDef {
		id: number
		attributes: number
		lv: number
		attribute: Idn_NN[]
		quality: number
		passive: number[]
	}
	interface TreasureChestDef {
		id: number
		typ: number
		reward: Idn_NN[]
		genus: number
		reset: number
		link: string
		hide: number
		hero: number
		position: number[]
		name_key: number
		name: string
		des_key: number
		des: string
	}
	interface TreasureLvDef {
		id: number
		lv: number
		quality: number
		weight: Idn_NN[]
		divide: Idn_NN[]
	}
	interface TreasureProbabilityDef {
		id: number
		attribute: string
		probability: number
		name_key: number
		name: string
	}
	interface TreasureWealthDef {
		id: number
		buyGoldBasic: number
		buyGoldLevelRatio: number
		counter: number
		vip: number
		buyGoldCost: number
	}
	interface TurntableDef {
		id: number
		cost: Idn_NN[]
		costSmok: number
		cost10: Idn_NN[]
		lucky: number
		freeRefresh: number
		paidRefresh: number
		skip: number
		reset: number
		countReward: number
	}
	interface TurntableBoxDef {
		id: number
		typ: number
		num: number
		casereward: Idn_NN[]
	}
	interface TurntableCommonDef {
		id: number
		typ: number
		lv: number
		award: number
		grid: number
		gridIcon: string
		item: number
		num: number
		odds: number
		oddsA: number
		ceiling: number
	}
	interface TurntableShowDef {
		id: number
		typ: number
		lv: number
		item: number
		show: number
	}
	interface UnlockDef {
		moduleId: number
		status: Idn_NN[]
		statusOrAnd: number
		display: number
		sort: number
		icon: string
		isHide: number
		noticeShow: number
		unlocked: number
		unOpen: number
		viewType: number
		goWin: string[]
		name_key: number
		name: string
		openDes_key: number
		openDes: string
		functionDes_key: number
		functionDes: string
	}
	interface UnlockJumpDef {
		id: number
		moduleId: number
		goWin: string[]
		switch: string
		extend: string
		extend2: string
		name_key: number
		name: string
		illustrateDes_key: number
		illustrateDes: string
	}
	interface VipDef {
		vipLevel: number
		attr: Idn_NN[]
		exp: number
		counter: Idn_NN[]
		reward: Idn_NN[]
		consume: Idn_NN[]
		price: number
		discount: number
		tabIcon: string
		tab_key: number
		tab: string
		name_key: number
		name: string
		privNew_key: number[]
		privNew: string[]
		priv_key: number[]
		priv: string[]
	}
	interface WeekendGiftDef {
		id: number
		index: number
		dayReward: Idn_NN[]
		name_key: number
		name: string
	}
	interface WorkStationDef {
		id: number
		lever: number
	}
}