//自定义

declare function require(value: any);

declare var moment: any;

declare namespace cc {
    export class Speed extends Action {
        /**
        !#en Gets the current running speed.
        !#zh 获得当前执行速度。 
        */
        getSpeed(): number;
        /**
        !#en alter the speed of the inner function in runtime.
        !#zh 设置当前执行速度。
        @param speed speed 
        */
        setSpeed(speed: number): void;
    }
}