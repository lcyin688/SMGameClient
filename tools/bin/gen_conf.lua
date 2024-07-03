function trim(input)
    input = string.gsub(input, '^[ \t\n\r]+', '')
    return string.gsub(input, '[ \t\n\r]+$', '')
end

local function string2type(string)
    if string == 'string' then
        return string
    end
    return 'number'
end
function split(input, delimiter)
    input = tostring(input)
    delimiter = tostring(delimiter)
    if (delimiter == '') then
        return false
    end
    local pos, arr = 0, {}
    -- for each divider found
    for st, sp in function()
        return string.find(input, delimiter, pos, true)
    end do
        table.insert(arr, string.sub(input, pos, st - 1))
        pos = sp + 1
    end
    table.insert(arr, string.sub(input, pos))
    return arr
end

local function pathinfo(path)
    local pos = string.len(path)
    local extpos = pos + 1
    while pos > 0 do
        local b = string.byte(path, pos)
        if b == 46 then -- 46 = char "."
            extpos = pos
        elseif b == 47 then -- 47 = char "/"
            break
        end
        pos = pos - 1
    end

    local dirname = string.sub(path, 1, pos)
    local filename = string.sub(path, pos + 1)
    extpos = extpos - pos
    local basename = string.sub(filename, 1, extpos - 1)
    local extname = string.sub(filename, extpos)
    return {
        dirname = dirname,
        filename = filename,
        basename = basename,
        extname = extname
    }
end

local function get_conf_ts(filePath)
    print("handle:",filePath)
    local info = pathinfo(filePath)
    local classInfo = {
        fileName = info.basename,
        name = info.basename:gsub('^%l', string.upper),
        subClassInfos = {},
        memberInfos = {} --list<name,type>s
    }
    local f = io.open(filePath, 'r')
    local allLines = {}
    for l in f:lines() do
        table.insert(allLines, l)
    end
    local memberNames = split(allLines[1], ',')
    local memberTyps = split(allLines[2], ',')
    for i, name in ipairs(memberNames) do
        name = trim(name)
        local typeName = trim(memberTyps[i])
        if string.find(typeName, '[]{', 1, true) == 1 then
            --对象数组
            typeName = trim(string.sub(typeName, 4, string.len(typeName) - 1))
            local typeAndNames = split(typeName, ';')
            local subClassInfo = {
                name = "",
                memberInfos = {} --list<name,type>
            }
            local subClassHead = ""
            local subClassT = ""
            for i, typeAndName in ipairs(typeAndNames) do
                typeAndName = trim(typeAndName)
                if typeAndName ~= '' then
                    typeName = split(typeAndName, ' ')
                    -- print(subClassName)
                    -- print(typeName[2], typeName[1])
                    local subClassDict = {
                            name = trim(typeName[2]),
                            type = string2type(trim(typeName[1]))
                        }
                    table.insert(
                        subClassInfo.memberInfos,
                        subClassDict
                    )
                    subClassHead = subClassHead..subClassDict.name
                    subClassT = subClassT..string.gsub(string.sub(subClassDict.type,1,1),"^%l",string.upper )
                end
            end
            subClassHead = string.gsub(subClassHead,"^%l",string.upper)
            subClassInfo.name = subClassHead.."_"..subClassT
            table.insert(classInfo.subClassInfos, subClassInfo)
            table.insert(
                classInfo.memberInfos,
                {
                    name = name,
                    type = subClassInfo.name .. '[]'
                }
            )
        elseif string.find(typeName, '[', 1, true) == 1 then
            --普通数组
            table.insert(
                classInfo.memberInfos,
                {
                    name = name,
                    type = string2type(trim(string.sub(typeName, 3, string.len(typeName)))) .. '[]'
                }
            )           
        else
            --普通数据
            table.insert(
                classInfo.memberInfos,
                {
                    name = name,
                    type = string2type(typeName)
                }
            )          
        end
    end
    return classInfo
end

