class GlobalCost:
    TS_LOCALIZATION_HEADER = """/**
 * create by lang-xlsx2json
 * source: %s
 */
"""

    TS_EXPORT_CONST_START = """declare global {
    interface I%s {
        /** %s 多语言 */
        lang: typeof %sLanguage;
    }
}

/** 模块名 */
const moduleName: string = '%s/';\n
export const %sLanguage = {
"""

    TS_CONST_START = """
/** 模块名 */
const moduleName: string = '%s/';\n
export const %sLanguage = {
"""

    TS_KEY_LINES_CONTEXT = """    %s: moduleName + '%s',
"""

    TS_END_CONST = """};
"""

    TS_EXPORT_CONST_END = """};\n
we.%s.lang = %sLanguage;
"""
