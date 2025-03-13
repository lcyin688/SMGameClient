const robot = require("robotjs");






/**
 * 防止离线  5-20 秒 跳一跳 
 */
function offlineHangUp() {
    // 模拟按键（组合键示例：Ctrl+C）
    // robot.keyTap("c", "control");
    // robot.typeString("武器附魔 十字军  130 G");

    // robot.keyTap("w");

    holdKeyAny("w",getRandomInterval(3,10));

    // 移动鼠标并点击（演示组合操作）
    // robot.moveMouse(1000, 100);
    // robot.mouseClick();
    let  time = getRandomInterval(5,20);
    
    setTimeout(() => {
        offlineHangUp()
    }, time);
}

/**获取随机数时间 */
function getRandomInterval(min,max) {
    return Math.floor(Math.random() * (max*1000 - min*1000 + 1)) + min*1000;
}

// 按住 某个按键延迟多久抬起 
function holdKeyAny(keyStr,time) {
    // 按下 w 键
    robot.keyToggle(keyStr, "down");
    setTimeout(() => {
        robot.keyToggle(keyStr, "up");
    }, time); 
}




setTimeout(() => {
    offlineHangUp()
}, 2000);