local function main()
    -- print(os.execute())
    local f = io.popen("find ../../assets/resources/config -name '*.txt'")
    if f == nil then
        throw('open *.txt failed')
    end
    local ret = {}
    for l in f:lines() do
        -- print(l)
        local a, b = string.find(l, 'dress')
        -- if a then
        -- print(a,b)
        table.insert(ret, get_conf_ts(l))
        -- end
    end
    table.sort(
        ret,
        function(a, b)
            return a.name < b.name
        end
    )
    f:close()

    local configJsFile = io.open('../../assets/Script/config/CSVFiles.ts',"r")
    local configCont = configJsFile:read("a")
    configJsFile:close()
    local configReqStr = 'const CSVFiles = [\n'
    for index, value in ipairs(ret) do
        configReqStr = configReqStr..'\t"'..value.fileName ..'",\n';
    end
    configReqStr = configReqStr .. '];'
    local newCfgCont = string.gsub(configCont,"const%s*CSVFiles%s*=%s*%[[^%[%]]*%]%s*;",configReqStr,1);
    local newConfigsJsFile = io.open('../../assets/Script/config/CSVFiles.ts',"w+")
    newConfigsJsFile:write(newCfgCont)
    newConfigsJsFile:close()
    --生成配置configs.d.ts描述文件
    local configsFile = io.open('../../csv.d.ts', 'w')
    configsFile:write('declare namespace csv {\n')
    local existSubClassNames = {}
    for i, classInfo in ipairs(ret) do
        --子类型
        for j, subClassInfo in ipairs(classInfo.subClassInfos) do
            if existSubClassNames[subClassInfo.name] == nil then
                configsFile:write(string.format('\tinterface %s {\n', subClassInfo.name))
                for k, memberInfo in ipairs(subClassInfo.memberInfos) do
                    configsFile:write(string.format('\t\t%s: %s\n', memberInfo.name, memberInfo.type))
                end
                configsFile:write('\t}\n')
                existSubClassNames[subClassInfo.name] = subClassInfo.name
            end
        end
    end
    for i, classInfo in ipairs(ret) do
        configsFile:write(string.format('\tinterface %sDef {\n', classInfo.name))
        for t, memberInfo in ipairs(classInfo.memberInfos) do
            configsFile:write(string.format('\t\t%s: %s\n', memberInfo.name, memberInfo.type))

            --多语言字段自动添加真实字段定义{{
            local findIdx = string.find(memberInfo.name, '_key', 1, true);            
            if findIdx ~= nil then
                local shortName = string.gsub(memberInfo.name, '_key', '');

                local existIdx = nil
                for idxTmp, memTmp in ipairs(classInfo.memberInfos) do
                    if memTmp.name == shortName then
                        existIdx = idxTmp
                    end
                end
                if existIdx ~= nil then
                    print(string.format('language part defined in class[%s], elemName:[%s], elemType:[%s]', classInfo.name, shortName, classInfo.memberInfos[existIdx].type));
                else
                    local findArr = string.find(memberInfo.type, '[]', 1, true);
                    if findArr ~= nil then 
                        configsFile:write(string.format('\t\t%s: %s\n', shortName, 'string[]'))
                    else
                        configsFile:write(string.format('\t\t%s: %s\n', shortName, 'string'))
                    end                    
                end                                
            end
            --多语言字段自动添加真实字段定义}}
        end
        configsFile:write('\t}\n')
    end
    configsFile:write('}')
    configsFile:close()

    --生成配置AllConf.ts描述文件
    local allConfFile = io.open('../../assets/Script/config/GMConf.ts', 'w')
    allConfFile:write(
        [[
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
]]
    )
    local template =
        [[
    static %sConfData(id: number | string): csv.%s {
        let confData = GMConf.getConf('%s')[id]
        if (confData == null) {
            console.warn('%sConf ' + id + ' = nil')
        }
        return confData
    }
    static %sConf(): { [key: number]: csv.%s } {
        return GMConf.getConf('%s') || {}
    }
]]
    for i, classInfo in ipairs(ret) do
        local funcName = classInfo.name:gsub('^%u', string.lower)
        local className = classInfo.name.."Def"
        allConfFile:write(
            string.format(
                template,
                --配置查找
                funcName,
                className,
                classInfo.fileName,
                classInfo.name,
                --配置遍历
                funcName,
                className,
                classInfo.fileName
            )
        )
    end

    allConfFile:write('}\n')
    allConfFile:close()

    return ret
end

main()
