/**
*自动生成的配置查找文件
*/
export class GMConf {
    private static c: any = null
    private static getConf(confName: string) {       
        let conf = szg.cfg.getCfgData(confName);
        if (conf == null) {
            console.warn('conf ' + confName + ' = nil add:' + confName + ' in configs.js')
        }
        return conf
    }
    static aceChallengeGiftConfData(id: number | string): csv.AceChallengeGiftDef {
        let confData = GMConf.getConf('aceChallengeGift')[id]
        if (confData == null) {
            console.warn('AceChallengeGiftConf ' + id + ' = nil')
        }
        return confData
    }
    static aceChallengeGiftConf(): { [key: number]: csv.AceChallengeGiftDef } {
        return GMConf.getConf('aceChallengeGift') || {}
    }
    static achievementConfData(id: number | string): csv.AchievementDef {
        let confData = GMConf.getConf('achievement')[id]
        if (confData == null) {
            console.warn('AchievementConf ' + id + ' = nil')
        }
        return confData
    }
    static achievementConf(): { [key: number]: csv.AchievementDef } {
        return GMConf.getConf('achievement') || {}
    }
    static achvTabConfData(id: number | string): csv.AchvTabDef {
        let confData = GMConf.getConf('achvTab')[id]
        if (confData == null) {
            console.warn('AchvTabConf ' + id + ' = nil')
        }
        return confData
    }
    static achvTabConf(): { [key: number]: csv.AchvTabDef } {
        return GMConf.getConf('achvTab') || {}
    }
    static actAsylumConfData(id: number | string): csv.ActAsylumDef {
        let confData = GMConf.getConf('actAsylum')[id]
        if (confData == null) {
            console.warn('ActAsylumConf ' + id + ' = nil')
        }
        return confData
    }
    static actAsylumConf(): { [key: number]: csv.ActAsylumDef } {
        return GMConf.getConf('actAsylum') || {}
    }
    static actDaiFirstChargeConfData(id: number | string): csv.ActDaiFirstChargeDef {
        let confData = GMConf.getConf('actDaiFirstCharge')[id]
        if (confData == null) {
            console.warn('ActDaiFirstChargeConf ' + id + ' = nil')
        }
        return confData
    }
    static actDaiFirstChargeConf(): { [key: number]: csv.ActDaiFirstChargeDef } {
        return GMConf.getConf('actDaiFirstCharge') || {}
    }
    static arenaConfData(id: number | string): csv.ArenaDef {
        let confData = GMConf.getConf('arena')[id]
        if (confData == null) {
            console.warn('ArenaConf ' + id + ' = nil')
        }
        return confData
    }
    static arenaConf(): { [key: number]: csv.ArenaDef } {
        return GMConf.getConf('arena') || {}
    }
    static arenaCaseConfData(id: number | string): csv.ArenaCaseDef {
        let confData = GMConf.getConf('arenaCase')[id]
        if (confData == null) {
            console.warn('ArenaCaseConf ' + id + ' = nil')
        }
        return confData
    }
    static arenaCaseConf(): { [key: number]: csv.ArenaCaseDef } {
        return GMConf.getConf('arenaCase') || {}
    }
    static arenaChamDanConfData(id: number | string): csv.ArenaChamDanDef {
        let confData = GMConf.getConf('arenaChamDan')[id]
        if (confData == null) {
            console.warn('ArenaChamDanConf ' + id + ' = nil')
        }
        return confData
    }
    static arenaChamDanConf(): { [key: number]: csv.ArenaChamDanDef } {
        return GMConf.getConf('arenaChamDan') || {}
    }
    static arenaChamGlobalConfData(id: number | string): csv.ArenaChamGlobalDef {
        let confData = GMConf.getConf('arenaChamGlobal')[id]
        if (confData == null) {
            console.warn('ArenaChamGlobalConf ' + id + ' = nil')
        }
        return confData
    }
    static arenaChamGlobalConf(): { [key: number]: csv.ArenaChamGlobalDef } {
        return GMConf.getConf('arenaChamGlobal') || {}
    }
    static arenaChamWeekConfData(id: number | string): csv.ArenaChamWeekDef {
        let confData = GMConf.getConf('arenaChamWeek')[id]
        if (confData == null) {
            console.warn('ArenaChamWeekConf ' + id + ' = nil')
        }
        return confData
    }
    static arenaChamWeekConf(): { [key: number]: csv.ArenaChamWeekDef } {
        return GMConf.getConf('arenaChamWeek') || {}
    }
    static arenaDayConfData(id: number | string): csv.ArenaDayDef {
        let confData = GMConf.getConf('arenaDay')[id]
        if (confData == null) {
            console.warn('ArenaDayConf ' + id + ' = nil')
        }
        return confData
    }
    static arenaDayConf(): { [key: number]: csv.ArenaDayDef } {
        return GMConf.getConf('arenaDay') || {}
    }
    static arenaPeakGlobalConfData(id: number | string): csv.ArenaPeakGlobalDef {
        let confData = GMConf.getConf('arenaPeakGlobal')[id]
        if (confData == null) {
            console.warn('ArenaPeakGlobalConf ' + id + ' = nil')
        }
        return confData
    }
    static arenaPeakGlobalConf(): { [key: number]: csv.ArenaPeakGlobalDef } {
        return GMConf.getConf('arenaPeakGlobal') || {}
    }
    static arenaPeakWeekConfData(id: number | string): csv.ArenaPeakWeekDef {
        let confData = GMConf.getConf('arenaPeakWeek')[id]
        if (confData == null) {
            console.warn('ArenaPeakWeekConf ' + id + ' = nil')
        }
        return confData
    }
    static arenaPeakWeekConf(): { [key: number]: csv.ArenaPeakWeekDef } {
        return GMConf.getConf('arenaPeakWeek') || {}
    }
    static arenaWeekConfData(id: number | string): csv.ArenaWeekDef {
        let confData = GMConf.getConf('arenaWeek')[id]
        if (confData == null) {
            console.warn('ArenaWeekConf ' + id + ' = nil')
        }
        return confData
    }
    static arenaWeekConf(): { [key: number]: csv.ArenaWeekDef } {
        return GMConf.getConf('arenaWeek') || {}
    }
    static artifactGlobalConfData(id: number | string): csv.ArtifactGlobalDef {
        let confData = GMConf.getConf('artifactGlobal')[id]
        if (confData == null) {
            console.warn('ArtifactGlobalConf ' + id + ' = nil')
        }
        return confData
    }
    static artifactGlobalConf(): { [key: number]: csv.ArtifactGlobalDef } {
        return GMConf.getConf('artifactGlobal') || {}
    }
    static asgardConfData(id: number | string): csv.AsgardDef {
        let confData = GMConf.getConf('asgard')[id]
        if (confData == null) {
            console.warn('AsgardConf ' + id + ' = nil')
        }
        return confData
    }
    static asgardConf(): { [key: number]: csv.AsgardDef } {
        return GMConf.getConf('asgard') || {}
    }
    static asgardGodConfData(id: number | string): csv.AsgardGodDef {
        let confData = GMConf.getConf('asgardGod')[id]
        if (confData == null) {
            console.warn('AsgardGodConf ' + id + ' = nil')
        }
        return confData
    }
    static asgardGodConf(): { [key: number]: csv.AsgardGodDef } {
        return GMConf.getConf('asgardGod') || {}
    }
    static asgardGodRankConfData(id: number | string): csv.AsgardGodRankDef {
        let confData = GMConf.getConf('asgardGodRank')[id]
        if (confData == null) {
            console.warn('AsgardGodRankConf ' + id + ' = nil')
        }
        return confData
    }
    static asgardGodRankConf(): { [key: number]: csv.AsgardGodRankDef } {
        return GMConf.getConf('asgardGodRank') || {}
    }
    static asgardRewardConfData(id: number | string): csv.AsgardRewardDef {
        let confData = GMConf.getConf('asgardReward')[id]
        if (confData == null) {
            console.warn('AsgardRewardConf ' + id + ' = nil')
        }
        return confData
    }
    static asgardRewardConf(): { [key: number]: csv.AsgardRewardDef } {
        return GMConf.getConf('asgardReward') || {}
    }
    static asgardUpConfData(id: number | string): csv.AsgardUpDef {
        let confData = GMConf.getConf('asgardUp')[id]
        if (confData == null) {
            console.warn('AsgardUpConf ' + id + ' = nil')
        }
        return confData
    }
    static asgardUpConf(): { [key: number]: csv.AsgardUpDef } {
        return GMConf.getConf('asgardUp') || {}
    }
    static attributeConfData(id: number | string): csv.AttributeDef {
        let confData = GMConf.getConf('attribute')[id]
        if (confData == null) {
            console.warn('AttributeConf ' + id + ' = nil')
        }
        return confData
    }
    static attributeConf(): { [key: number]: csv.AttributeDef } {
        return GMConf.getConf('attribute') || {}
    }
    static banquetGiftConfData(id: number | string): csv.BanquetGiftDef {
        let confData = GMConf.getConf('banquetGift')[id]
        if (confData == null) {
            console.warn('BanquetGiftConf ' + id + ' = nil')
        }
        return confData
    }
    static banquetGiftConf(): { [key: number]: csv.BanquetGiftDef } {
        return GMConf.getConf('banquetGift') || {}
    }
    static banquetGiftsConfData(id: number | string): csv.BanquetGiftsDef {
        let confData = GMConf.getConf('banquetGifts')[id]
        if (confData == null) {
            console.warn('BanquetGiftsConf ' + id + ' = nil')
        }
        return confData
    }
    static banquetGiftsConf(): { [key: number]: csv.BanquetGiftsDef } {
        return GMConf.getConf('banquetGifts') || {}
    }
    static banquetGlobalConfData(id: number | string): csv.BanquetGlobalDef {
        let confData = GMConf.getConf('banquetGlobal')[id]
        if (confData == null) {
            console.warn('BanquetGlobalConf ' + id + ' = nil')
        }
        return confData
    }
    static banquetGlobalConf(): { [key: number]: csv.BanquetGlobalDef } {
        return GMConf.getConf('banquetGlobal') || {}
    }
    static banquetHeroConfData(id: number | string): csv.BanquetHeroDef {
        let confData = GMConf.getConf('banquetHero')[id]
        if (confData == null) {
            console.warn('BanquetHeroConf ' + id + ' = nil')
        }
        return confData
    }
    static banquetHeroConf(): { [key: number]: csv.BanquetHeroDef } {
        return GMConf.getConf('banquetHero') || {}
    }
    static banquetHoldConfData(id: number | string): csv.BanquetHoldDef {
        let confData = GMConf.getConf('banquetHold')[id]
        if (confData == null) {
            console.warn('BanquetHoldConf ' + id + ' = nil')
        }
        return confData
    }
    static banquetHoldConf(): { [key: number]: csv.BanquetHoldDef } {
        return GMConf.getConf('banquetHold') || {}
    }
    static banquetRewardConfData(id: number | string): csv.BanquetRewardDef {
        let confData = GMConf.getConf('banquetReward')[id]
        if (confData == null) {
            console.warn('BanquetRewardConf ' + id + ' = nil')
        }
        return confData
    }
    static banquetRewardConf(): { [key: number]: csv.BanquetRewardDef } {
        return GMConf.getConf('banquetReward') || {}
    }
    static battleTypeConfData(id: number | string): csv.BattleTypeDef {
        let confData = GMConf.getConf('battleType')[id]
        if (confData == null) {
            console.warn('BattleTypeConf ' + id + ' = nil')
        }
        return confData
    }
    static battleTypeConf(): { [key: number]: csv.BattleTypeDef } {
        return GMConf.getConf('battleType') || {}
    }
    static beastHomeLvConfData(id: number | string): csv.BeastHomeLvDef {
        let confData = GMConf.getConf('beastHomeLv')[id]
        if (confData == null) {
            console.warn('BeastHomeLvConf ' + id + ' = nil')
        }
        return confData
    }
    static beastHomeLvConf(): { [key: number]: csv.BeastHomeLvDef } {
        return GMConf.getConf('beastHomeLv') || {}
    }
    static beastHomeStepConfData(id: number | string): csv.BeastHomeStepDef {
        let confData = GMConf.getConf('beastHomeStep')[id]
        if (confData == null) {
            console.warn('BeastHomeStepConf ' + id + ' = nil')
        }
        return confData
    }
    static beastHomeStepConf(): { [key: number]: csv.BeastHomeStepDef } {
        return GMConf.getConf('beastHomeStep') || {}
    }
    static boutiqueGlobalConfData(id: number | string): csv.BoutiqueGlobalDef {
        let confData = GMConf.getConf('boutiqueGlobal')[id]
        if (confData == null) {
            console.warn('BoutiqueGlobalConf ' + id + ' = nil')
        }
        return confData
    }
    static boutiqueGlobalConf(): { [key: number]: csv.BoutiqueGlobalDef } {
        return GMConf.getConf('boutiqueGlobal') || {}
    }
    static buffConfData(id: number | string): csv.BuffDef {
        let confData = GMConf.getConf('buff')[id]
        if (confData == null) {
            console.warn('BuffConf ' + id + ' = nil')
        }
        return confData
    }
    static buffConf(): { [key: number]: csv.BuffDef } {
        return GMConf.getConf('buff') || {}
    }
    static collectionConfData(id: number | string): csv.CollectionDef {
        let confData = GMConf.getConf('collection')[id]
        if (confData == null) {
            console.warn('CollectionConf ' + id + ' = nil')
        }
        return confData
    }
    static collectionConf(): { [key: number]: csv.CollectionDef } {
        return GMConf.getConf('collection') || {}
    }
    static companyBlameConfData(id: number | string): csv.CompanyBlameDef {
        let confData = GMConf.getConf('companyBlame')[id]
        if (confData == null) {
            console.warn('CompanyBlameConf ' + id + ' = nil')
        }
        return confData
    }
    static companyBlameConf(): { [key: number]: csv.CompanyBlameDef } {
        return GMConf.getConf('companyBlame') || {}
    }
    static companyGiftConfData(id: number | string): csv.CompanyGiftDef {
        let confData = GMConf.getConf('companyGift')[id]
        if (confData == null) {
            console.warn('CompanyGiftConf ' + id + ' = nil')
        }
        return confData
    }
    static companyGiftConf(): { [key: number]: csv.CompanyGiftDef } {
        return GMConf.getConf('companyGift') || {}
    }
    static companyLvevlConfData(id: number | string): csv.CompanyLvevlDef {
        let confData = GMConf.getConf('companyLvevl')[id]
        if (confData == null) {
            console.warn('CompanyLvevlConf ' + id + ' = nil')
        }
        return confData
    }
    static companyLvevlConf(): { [key: number]: csv.CompanyLvevlDef } {
        return GMConf.getConf('companyLvevl') || {}
    }
    static companySnsEventConfData(id: number | string): csv.CompanySnsEventDef {
        let confData = GMConf.getConf('companySnsEvent')[id]
        if (confData == null) {
            console.warn('CompanySnsEventConf ' + id + ' = nil')
        }
        return confData
    }
    static companySnsEventConf(): { [key: number]: csv.CompanySnsEventDef } {
        return GMConf.getConf('companySnsEvent') || {}
    }
    static companySnsGlobalConfData(id: number | string): csv.CompanySnsGlobalDef {
        let confData = GMConf.getConf('companySnsGlobal')[id]
        if (confData == null) {
            console.warn('CompanySnsGlobalConf ' + id + ' = nil')
        }
        return confData
    }
    static companySnsGlobalConf(): { [key: number]: csv.CompanySnsGlobalDef } {
        return GMConf.getConf('companySnsGlobal') || {}
    }
    static companySnsLogConfData(id: number | string): csv.CompanySnsLogDef {
        let confData = GMConf.getConf('companySnsLog')[id]
        if (confData == null) {
            console.warn('CompanySnsLogConf ' + id + ' = nil')
        }
        return confData
    }
    static companySnsLogConf(): { [key: number]: csv.CompanySnsLogDef } {
        return GMConf.getConf('companySnsLog') || {}
    }
    static companyTalkConfData(id: number | string): csv.CompanyTalkDef {
        let confData = GMConf.getConf('companyTalk')[id]
        if (confData == null) {
            console.warn('CompanyTalkConf ' + id + ' = nil')
        }
        return confData
    }
    static companyTalkConf(): { [key: number]: csv.CompanyTalkDef } {
        return GMConf.getConf('companyTalk') || {}
    }
    static counterConfData(id: number | string): csv.CounterDef {
        let confData = GMConf.getConf('counter')[id]
        if (confData == null) {
            console.warn('CounterConf ' + id + ' = nil')
        }
        return confData
    }
    static counterConf(): { [key: number]: csv.CounterDef } {
        return GMConf.getConf('counter') || {}
    }
    static cycleGiftConfData(id: number | string): csv.CycleGiftDef {
        let confData = GMConf.getConf('cycleGift')[id]
        if (confData == null) {
            console.warn('CycleGiftConf ' + id + ' = nil')
        }
        return confData
    }
    static cycleGiftConf(): { [key: number]: csv.CycleGiftDef } {
        return GMConf.getConf('cycleGift') || {}
    }
    static dailyConfData(id: number | string): csv.DailyDef {
        let confData = GMConf.getConf('daily')[id]
        if (confData == null) {
            console.warn('DailyConf ' + id + ' = nil')
        }
        return confData
    }
    static dailyConf(): { [key: number]: csv.DailyDef } {
        return GMConf.getConf('daily') || {}
    }
    static dailyTypeConfData(id: number | string): csv.DailyTypeDef {
        let confData = GMConf.getConf('dailyType')[id]
        if (confData == null) {
            console.warn('DailyTypeConf ' + id + ' = nil')
        }
        return confData
    }
    static dailyTypeConf(): { [key: number]: csv.DailyTypeDef } {
        return GMConf.getConf('dailyType') || {}
    }
    static divineBeastConfData(id: number | string): csv.DivineBeastDef {
        let confData = GMConf.getConf('divineBeast')[id]
        if (confData == null) {
            console.warn('DivineBeastConf ' + id + ' = nil')
        }
        return confData
    }
    static divineBeastConf(): { [key: number]: csv.DivineBeastDef } {
        return GMConf.getConf('divineBeast') || {}
    }
    static divineBeastCaseConfData(id: number | string): csv.DivineBeastCaseDef {
        let confData = GMConf.getConf('divineBeastCase')[id]
        if (confData == null) {
            console.warn('DivineBeastCaseConf ' + id + ' = nil')
        }
        return confData
    }
    static divineBeastCaseConf(): { [key: number]: csv.DivineBeastCaseDef } {
        return GMConf.getConf('divineBeastCase') || {}
    }
    static divineBeastStarConfData(id: number | string): csv.DivineBeastStarDef {
        let confData = GMConf.getConf('divineBeastStar')[id]
        if (confData == null) {
            console.warn('DivineBeastStarConf ' + id + ' = nil')
        }
        return confData
    }
    static divineBeastStarConf(): { [key: number]: csv.DivineBeastStarDef } {
        return GMConf.getConf('divineBeastStar') || {}
    }
    static divineBeastTramConfData(id: number | string): csv.DivineBeastTramDef {
        let confData = GMConf.getConf('divineBeastTram')[id]
        if (confData == null) {
            console.warn('DivineBeastTramConf ' + id + ' = nil')
        }
        return confData
    }
    static divineBeastTramConf(): { [key: number]: csv.DivineBeastTramDef } {
        return GMConf.getConf('divineBeastTram') || {}
    }
    static divineMissionsConfData(id: number | string): csv.DivineMissionsDef {
        let confData = GMConf.getConf('divineMissions')[id]
        if (confData == null) {
            console.warn('DivineMissionsConf ' + id + ' = nil')
        }
        return confData
    }
    static divineMissionsConf(): { [key: number]: csv.DivineMissionsDef } {
        return GMConf.getConf('divineMissions') || {}
    }
    static divinebeastRoundConfData(id: number | string): csv.DivinebeastRoundDef {
        let confData = GMConf.getConf('divinebeastRound')[id]
        if (confData == null) {
            console.warn('DivinebeastRoundConf ' + id + ' = nil')
        }
        return confData
    }
    static divinebeastRoundConf(): { [key: number]: csv.DivinebeastRoundDef } {
        return GMConf.getConf('divinebeastRound') || {}
    }
    static drawConfData(id: number | string): csv.DrawDef {
        let confData = GMConf.getConf('draw')[id]
        if (confData == null) {
            console.warn('DrawConf ' + id + ' = nil')
        }
        return confData
    }
    static drawConf(): { [key: number]: csv.DrawDef } {
        return GMConf.getConf('draw') || {}
    }
    static drawOddsConfData(id: number | string): csv.DrawOddsDef {
        let confData = GMConf.getConf('drawOdds')[id]
        if (confData == null) {
            console.warn('DrawOddsConf ' + id + ' = nil')
        }
        return confData
    }
    static drawOddsConf(): { [key: number]: csv.DrawOddsDef } {
        return GMConf.getConf('drawOdds') || {}
    }
    static drawShowConfData(id: number | string): csv.DrawShowDef {
        let confData = GMConf.getConf('drawShow')[id]
        if (confData == null) {
            console.warn('DrawShowConf ' + id + ' = nil')
        }
        return confData
    }
    static drawShowConf(): { [key: number]: csv.DrawShowDef } {
        return GMConf.getConf('drawShow') || {}
    }
    static eliminateGlobalConfData(id: number | string): csv.EliminateGlobalDef {
        let confData = GMConf.getConf('eliminateGlobal')[id]
        if (confData == null) {
            console.warn('EliminateGlobalConf ' + id + ' = nil')
        }
        return confData
    }
    static eliminateGlobalConf(): { [key: number]: csv.EliminateGlobalDef } {
        return GMConf.getConf('eliminateGlobal') || {}
    }
    static eliminateLevelConfData(id: number | string): csv.EliminateLevelDef {
        let confData = GMConf.getConf('eliminateLevel')[id]
        if (confData == null) {
            console.warn('EliminateLevelConf ' + id + ' = nil')
        }
        return confData
    }
    static eliminateLevelConf(): { [key: number]: csv.EliminateLevelDef } {
        return GMConf.getConf('eliminateLevel') || {}
    }
    static eliminateRewardConfData(id: number | string): csv.EliminateRewardDef {
        let confData = GMConf.getConf('eliminateReward')[id]
        if (confData == null) {
            console.warn('EliminateRewardConf ' + id + ' = nil')
        }
        return confData
    }
    static eliminateRewardConf(): { [key: number]: csv.EliminateRewardDef } {
        return GMConf.getConf('eliminateReward') || {}
    }
    static eliminateSourceConfData(id: number | string): csv.EliminateSourceDef {
        let confData = GMConf.getConf('eliminateSource')[id]
        if (confData == null) {
            console.warn('EliminateSourceConf ' + id + ' = nil')
        }
        return confData
    }
    static eliminateSourceConf(): { [key: number]: csv.EliminateSourceDef } {
        return GMConf.getConf('eliminateSource') || {}
    }
    static eliteConfData(id: number | string): csv.EliteDef {
        let confData = GMConf.getConf('elite')[id]
        if (confData == null) {
            console.warn('EliteConf ' + id + ' = nil')
        }
        return confData
    }
    static eliteConf(): { [key: number]: csv.EliteDef } {
        return GMConf.getConf('elite') || {}
    }
    static energyOutputConfData(id: number | string): csv.EnergyOutputDef {
        let confData = GMConf.getConf('energyOutput')[id]
        if (confData == null) {
            console.warn('EnergyOutputConf ' + id + ' = nil')
        }
        return confData
    }
    static energyOutputConf(): { [key: number]: csv.EnergyOutputDef } {
        return GMConf.getConf('energyOutput') || {}
    }
    static equipAttrConfData(id: number | string): csv.EquipAttrDef {
        let confData = GMConf.getConf('equipAttr')[id]
        if (confData == null) {
            console.warn('EquipAttrConf ' + id + ' = nil')
        }
        return confData
    }
    static equipAttrConf(): { [key: number]: csv.EquipAttrDef } {
        return GMConf.getConf('equipAttr') || {}
    }
    static equipCloseConfData(id: number | string): csv.EquipCloseDef {
        let confData = GMConf.getConf('equipClose')[id]
        if (confData == null) {
            console.warn('EquipCloseConf ' + id + ' = nil')
        }
        return confData
    }
    static equipCloseConf(): { [key: number]: csv.EquipCloseDef } {
        return GMConf.getConf('equipClose') || {}
    }
    static equipCoreConfData(id: number | string): csv.EquipCoreDef {
        let confData = GMConf.getConf('equipCore')[id]
        if (confData == null) {
            console.warn('EquipCoreConf ' + id + ' = nil')
        }
        return confData
    }
    static equipCoreConf(): { [key: number]: csv.EquipCoreDef } {
        return GMConf.getConf('equipCore') || {}
    }
    static errorCodeConfData(id: number | string): csv.ErrorCodeDef {
        let confData = GMConf.getConf('errorCode')[id]
        if (confData == null) {
            console.warn('ErrorCodeConf ' + id + ' = nil')
        }
        return confData
    }
    static errorCodeConf(): { [key: number]: csv.ErrorCodeDef } {
        return GMConf.getConf('errorCode') || {}
    }
    static eventConfData(id: number | string): csv.EventDef {
        let confData = GMConf.getConf('event')[id]
        if (confData == null) {
            console.warn('EventConf ' + id + ' = nil')
        }
        return confData
    }
    static eventConf(): { [key: number]: csv.EventDef } {
        return GMConf.getConf('event') || {}
    }
    static eventGroupConfData(id: number | string): csv.EventGroupDef {
        let confData = GMConf.getConf('eventGroup')[id]
        if (confData == null) {
            console.warn('EventGroupConf ' + id + ' = nil')
        }
        return confData
    }
    static eventGroupConf(): { [key: number]: csv.EventGroupDef } {
        return GMConf.getConf('eventGroup') || {}
    }
    static exploreGlobalConfData(id: number | string): csv.ExploreGlobalDef {
        let confData = GMConf.getConf('exploreGlobal')[id]
        if (confData == null) {
            console.warn('ExploreGlobalConf ' + id + ' = nil')
        }
        return confData
    }
    static exploreGlobalConf(): { [key: number]: csv.ExploreGlobalDef } {
        return GMConf.getConf('exploreGlobal') || {}
    }
    static exploreGradeConfData(id: number | string): csv.ExploreGradeDef {
        let confData = GMConf.getConf('exploreGrade')[id]
        if (confData == null) {
            console.warn('ExploreGradeConf ' + id + ' = nil')
        }
        return confData
    }
    static exploreGradeConf(): { [key: number]: csv.ExploreGradeDef } {
        return GMConf.getConf('exploreGrade') || {}
    }
    static exploreTaskConfData(id: number | string): csv.ExploreTaskDef {
        let confData = GMConf.getConf('exploreTask')[id]
        if (confData == null) {
            console.warn('ExploreTaskConf ' + id + ' = nil')
        }
        return confData
    }
    static exploreTaskConf(): { [key: number]: csv.ExploreTaskDef } {
        return GMConf.getConf('exploreTask') || {}
    }
    static friendConfData(id: number | string): csv.FriendDef {
        let confData = GMConf.getConf('friend')[id]
        if (confData == null) {
            console.warn('FriendConf ' + id + ' = nil')
        }
        return confData
    }
    static friendConf(): { [key: number]: csv.FriendDef } {
        return GMConf.getConf('friend') || {}
    }
    static friendPresetsConfData(id: number | string): csv.FriendPresetsDef {
        let confData = GMConf.getConf('friendPresets')[id]
        if (confData == null) {
            console.warn('FriendPresetsConf ' + id + ' = nil')
        }
        return confData
    }
    static friendPresetsConf(): { [key: number]: csv.FriendPresetsDef } {
        return GMConf.getConf('friendPresets') || {}
    }
    static frontCampConfData(id: number | string): csv.FrontCampDef {
        let confData = GMConf.getConf('frontCamp')[id]
        if (confData == null) {
            console.warn('FrontCampConf ' + id + ' = nil')
        }
        return confData
    }
    static frontCampConf(): { [key: number]: csv.FrontCampDef } {
        return GMConf.getConf('frontCamp') || {}
    }
    static functionTimeConfData(id: number | string): csv.FunctionTimeDef {
        let confData = GMConf.getConf('functionTime')[id]
        if (confData == null) {
            console.warn('FunctionTimeConf ' + id + ' = nil')
        }
        return confData
    }
    static functionTimeConf(): { [key: number]: csv.FunctionTimeDef } {
        return GMConf.getConf('functionTime') || {}
    }
    static fundRewardConfData(id: number | string): csv.FundRewardDef {
        let confData = GMConf.getConf('fundReward')[id]
        if (confData == null) {
            console.warn('FundRewardConf ' + id + ' = nil')
        }
        return confData
    }
    static fundRewardConf(): { [key: number]: csv.FundRewardDef } {
        return GMConf.getConf('fundReward') || {}
    }
    static fundWelfareConfData(id: number | string): csv.FundWelfareDef {
        let confData = GMConf.getConf('fundWelfare')[id]
        if (confData == null) {
            console.warn('FundWelfareConf ' + id + ' = nil')
        }
        return confData
    }
    static fundWelfareConf(): { [key: number]: csv.FundWelfareDef } {
        return GMConf.getConf('fundWelfare') || {}
    }
    static globalBattleConfData(id: number | string): csv.GlobalBattleDef {
        let confData = GMConf.getConf('globalBattle')[id]
        if (confData == null) {
            console.warn('GlobalBattleConf ' + id + ' = nil')
        }
        return confData
    }
    static globalBattleConf(): { [key: number]: csv.GlobalBattleDef } {
        return GMConf.getConf('globalBattle') || {}
    }
    static globalPublicConfData(id: number | string): csv.GlobalPublicDef {
        let confData = GMConf.getConf('globalPublic')[id]
        if (confData == null) {
            console.warn('GlobalPublicConf ' + id + ' = nil')
        }
        return confData
    }
    static globalPublicConf(): { [key: number]: csv.GlobalPublicDef } {
        return GMConf.getConf('globalPublic') || {}
    }
    static godGiftConfData(id: number | string): csv.GodGiftDef {
        let confData = GMConf.getConf('godGift')[id]
        if (confData == null) {
            console.warn('GodGiftConf ' + id + ' = nil')
        }
        return confData
    }
    static godGiftConf(): { [key: number]: csv.GodGiftDef } {
        return GMConf.getConf('godGift') || {}
    }
    static guideConfData(id: number | string): csv.GuideDef {
        let confData = GMConf.getConf('guide')[id]
        if (confData == null) {
            console.warn('GuideConf ' + id + ' = nil')
        }
        return confData
    }
    static guideConf(): { [key: number]: csv.GuideDef } {
        return GMConf.getConf('guide') || {}
    }
    static guideTalkConfData(id: number | string): csv.GuideTalkDef {
        let confData = GMConf.getConf('guideTalk')[id]
        if (confData == null) {
            console.warn('GuideTalkConf ' + id + ' = nil')
        }
        return confData
    }
    static guideTalkConf(): { [key: number]: csv.GuideTalkDef } {
        return GMConf.getConf('guideTalk') || {}
    }
    static guildAddTechConfData(id: number | string): csv.GuildAddTechDef {
        let confData = GMConf.getConf('guildAddTech')[id]
        if (confData == null) {
            console.warn('GuildAddTechConf ' + id + ' = nil')
        }
        return confData
    }
    static guildAddTechConf(): { [key: number]: csv.GuildAddTechDef } {
        return GMConf.getConf('guildAddTech') || {}
    }
    static guildAssConfData(id: number | string): csv.GuildAssDef {
        let confData = GMConf.getConf('guildAss')[id]
        if (confData == null) {
            console.warn('GuildAssConf ' + id + ' = nil')
        }
        return confData
    }
    static guildAssConf(): { [key: number]: csv.GuildAssDef } {
        return GMConf.getConf('guildAss') || {}
    }
    static guildBossConfData(id: number | string): csv.GuildBossDef {
        let confData = GMConf.getConf('guildBoss')[id]
        if (confData == null) {
            console.warn('GuildBossConf ' + id + ' = nil')
        }
        return confData
    }
    static guildBossConf(): { [key: number]: csv.GuildBossDef } {
        return GMConf.getConf('guildBoss') || {}
    }
    static guildBossGlobalConfData(id: number | string): csv.GuildBossGlobalDef {
        let confData = GMConf.getConf('guildBossGlobal')[id]
        if (confData == null) {
            console.warn('GuildBossGlobalConf ' + id + ' = nil')
        }
        return confData
    }
    static guildBossGlobalConf(): { [key: number]: csv.GuildBossGlobalDef } {
        return GMConf.getConf('guildBossGlobal') || {}
    }
    static guildDutyConfData(id: number | string): csv.GuildDutyDef {
        let confData = GMConf.getConf('guildDuty')[id]
        if (confData == null) {
            console.warn('GuildDutyConf ' + id + ' = nil')
        }
        return confData
    }
    static guildDutyConf(): { [key: number]: csv.GuildDutyDef } {
        return GMConf.getConf('guildDuty') || {}
    }
    static guildGlobalConfData(id: number | string): csv.GuildGlobalDef {
        let confData = GMConf.getConf('guildGlobal')[id]
        if (confData == null) {
            console.warn('GuildGlobalConf ' + id + ' = nil')
        }
        return confData
    }
    static guildGlobalConf(): { [key: number]: csv.GuildGlobalDef } {
        return GMConf.getConf('guildGlobal') || {}
    }
    static guildHeadConfData(id: number | string): csv.GuildHeadDef {
        let confData = GMConf.getConf('guildHead')[id]
        if (confData == null) {
            console.warn('GuildHeadConf ' + id + ' = nil')
        }
        return confData
    }
    static guildHeadConf(): { [key: number]: csv.GuildHeadDef } {
        return GMConf.getConf('guildHead') || {}
    }
    static guildLogConfData(id: number | string): csv.GuildLogDef {
        let confData = GMConf.getConf('guildLog')[id]
        if (confData == null) {
            console.warn('GuildLogConf ' + id + ' = nil')
        }
        return confData
    }
    static guildLogConf(): { [key: number]: csv.GuildLogDef } {
        return GMConf.getConf('guildLog') || {}
    }
    static guildLvConfData(id: number | string): csv.GuildLvDef {
        let confData = GMConf.getConf('guildLv')[id]
        if (confData == null) {
            console.warn('GuildLvConf ' + id + ' = nil')
        }
        return confData
    }
    static guildLvConf(): { [key: number]: csv.GuildLvDef } {
        return GMConf.getConf('guildLv') || {}
    }
    static guildMatchConfData(id: number | string): csv.GuildMatchDef {
        let confData = GMConf.getConf('guildMatch')[id]
        if (confData == null) {
            console.warn('GuildMatchConf ' + id + ' = nil')
        }
        return confData
    }
    static guildMatchConf(): { [key: number]: csv.GuildMatchDef } {
        return GMConf.getConf('guildMatch') || {}
    }
    static guildMatchPointConfData(id: number | string): csv.GuildMatchPointDef {
        let confData = GMConf.getConf('guildMatchPoint')[id]
        if (confData == null) {
            console.warn('GuildMatchPointConf ' + id + ' = nil')
        }
        return confData
    }
    static guildMatchPointConf(): { [key: number]: csv.GuildMatchPointDef } {
        return GMConf.getConf('guildMatchPoint') || {}
    }
    static guildMatchRewardConfData(id: number | string): csv.GuildMatchRewardDef {
        let confData = GMConf.getConf('guildMatchReward')[id]
        if (confData == null) {
            console.warn('GuildMatchRewardConf ' + id + ' = nil')
        }
        return confData
    }
    static guildMatchRewardConf(): { [key: number]: csv.GuildMatchRewardDef } {
        return GMConf.getConf('guildMatchReward') || {}
    }
    static guildRankRewardConfData(id: number | string): csv.GuildRankRewardDef {
        let confData = GMConf.getConf('guildRankReward')[id]
        if (confData == null) {
            console.warn('GuildRankRewardConf ' + id + ' = nil')
        }
        return confData
    }
    static guildRankRewardConf(): { [key: number]: csv.GuildRankRewardDef } {
        return GMConf.getConf('guildRankReward') || {}
    }
    static guildTechGlobalConfData(id: number | string): csv.GuildTechGlobalDef {
        let confData = GMConf.getConf('guildTechGlobal')[id]
        if (confData == null) {
            console.warn('GuildTechGlobalConf ' + id + ' = nil')
        }
        return confData
    }
    static guildTechGlobalConf(): { [key: number]: csv.GuildTechGlobalDef } {
        return GMConf.getConf('guildTechGlobal') || {}
    }
    static guildTechSkillConfData(id: number | string): csv.GuildTechSkillDef {
        let confData = GMConf.getConf('guildTechSkill')[id]
        if (confData == null) {
            console.warn('GuildTechSkillConf ' + id + ' = nil')
        }
        return confData
    }
    static guildTechSkillConf(): { [key: number]: csv.GuildTechSkillDef } {
        return GMConf.getConf('guildTechSkill') || {}
    }
    static guildWishConfData(id: number | string): csv.GuildWishDef {
        let confData = GMConf.getConf('guildWish')[id]
        if (confData == null) {
            console.warn('GuildWishConf ' + id + ' = nil')
        }
        return confData
    }
    static guildWishConf(): { [key: number]: csv.GuildWishDef } {
        return GMConf.getConf('guildWish') || {}
    }
    static guildWishGlobalConfData(id: number | string): csv.GuildWishGlobalDef {
        let confData = GMConf.getConf('guildWishGlobal')[id]
        if (confData == null) {
            console.warn('GuildWishGlobalConf ' + id + ' = nil')
        }
        return confData
    }
    static guildWishGlobalConf(): { [key: number]: csv.GuildWishGlobalDef } {
        return GMConf.getConf('guildWishGlobal') || {}
    }
    static heroArtifactConfData(id: number | string): csv.HeroArtifactDef {
        let confData = GMConf.getConf('heroArtifact')[id]
        if (confData == null) {
            console.warn('HeroArtifactConf ' + id + ' = nil')
        }
        return confData
    }
    static heroArtifactConf(): { [key: number]: csv.HeroArtifactDef } {
        return GMConf.getConf('heroArtifact') || {}
    }
    static heroChangeConfData(id: number | string): csv.HeroChangeDef {
        let confData = GMConf.getConf('heroChange')[id]
        if (confData == null) {
            console.warn('HeroChangeConf ' + id + ' = nil')
        }
        return confData
    }
    static heroChangeConf(): { [key: number]: csv.HeroChangeDef } {
        return GMConf.getConf('heroChange') || {}
    }
    static heroChangeOddsConfData(id: number | string): csv.HeroChangeOddsDef {
        let confData = GMConf.getConf('heroChangeOdds')[id]
        if (confData == null) {
            console.warn('HeroChangeOddsConf ' + id + ' = nil')
        }
        return confData
    }
    static heroChangeOddsConf(): { [key: number]: csv.HeroChangeOddsDef } {
        return GMConf.getConf('heroChangeOdds') || {}
    }
    static heroConversionConfData(id: number | string): csv.HeroConversionDef {
        let confData = GMConf.getConf('heroConversion')[id]
        if (confData == null) {
            console.warn('HeroConversionConf ' + id + ' = nil')
        }
        return confData
    }
    static heroConversionConf(): { [key: number]: csv.HeroConversionDef } {
        return GMConf.getConf('heroConversion') || {}
    }
    static heroGiftConfData(id: number | string): csv.HeroGiftDef {
        let confData = GMConf.getConf('heroGift')[id]
        if (confData == null) {
            console.warn('HeroGiftConf ' + id + ' = nil')
        }
        return confData
    }
    static heroGiftConf(): { [key: number]: csv.HeroGiftDef } {
        return GMConf.getConf('heroGift') || {}
    }
    static heroGrowConfData(id: number | string): csv.HeroGrowDef {
        let confData = GMConf.getConf('heroGrow')[id]
        if (confData == null) {
            console.warn('HeroGrowConf ' + id + ' = nil')
        }
        return confData
    }
    static heroGrowConf(): { [key: number]: csv.HeroGrowDef } {
        return GMConf.getConf('heroGrow') || {}
    }
    static heroLineupConfData(id: number | string): csv.HeroLineupDef {
        let confData = GMConf.getConf('heroLineup')[id]
        if (confData == null) {
            console.warn('HeroLineupConf ' + id + ' = nil')
        }
        return confData
    }
    static heroLineupConf(): { [key: number]: csv.HeroLineupDef } {
        return GMConf.getConf('heroLineup') || {}
    }
    static heroPartsOpenConfData(id: number | string): csv.HeroPartsOpenDef {
        let confData = GMConf.getConf('heroPartsOpen')[id]
        if (confData == null) {
            console.warn('HeroPartsOpenConf ' + id + ' = nil')
        }
        return confData
    }
    static heroPartsOpenConf(): { [key: number]: csv.HeroPartsOpenDef } {
        return GMConf.getConf('heroPartsOpen') || {}
    }
    static heroRatingConfData(id: number | string): csv.HeroRatingDef {
        let confData = GMConf.getConf('heroRating')[id]
        if (confData == null) {
            console.warn('HeroRatingConf ' + id + ' = nil')
        }
        return confData
    }
    static heroRatingConf(): { [key: number]: csv.HeroRatingDef } {
        return GMConf.getConf('heroRating') || {}
    }
    static heroStarInfoConfData(id: number | string): csv.HeroStarInfoDef {
        let confData = GMConf.getConf('heroStarInfo')[id]
        if (confData == null) {
            console.warn('HeroStarInfoConf ' + id + ' = nil')
        }
        return confData
    }
    static heroStarInfoConf(): { [key: number]: csv.HeroStarInfoDef } {
        return GMConf.getConf('heroStarInfo') || {}
    }
    static heroStarUpConfData(id: number | string): csv.HeroStarUpDef {
        let confData = GMConf.getConf('heroStarUp')[id]
        if (confData == null) {
            console.warn('HeroStarUpConf ' + id + ' = nil')
        }
        return confData
    }
    static heroStarUpConf(): { [key: number]: csv.HeroStarUpDef } {
        return GMConf.getConf('heroStarUp') || {}
    }
    static heroStepConfData(id: number | string): csv.HeroStepDef {
        let confData = GMConf.getConf('heroStep')[id]
        if (confData == null) {
            console.warn('HeroStepConf ' + id + ' = nil')
        }
        return confData
    }
    static heroStepConf(): { [key: number]: csv.HeroStepDef } {
        return GMConf.getConf('heroStep') || {}
    }
    static heroUpConfData(id: number | string): csv.HeroUpDef {
        let confData = GMConf.getConf('heroUp')[id]
        if (confData == null) {
            console.warn('HeroUpConf ' + id + ' = nil')
        }
        return confData
    }
    static heroUpConf(): { [key: number]: csv.HeroUpDef } {
        return GMConf.getConf('heroUp') || {}
    }
    static holeConfData(id: number | string): csv.HoleDef {
        let confData = GMConf.getConf('hole')[id]
        if (confData == null) {
            console.warn('HoleConf ' + id + ' = nil')
        }
        return confData
    }
    static holeConf(): { [key: number]: csv.HoleDef } {
        return GMConf.getConf('hole') || {}
    }
    static initialConfData(id: number | string): csv.InitialDef {
        let confData = GMConf.getConf('initial')[id]
        if (confData == null) {
            console.warn('InitialConf ' + id + ' = nil')
        }
        return confData
    }
    static initialConf(): { [key: number]: csv.InitialDef } {
        return GMConf.getConf('initial') || {}
    }
    static itemConfData(id: number | string): csv.ItemDef {
        let confData = GMConf.getConf('item')[id]
        if (confData == null) {
            console.warn('ItemConf ' + id + ' = nil')
        }
        return confData
    }
    static itemConf(): { [key: number]: csv.ItemDef } {
        return GMConf.getConf('item') || {}
    }
    static itemAtlasConfData(id: number | string): csv.ItemAtlasDef {
        let confData = GMConf.getConf('itemAtlas')[id]
        if (confData == null) {
            console.warn('ItemAtlasConf ' + id + ' = nil')
        }
        return confData
    }
    static itemAtlasConf(): { [key: number]: csv.ItemAtlasDef } {
        return GMConf.getConf('itemAtlas') || {}
    }
    static itemBuyConfData(id: number | string): csv.ItemBuyDef {
        let confData = GMConf.getConf('itemBuy')[id]
        if (confData == null) {
            console.warn('ItemBuyConf ' + id + ' = nil')
        }
        return confData
    }
    static itemBuyConf(): { [key: number]: csv.ItemBuyDef } {
        return GMConf.getConf('itemBuy') || {}
    }
    static itemDecomConfData(id: number | string): csv.ItemDecomDef {
        let confData = GMConf.getConf('itemDecom')[id]
        if (confData == null) {
            console.warn('ItemDecomConf ' + id + ' = nil')
        }
        return confData
    }
    static itemDecomConf(): { [key: number]: csv.ItemDecomDef } {
        return GMConf.getConf('itemDecom') || {}
    }
    static itemUseConfData(id: number | string): csv.ItemUseDef {
        let confData = GMConf.getConf('itemUse')[id]
        if (confData == null) {
            console.warn('ItemUseConf ' + id + ' = nil')
        }
        return confData
    }
    static itemUseConf(): { [key: number]: csv.ItemUseDef } {
        return GMConf.getConf('itemUse') || {}
    }
    static lampConfData(id: number | string): csv.LampDef {
        let confData = GMConf.getConf('lamp')[id]
        if (confData == null) {
            console.warn('LampConf ' + id + ' = nil')
        }
        return confData
    }
    static lampConf(): { [key: number]: csv.LampDef } {
        return GMConf.getConf('lamp') || {}
    }
    static langugeCoreConfData(id: number | string): csv.LangugeCoreDef {
        let confData = GMConf.getConf('langugeCore')[id]
        if (confData == null) {
            console.warn('LangugeCoreConf ' + id + ' = nil')
        }
        return confData
    }
    static langugeCoreConf(): { [key: number]: csv.LangugeCoreDef } {
        return GMConf.getConf('langugeCore') || {}
    }
    static levelRewardConfData(id: number | string): csv.LevelRewardDef {
        let confData = GMConf.getConf('levelReward')[id]
        if (confData == null) {
            console.warn('LevelRewardConf ' + id + ' = nil')
        }
        return confData
    }
    static levelRewardConf(): { [key: number]: csv.LevelRewardDef } {
        return GMConf.getConf('levelReward') || {}
    }
    static mailConfData(id: number | string): csv.MailDef {
        let confData = GMConf.getConf('mail')[id]
        if (confData == null) {
            console.warn('MailConf ' + id + ' = nil')
        }
        return confData
    }
    static mailConf(): { [key: number]: csv.MailDef } {
        return GMConf.getConf('mail') || {}
    }
    static mainConfData(id: number | string): csv.MainDef {
        let confData = GMConf.getConf('main')[id]
        if (confData == null) {
            console.warn('MainConf ' + id + ' = nil')
        }
        return confData
    }
    static mainConf(): { [key: number]: csv.MainDef } {
        return GMConf.getConf('main') || {}
    }
    static mainTaskConfData(id: number | string): csv.MainTaskDef {
        let confData = GMConf.getConf('mainTask')[id]
        if (confData == null) {
            console.warn('MainTaskConf ' + id + ' = nil')
        }
        return confData
    }
    static mainTaskConf(): { [key: number]: csv.MainTaskDef } {
        return GMConf.getConf('mainTask') || {}
    }
    static mapConfData(id: number | string): csv.MapDef {
        let confData = GMConf.getConf('map')[id]
        if (confData == null) {
            console.warn('MapConf ' + id + ' = nil')
        }
        return confData
    }
    static mapConf(): { [key: number]: csv.MapDef } {
        return GMConf.getConf('map') || {}
    }
    static mapHardConfData(id: number | string): csv.MapHardDef {
        let confData = GMConf.getConf('mapHard')[id]
        if (confData == null) {
            console.warn('MapHardConf ' + id + ' = nil')
        }
        return confData
    }
    static mapHardConf(): { [key: number]: csv.MapHardDef } {
        return GMConf.getConf('mapHard') || {}
    }
    static mindCloseConfData(id: number | string): csv.MindCloseDef {
        let confData = GMConf.getConf('mindClose')[id]
        if (confData == null) {
            console.warn('MindCloseConf ' + id + ' = nil')
        }
        return confData
    }
    static mindCloseConf(): { [key: number]: csv.MindCloseDef } {
        return GMConf.getConf('mindClose') || {}
    }
    static mindPotionConfData(id: number | string): csv.MindPotionDef {
        let confData = GMConf.getConf('mindPotion')[id]
        if (confData == null) {
            console.warn('MindPotionConf ' + id + ' = nil')
        }
        return confData
    }
    static mindPotionConf(): { [key: number]: csv.MindPotionDef } {
        return GMConf.getConf('mindPotion') || {}
    }
    static mindRewardConfData(id: number | string): csv.MindRewardDef {
        let confData = GMConf.getConf('mindReward')[id]
        if (confData == null) {
            console.warn('MindRewardConf ' + id + ' = nil')
        }
        return confData
    }
    static mindRewardConf(): { [key: number]: csv.MindRewardDef } {
        return GMConf.getConf('mindReward') || {}
    }
    static mindTrainConfData(id: number | string): csv.MindTrainDef {
        let confData = GMConf.getConf('mindTrain')[id]
        if (confData == null) {
            console.warn('MindTrainConf ' + id + ' = nil')
        }
        return confData
    }
    static mindTrainConf(): { [key: number]: csv.MindTrainDef } {
        return GMConf.getConf('mindTrain') || {}
    }
    static monsterConfData(id: number | string): csv.MonsterDef {
        let confData = GMConf.getConf('monster')[id]
        if (confData == null) {
            console.warn('MonsterConf ' + id + ' = nil')
        }
        return confData
    }
    static monsterConf(): { [key: number]: csv.MonsterDef } {
        return GMConf.getConf('monster') || {}
    }
    static monsterPowerConfData(id: number | string): csv.MonsterPowerDef {
        let confData = GMConf.getConf('monsterPower')[id]
        if (confData == null) {
            console.warn('MonsterPowerConf ' + id + ' = nil')
        }
        return confData
    }
    static monsterPowerConf(): { [key: number]: csv.MonsterPowerDef } {
        return GMConf.getConf('monsterPower') || {}
    }
    static monthCardConfData(id: number | string): csv.MonthCardDef {
        let confData = GMConf.getConf('monthCard')[id]
        if (confData == null) {
            console.warn('MonthCardConf ' + id + ' = nil')
        }
        return confData
    }
    static monthCardConf(): { [key: number]: csv.MonthCardDef } {
        return GMConf.getConf('monthCard') || {}
    }
    static mysteryEventConfData(id: number | string): csv.MysteryEventDef {
        let confData = GMConf.getConf('mysteryEvent')[id]
        if (confData == null) {
            console.warn('MysteryEventConf ' + id + ' = nil')
        }
        return confData
    }
    static mysteryEventConf(): { [key: number]: csv.MysteryEventDef } {
        return GMConf.getConf('mysteryEvent') || {}
    }
    static mysteryGlobalConfData(id: number | string): csv.MysteryGlobalDef {
        let confData = GMConf.getConf('mysteryGlobal')[id]
        if (confData == null) {
            console.warn('MysteryGlobalConf ' + id + ' = nil')
        }
        return confData
    }
    static mysteryGlobalConf(): { [key: number]: csv.MysteryGlobalDef } {
        return GMConf.getConf('mysteryGlobal') || {}
    }
    static mysteryHouseConfData(id: number | string): csv.MysteryHouseDef {
        let confData = GMConf.getConf('mysteryHouse')[id]
        if (confData == null) {
            console.warn('MysteryHouseConf ' + id + ' = nil')
        }
        return confData
    }
    static mysteryHouseConf(): { [key: number]: csv.MysteryHouseDef } {
        return GMConf.getConf('mysteryHouse') || {}
    }
    static nameConfData(id: number | string): csv.NameDef {
        let confData = GMConf.getConf('name')[id]
        if (confData == null) {
            console.warn('NameConf ' + id + ' = nil')
        }
        return confData
    }
    static nameConf(): { [key: number]: csv.NameDef } {
        return GMConf.getConf('name') || {}
    }
    static nameLengthConfData(id: number | string): csv.NameLengthDef {
        let confData = GMConf.getConf('nameLength')[id]
        if (confData == null) {
            console.warn('NameLengthConf ' + id + ' = nil')
        }
        return confData
    }
    static nameLengthConf(): { [key: number]: csv.NameLengthDef } {
        return GMConf.getConf('nameLength') || {}
    }
    static officialAccountConfData(id: number | string): csv.OfficialAccountDef {
        let confData = GMConf.getConf('officialAccount')[id]
        if (confData == null) {
            console.warn('OfficialAccountConf ' + id + ' = nil')
        }
        return confData
    }
    static officialAccountConf(): { [key: number]: csv.OfficialAccountDef } {
        return GMConf.getConf('officialAccount') || {}
    }
    static passiveConfData(id: number | string): csv.PassiveDef {
        let confData = GMConf.getConf('passive')[id]
        if (confData == null) {
            console.warn('PassiveConf ' + id + ' = nil')
        }
        return confData
    }
    static passiveConf(): { [key: number]: csv.PassiveDef } {
        return GMConf.getConf('passive') || {}
    }
    static performanceConfData(id: number | string): csv.PerformanceDef {
        let confData = GMConf.getConf('performance')[id]
        if (confData == null) {
            console.warn('PerformanceConf ' + id + ' = nil')
        }
        return confData
    }
    static performanceConf(): { [key: number]: csv.PerformanceDef } {
        return GMConf.getConf('performance') || {}
    }
    static pictureOrderConfData(id: number | string): csv.PictureOrderDef {
        let confData = GMConf.getConf('pictureOrder')[id]
        if (confData == null) {
            console.warn('PictureOrderConf ' + id + ' = nil')
        }
        return confData
    }
    static pictureOrderConf(): { [key: number]: csv.PictureOrderDef } {
        return GMConf.getConf('pictureOrder') || {}
    }
    static playerHeadConfData(id: number | string): csv.PlayerHeadDef {
        let confData = GMConf.getConf('playerHead')[id]
        if (confData == null) {
            console.warn('PlayerHeadConf ' + id + ' = nil')
        }
        return confData
    }
    static playerHeadConf(): { [key: number]: csv.PlayerHeadDef } {
        return GMConf.getConf('playerHead') || {}
    }
    static playerUpConfData(id: number | string): csv.PlayerUpDef {
        let confData = GMConf.getConf('playerUp')[id]
        if (confData == null) {
            console.warn('PlayerUpConf ' + id + ' = nil')
        }
        return confData
    }
    static playerUpConf(): { [key: number]: csv.PlayerUpDef } {
        return GMConf.getConf('playerUp') || {}
    }
    static presetCombatConfData(id: number | string): csv.PresetCombatDef {
        let confData = GMConf.getConf('presetCombat')[id]
        if (confData == null) {
            console.warn('PresetCombatConf ' + id + ' = nil')
        }
        return confData
    }
    static presetCombatConf(): { [key: number]: csv.PresetCombatDef } {
        return GMConf.getConf('presetCombat') || {}
    }
    static privilegeConfData(id: number | string): csv.PrivilegeDef {
        let confData = GMConf.getConf('privilege')[id]
        if (confData == null) {
            console.warn('PrivilegeConf ' + id + ' = nil')
        }
        return confData
    }
    static privilegeConf(): { [key: number]: csv.PrivilegeDef } {
        return GMConf.getConf('privilege') || {}
    }
    static raceTowerOpenConfData(id: number | string): csv.RaceTowerOpenDef {
        let confData = GMConf.getConf('raceTowerOpen')[id]
        if (confData == null) {
            console.warn('RaceTowerOpenConf ' + id + ' = nil')
        }
        return confData
    }
    static raceTowerOpenConf(): { [key: number]: csv.RaceTowerOpenDef } {
        return GMConf.getConf('raceTowerOpen') || {}
    }
    static rankConfData(id: number | string): csv.RankDef {
        let confData = GMConf.getConf('rank')[id]
        if (confData == null) {
            console.warn('RankConf ' + id + ' = nil')
        }
        return confData
    }
    static rankConf(): { [key: number]: csv.RankDef } {
        return GMConf.getConf('rank') || {}
    }
    static rankRewardConfData(id: number | string): csv.RankRewardDef {
        let confData = GMConf.getConf('rankReward')[id]
        if (confData == null) {
            console.warn('RankRewardConf ' + id + ' = nil')
        }
        return confData
    }
    static rankRewardConf(): { [key: number]: csv.RankRewardDef } {
        return GMConf.getConf('rankReward') || {}
    }
    static roleConfData(id: number | string): csv.RoleDef {
        let confData = GMConf.getConf('role')[id]
        if (confData == null) {
            console.warn('RoleConf ' + id + ' = nil')
        }
        return confData
    }
    static roleConf(): { [key: number]: csv.RoleDef } {
        return GMConf.getConf('role') || {}
    }
    static shopConfData(id: number | string): csv.ShopDef {
        let confData = GMConf.getConf('shop')[id]
        if (confData == null) {
            console.warn('ShopConf ' + id + ' = nil')
        }
        return confData
    }
    static shopConf(): { [key: number]: csv.ShopDef } {
        return GMConf.getConf('shop') || {}
    }
    static shopItemConfData(id: number | string): csv.ShopItemDef {
        let confData = GMConf.getConf('shopItem')[id]
        if (confData == null) {
            console.warn('ShopItemConf ' + id + ' = nil')
        }
        return confData
    }
    static shopItemConf(): { [key: number]: csv.ShopItemDef } {
        return GMConf.getConf('shopItem') || {}
    }
    static signRewardConfData(id: number | string): csv.SignRewardDef {
        let confData = GMConf.getConf('signReward')[id]
        if (confData == null) {
            console.warn('SignRewardConf ' + id + ' = nil')
        }
        return confData
    }
    static signRewardConf(): { [key: number]: csv.SignRewardDef } {
        return GMConf.getConf('signReward') || {}
    }
    static skillConfData(id: number | string): csv.SkillDef {
        let confData = GMConf.getConf('skill')[id]
        if (confData == null) {
            console.warn('SkillConf ' + id + ' = nil')
        }
        return confData
    }
    static skillConf(): { [key: number]: csv.SkillDef } {
        return GMConf.getConf('skill') || {}
    }
    static skillLabelConfData(id: number | string): csv.SkillLabelDef {
        let confData = GMConf.getConf('skillLabel')[id]
        if (confData == null) {
            console.warn('SkillLabelConf ' + id + ' = nil')
        }
        return confData
    }
    static skillLabelConf(): { [key: number]: csv.SkillLabelDef } {
        return GMConf.getConf('skillLabel') || {}
    }
    static spaceEventConfData(id: number | string): csv.SpaceEventDef {
        let confData = GMConf.getConf('spaceEvent')[id]
        if (confData == null) {
            console.warn('SpaceEventConf ' + id + ' = nil')
        }
        return confData
    }
    static spaceEventConf(): { [key: number]: csv.SpaceEventDef } {
        return GMConf.getConf('spaceEvent') || {}
    }
    static spaceGridConfData(id: number | string): csv.SpaceGridDef {
        let confData = GMConf.getConf('spaceGrid')[id]
        if (confData == null) {
            console.warn('SpaceGridConf ' + id + ' = nil')
        }
        return confData
    }
    static spaceGridConf(): { [key: number]: csv.SpaceGridDef } {
        return GMConf.getConf('spaceGrid') || {}
    }
    static spaceRewardConfData(id: number | string): csv.SpaceRewardDef {
        let confData = GMConf.getConf('spaceReward')[id]
        if (confData == null) {
            console.warn('SpaceRewardConf ' + id + ' = nil')
        }
        return confData
    }
    static spaceRewardConf(): { [key: number]: csv.SpaceRewardDef } {
        return GMConf.getConf('spaceReward') || {}
    }
    static spaceShopConfData(id: number | string): csv.SpaceShopDef {
        let confData = GMConf.getConf('spaceShop')[id]
        if (confData == null) {
            console.warn('SpaceShopConf ' + id + ' = nil')
        }
        return confData
    }
    static spaceShopConf(): { [key: number]: csv.SpaceShopDef } {
        return GMConf.getConf('spaceShop') || {}
    }
    static spaceTimeConfData(id: number | string): csv.SpaceTimeDef {
        let confData = GMConf.getConf('spaceTime')[id]
        if (confData == null) {
            console.warn('SpaceTimeConf ' + id + ' = nil')
        }
        return confData
    }
    static spaceTimeConf(): { [key: number]: csv.SpaceTimeDef } {
        return GMConf.getConf('spaceTime') || {}
    }
    static standingConfData(id: number | string): csv.StandingDef {
        let confData = GMConf.getConf('standing')[id]
        if (confData == null) {
            console.warn('StandingConf ' + id + ' = nil')
        }
        return confData
    }
    static standingConf(): { [key: number]: csv.StandingDef } {
        return GMConf.getConf('standing') || {}
    }
    static statusTabConfData(id: number | string): csv.StatusTabDef {
        let confData = GMConf.getConf('statusTab')[id]
        if (confData == null) {
            console.warn('StatusTabConf ' + id + ' = nil')
        }
        return confData
    }
    static statusTabConf(): { [key: number]: csv.StatusTabDef } {
        return GMConf.getConf('statusTab') || {}
    }
    static superHeroAttConfData(id: number | string): csv.SuperHeroAttDef {
        let confData = GMConf.getConf('superHeroAtt')[id]
        if (confData == null) {
            console.warn('SuperHeroAttConf ' + id + ' = nil')
        }
        return confData
    }
    static superHeroAttConf(): { [key: number]: csv.SuperHeroAttDef } {
        return GMConf.getConf('superHeroAtt') || {}
    }
    static superHeroStarConfData(id: number | string): csv.SuperHeroStarDef {
        let confData = GMConf.getConf('superHeroStar')[id]
        if (confData == null) {
            console.warn('SuperHeroStarConf ' + id + ' = nil')
        }
        return confData
    }
    static superHeroStarConf(): { [key: number]: csv.SuperHeroStarDef } {
        return GMConf.getConf('superHeroStar') || {}
    }
    static talkConfData(id: number | string): csv.TalkDef {
        let confData = GMConf.getConf('talk')[id]
        if (confData == null) {
            console.warn('TalkConf ' + id + ' = nil')
        }
        return confData
    }
    static talkConf(): { [key: number]: csv.TalkDef } {
        return GMConf.getConf('talk') || {}
    }
    static targetTaskConfData(id: number | string): csv.TargetTaskDef {
        let confData = GMConf.getConf('targetTask')[id]
        if (confData == null) {
            console.warn('TargetTaskConf ' + id + ' = nil')
        }
        return confData
    }
    static targetTaskConf(): { [key: number]: csv.TargetTaskDef } {
        return GMConf.getConf('targetTask') || {}
    }
    static taskTipsConfData(id: number | string): csv.TaskTipsDef {
        let confData = GMConf.getConf('taskTips')[id]
        if (confData == null) {
            console.warn('TaskTipsConf ' + id + ' = nil')
        }
        return confData
    }
    static taskTipsConf(): { [key: number]: csv.TaskTipsDef } {
        return GMConf.getConf('taskTips') || {}
    }
    static templeConfData(id: number | string): csv.TempleDef {
        let confData = GMConf.getConf('temple')[id]
        if (confData == null) {
            console.warn('TempleConf ' + id + ' = nil')
        }
        return confData
    }
    static templeConf(): { [key: number]: csv.TempleDef } {
        return GMConf.getConf('temple') || {}
    }
    static templeMedalConfData(id: number | string): csv.TempleMedalDef {
        let confData = GMConf.getConf('templeMedal')[id]
        if (confData == null) {
            console.warn('TempleMedalConf ' + id + ' = nil')
        }
        return confData
    }
    static templeMedalConf(): { [key: number]: csv.TempleMedalDef } {
        return GMConf.getConf('templeMedal') || {}
    }
    static templeStepsConfData(id: number | string): csv.TempleStepsDef {
        let confData = GMConf.getConf('templeSteps')[id]
        if (confData == null) {
            console.warn('TempleStepsConf ' + id + ' = nil')
        }
        return confData
    }
    static templeStepsConf(): { [key: number]: csv.TempleStepsDef } {
        return GMConf.getConf('templeSteps') || {}
    }
    static towerConfData(id: number | string): csv.TowerDef {
        let confData = GMConf.getConf('tower')[id]
        if (confData == null) {
            console.warn('TowerConf ' + id + ' = nil')
        }
        return confData
    }
    static towerConf(): { [key: number]: csv.TowerDef } {
        return GMConf.getConf('tower') || {}
    }
    static towerRewardConfData(id: number | string): csv.TowerRewardDef {
        let confData = GMConf.getConf('towerReward')[id]
        if (confData == null) {
            console.warn('TowerRewardConf ' + id + ' = nil')
        }
        return confData
    }
    static towerRewardConf(): { [key: number]: csv.TowerRewardDef } {
        return GMConf.getConf('towerReward') || {}
    }
    static treasureConfData(id: number | string): csv.TreasureDef {
        let confData = GMConf.getConf('treasure')[id]
        if (confData == null) {
            console.warn('TreasureConf ' + id + ' = nil')
        }
        return confData
    }
    static treasureConf(): { [key: number]: csv.TreasureDef } {
        return GMConf.getConf('treasure') || {}
    }
    static treasureAttrConfData(id: number | string): csv.TreasureAttrDef {
        let confData = GMConf.getConf('treasureAttr')[id]
        if (confData == null) {
            console.warn('TreasureAttrConf ' + id + ' = nil')
        }
        return confData
    }
    static treasureAttrConf(): { [key: number]: csv.TreasureAttrDef } {
        return GMConf.getConf('treasureAttr') || {}
    }
    static treasureChestConfData(id: number | string): csv.TreasureChestDef {
        let confData = GMConf.getConf('treasureChest')[id]
        if (confData == null) {
            console.warn('TreasureChestConf ' + id + ' = nil')
        }
        return confData
    }
    static treasureChestConf(): { [key: number]: csv.TreasureChestDef } {
        return GMConf.getConf('treasureChest') || {}
    }
    static treasureLvConfData(id: number | string): csv.TreasureLvDef {
        let confData = GMConf.getConf('treasureLv')[id]
        if (confData == null) {
            console.warn('TreasureLvConf ' + id + ' = nil')
        }
        return confData
    }
    static treasureLvConf(): { [key: number]: csv.TreasureLvDef } {
        return GMConf.getConf('treasureLv') || {}
    }
    static treasureProbabilityConfData(id: number | string): csv.TreasureProbabilityDef {
        let confData = GMConf.getConf('treasureProbability')[id]
        if (confData == null) {
            console.warn('TreasureProbabilityConf ' + id + ' = nil')
        }
        return confData
    }
    static treasureProbabilityConf(): { [key: number]: csv.TreasureProbabilityDef } {
        return GMConf.getConf('treasureProbability') || {}
    }
    static treasureWealthConfData(id: number | string): csv.TreasureWealthDef {
        let confData = GMConf.getConf('treasureWealth')[id]
        if (confData == null) {
            console.warn('TreasureWealthConf ' + id + ' = nil')
        }
        return confData
    }
    static treasureWealthConf(): { [key: number]: csv.TreasureWealthDef } {
        return GMConf.getConf('treasureWealth') || {}
    }
    static turntableConfData(id: number | string): csv.TurntableDef {
        let confData = GMConf.getConf('turntable')[id]
        if (confData == null) {
            console.warn('TurntableConf ' + id + ' = nil')
        }
        return confData
    }
    static turntableConf(): { [key: number]: csv.TurntableDef } {
        return GMConf.getConf('turntable') || {}
    }
    static turntableBoxConfData(id: number | string): csv.TurntableBoxDef {
        let confData = GMConf.getConf('turntableBox')[id]
        if (confData == null) {
            console.warn('TurntableBoxConf ' + id + ' = nil')
        }
        return confData
    }
    static turntableBoxConf(): { [key: number]: csv.TurntableBoxDef } {
        return GMConf.getConf('turntableBox') || {}
    }
    static turntableCommonConfData(id: number | string): csv.TurntableCommonDef {
        let confData = GMConf.getConf('turntableCommon')[id]
        if (confData == null) {
            console.warn('TurntableCommonConf ' + id + ' = nil')
        }
        return confData
    }
    static turntableCommonConf(): { [key: number]: csv.TurntableCommonDef } {
        return GMConf.getConf('turntableCommon') || {}
    }
    static turntableShowConfData(id: number | string): csv.TurntableShowDef {
        let confData = GMConf.getConf('turntableShow')[id]
        if (confData == null) {
            console.warn('TurntableShowConf ' + id + ' = nil')
        }
        return confData
    }
    static turntableShowConf(): { [key: number]: csv.TurntableShowDef } {
        return GMConf.getConf('turntableShow') || {}
    }
    static unlockConfData(id: number | string): csv.UnlockDef {
        let confData = GMConf.getConf('unlock')[id]
        if (confData == null) {
            console.warn('UnlockConf ' + id + ' = nil')
        }
        return confData
    }
    static unlockConf(): { [key: number]: csv.UnlockDef } {
        return GMConf.getConf('unlock') || {}
    }
    static unlockJumpConfData(id: number | string): csv.UnlockJumpDef {
        let confData = GMConf.getConf('unlockJump')[id]
        if (confData == null) {
            console.warn('UnlockJumpConf ' + id + ' = nil')
        }
        return confData
    }
    static unlockJumpConf(): { [key: number]: csv.UnlockJumpDef } {
        return GMConf.getConf('unlockJump') || {}
    }
    static vipConfData(id: number | string): csv.VipDef {
        let confData = GMConf.getConf('vip')[id]
        if (confData == null) {
            console.warn('VipConf ' + id + ' = nil')
        }
        return confData
    }
    static vipConf(): { [key: number]: csv.VipDef } {
        return GMConf.getConf('vip') || {}
    }
    static weekendGiftConfData(id: number | string): csv.WeekendGiftDef {
        let confData = GMConf.getConf('weekendGift')[id]
        if (confData == null) {
            console.warn('WeekendGiftConf ' + id + ' = nil')
        }
        return confData
    }
    static weekendGiftConf(): { [key: number]: csv.WeekendGiftDef } {
        return GMConf.getConf('weekendGift') || {}
    }
    static workStationConfData(id: number | string): csv.WorkStationDef {
        let confData = GMConf.getConf('workStation')[id]
        if (confData == null) {
            console.warn('WorkStationConf ' + id + ' = nil')
        }
        return confData
    }
    static workStationConf(): { [key: number]: csv.WorkStationDef } {
        return GMConf.getConf('workStation') || {}
    }
}
