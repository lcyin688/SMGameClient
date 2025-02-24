var ConstT = {
    /**
     * 资源根目录
     */
    ROOT_RES_PATH: Editor.Project.path + '/assets/resources',
    /**
     * 预制路径
     */
    PREFAB_PATH: Editor.Project.path + '/assets/resources/Prefab',
    /**
     * UI路径
     */
    UI_PATH: Editor.Project.path + '/assets/resources/Prefab/UI',
    /**
     * 输出文件根目录
     */
    ROOT_EXPORT_PATH: Editor.Project.path + '/assets/Script',
    /**
     * UI脚本路径
     */
    UI_SCRIPT_PATH: Editor.Project.path + '/assets/Script/UI',
    /**
     * 扩展路径
     */
    EXTENSIONS_PATH: Editor.Project.path + '/extensions',
    /**
     * 模板路径
     */
    TEMPLATE_PATH: Editor.Project.path + '/packages/prefab-code-builder/src/template',

    /**
     * 模板配置
     */
    TEMPLATE_FILE_CONFIG: {
        'UI': {
            'Model': 'VModelTemplate.txt',
            'View': 'VViewTemplate.txt',
            'Controller': 'VControllerTemplate.txt',
        },
        'Entity': {
            'Model': 'PModelTemplate.txt',
            'View': 'PViewTemplate.txt',
            'Controller': 'PControllerTemplate.txt',
        }
    },

    /**
     * 组件事件配置表
     */
    COMPONENT_EVENT_CONFIG: {
        'Button': [{
            'EventName': 'click',
            'FunctionName': 'Click',
        }],
        'EditBox': [{
            'EventName': 'editing-did-began',
            'FunctionName': 'EditingBegan',
        }, {
            'EventName': 'editing-did-ended',
            'FunctionName': 'EditingEnded',
        }, {
            'EventName': 'editing-return',
            'FunctionName': 'EditingReturn',
        }, {
            'EventName': 'text-changed',
            'FunctionName': 'TextChanged',
        }],
        'ScrollView': [{
            'EventName': 'scroll-to-top',
            'FunctionName': 'ScrollToTop',
        }, {
            'EventName': 'scroll-to-bottom',
            'FunctionName': 'ScrollToBottom',
        }, {
            'EventName': 'scroll-to-left',
            'FunctionName': 'ScrollToLeft',
        }, {
            'EventName': 'scroll-to-right',
            'FunctionName': 'ScrollToRight',
        }, {
            'EventName': 'scrolling',
            'FunctionName': 'Scrolling',
        }, {
            'EventName': 'bounce-bottom',
            'FunctionName': 'BounceBottom',
        }, {
            'EventName': 'bounce-top',
            'FunctionName': 'BounceTop',
        }, {
            'EventName': 'bounce-left',
            'FunctionName': 'BounceLeft',
        }, {
            'EventName': 'bounce-right',
            'FunctionName': 'BounceRight',
        }, {
            'EventName': 'scroll-ended',
            'FunctionName': 'ScrollEnded',
        }, {
            'EventName': 'touch-up',
            'FunctionName': 'TouchUp',
        }, {
            'EventName': 'scroll-began',
            'FunctionName': 'ScrollBegan',
        }],
        'Toggle': [{
            'EventName': 'toggle',
            'FunctionName': 'Toggle',
        }],
        'Slider': [{
            'EventName': 'slide',
            'FunctionName': 'Slide',
        }],
        'PageView': [{
            'EventName': 'page-turning',
            'FunctionName': 'PageTurning',
        }]
    },

    /**
     * 临时文件路径
     */
    TEMP_PATH: Editor.Project.path + '/temp',
    /**
     * 该插件的临时文件路径
     */
    TEMP_DATA_PATH: Editor.Project.path + '/temp/prefab-code-builder',
    /**
     * 该插件的临时文件
     */
    TEMP_DATA_FILE: Editor.Project.path + '/temp/prefab-code-builder/asset-change-flag.json',

    /**
     * 基类引入相对路径
     */
    IMPORT_PATH: '$IMPORT_PATH',
    /**
     * 模板 视图 类名
     */
    VIEW_KEY_CLASS_NAME: '$CLASS_NAME',
    /**
     * 模板 视图 变量声明
     */
    VIEW_KEY_VARIABLE_DECLARATIONS: '$VARIABLE_DECLARATIONS',
    /**
     * 模板 视图 变量赋值
     */
    VIEW_KEY_VARIABLE_ASSIGNMENT: '$VARIABLE_ASSIGNMENT',
    /**
     * 目标 视图 预制名
     */
    VIEW_KEY_PREFAB_NAME: '$PREFAB_NAME',
    /**
     * 模板 视图 事件添加
     */
    VIEW_KEY_EVENT_ON: '$EVENT_ON',
    /**
     * 模板 视图 事件移除
     */
    VIEW_KEY_EVENT_OFF: '$EVENT_OFF',
    /**
     * 模板 视图 事件回调
     */
    VIEW_KEY_EVENT_CALLBACK: '$EVENT_CALLBACK',
    /**
     * 模板 控制 按钮事件注册
     */
    CTRL_KEY_BTN_FUNCTION: '$CTRL_KEY_BTN_FUNCTION',

}

module.exports = ConstT;
