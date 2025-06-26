import os
import xlrd
import time
import json

from Xlxs2Json import GlobalConst

# gernate lua scripts for xls file
class JsonScriptGenerator():
    def __init__(self, file, out, talbeType, genConfig):
        self.importPath = file
        self.exportPath = out
        self.scriptFile = ""
        self.jsonFile = ""
        self.status = False
        self.tableType = talbeType
        self.importFile = {}
        self.titles = []
        self.types = []

        # 读取并解析 JSON 文件
        if genConfig:
            with open(genConfig, 'r', encoding='utf-8') as file:
                self.gen_config_data = json.load(file)
        

    def __del__(self):
        del self.importFile

    def CheckFile(self):
        self.status = True
        if not os.path.isfile(self.importPath):
            self.status = False
        if not os.access(self.exportPath, os.W_OK):
            self.status = False
        if not os.access(self.importPath, os.R_OK):
            self.status = False

    def GetScriptFileName(self):
        fileName, suffix = GetFileName(self.importPath)
        names = fileName.split("_")

        scriptDir = ""
        if names[1] in ["Common", "Hall", "Launcher"]:
            scriptDir = "{}/{}/{}/script/const".format(self.exportPath, names[1].lower(), names[1].lower())
        else:
            gameType = self.gen_config_data.get(names[1].lower())
            scriptDir = "{}/game/{}/{}/{}/script/const".format(self.exportPath, gameType, names[1].lower(), names[1].lower())

        if not os.path.exists(scriptDir):
            os.makedirs(scriptDir)

        scriptName = "%sLanguage.ts" % (names[1])
        self.scriptFile = "{}/{}".format(scriptDir, scriptName)
        # print("self.scriptFile: ", self.scriptFile)

    # generate lua scripts
    def GenerateScript(self):
        if not self.status:
            print("cant generate script by file {}".format(self.importPath))
            return

        self.importFile = xlrd.open_workbook(self.importPath)
        sheet = self.importFile.sheet_by_index(0)
        fileName, suffix = GetFileName(self.importPath)
        names = fileName.split("_")
        if not os.path.exists( self.exportPath ):
            return

        self.jsonFile = ""
        if names[1] in ["Common", "Hall", "Launcher"]:
            self.jsonFile = "{}/{}/{}/config/lang/".format(self.exportPath, names[1].lower(), names[1].lower())
        else:
            gameType = self.gen_config_data.get(names[1].lower())
            self.jsonFile = "{}/game/{}/{}/{}/config/lang/".format(self.exportPath, gameType, names[1].lower(), names[1].lower())

        # print("self.jsonFile: ", self.jsonFile)
        if not os.path.exists(self.jsonFile):
            os.makedirs(self.jsonFile)

        if sheet.nrows <= 3:
            print("This file's first sheet is empty which {}".format(self.importPath))
            return
        
        for index in range(1, sheet.ncols):
            self.GenerateJson(sheet.col_values(0), sheet.col_values(index), sheet.col_values(1))

    def GenerateJson(self, keys, column, desc):
        # set space before the row
        if "" == column[3]:
            return

        fileName, suffix = GetFileName(self.importPath)
        names = fileName.split("_")
        tsContext = GlobalConst.GlobalCost.TS_LOCALIZATION_HEADER % (
            "{}{}".format(fileName, suffix))

        # 导出配置表名满足以下前缀时，需添加导出至全局逻辑
        prefixes = ["Basic", "Launcher", "Com"]
        starts_with_prefixes = any(names[1].startswith(prefix) for prefix in prefixes)
        if starts_with_prefixes:
            tsContext = tsContext + GlobalConst.GlobalCost.TS_EXPORT_CONST_START % (names[1], names[1].lower(), names[1], names[1].lower(), names[1])
        else:
            tsContext = tsContext + GlobalConst.GlobalCost.TS_CONST_START % (names[1].lower(), names[1])

        dict = {}
        for index in range(3, column.__len__()):
            GeneratorItem(dict, column[1], keys[index], column[index], )
            content = str( desc[index])
            zw = content.replace("\r", "").replace("\n", "")
            tsContext = tsContext + """    /** %s */\n""" % (zw)
            tsContext = tsContext + GlobalConst.GlobalCost.TS_KEY_LINES_CONTEXT % (keys[index], keys[index])

        
        if starts_with_prefixes:
            tsContext = tsContext + (GlobalConst.GlobalCost.TS_EXPORT_CONST_END % (names[1].lower(), names[1]))
        else:
            tsContext = tsContext + GlobalConst.GlobalCost.TS_END_CONST

        parent = "{}{}/".format(self.jsonFile, column[1])
        if not os.path.exists(parent):
            os.makedirs(parent)

        path = "%slang.json" % (parent)
        f = open(path, "w", encoding="utf-8")
        json.dump(dict, f, ensure_ascii=False, sort_keys=True, indent=4)
        f.close()

        if self.scriptFile == "":
            return

        f = open(self.scriptFile, "w", encoding="utf-8")
        f.write(tsContext)
        f.close()


# wirte itme value
def GeneratorItem(doc, langCode, key, val, ):
    # 乌尔都语 左边加2个空格
    if langCode == "ur":
        val = "  " + val + "  "
    doc[key] = val

#
def FindFile(path, file):
    files = os.listdir(path)
    res = ""
    for fi in files:
        parent = "{}/{}".format(path, fi)
        if fi == file:
            return parent
        if os.path.isdir(parent):
            res = FindFile(parent, file)
            if res != "":
                break
    
    # print("FindFile:", res)
    return res


#
def GetFileName(path):
    parent, file = os.path.split(path)
    shortName, suffix = os.path.splitext(file)
    return shortName, suffix
