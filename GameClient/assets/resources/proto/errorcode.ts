export enum errCode {
	OK               = 0, // 没问题
	Failed           = 1, // 未知错误
	RegisterSameName = 2, //注册账号已存在
	RegisterName     = 3, //注册名字不合法
	RegisterPassWord = 4, //注册密码不合法
	LoginPassWord    = 5, //登录密码错误
	LoginName        = 6, //登录账号不存在
	EnterRoomFull    = 7, //房间已满
}
