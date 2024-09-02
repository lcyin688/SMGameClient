export enum HttpCode {
    kSuccess = 0,
    kTimeout = 10000,
    kUnknown = 10001,
    kSessionTimeout = -8,
    kIAmInBlocklist = -3013,
    kUserIsInMyBlocklist = -3014
}