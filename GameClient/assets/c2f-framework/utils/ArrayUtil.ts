
/** 数组工具 */
class ArrayUtil {
    /**
     * 数组去重，并创建一个新数组返回
     * @param arr  源数组
     */
    static noRepeated(arr: any[]) {
        if (arr && arr.length > 0) {
            let res = [arr[0]];
            for (var i = 1; i < arr.length; i++) {
                var repeat = false;
                for (var j = 0; j < res.length; j++) {
                    if (arr[i] == res[j]) {
                        repeat = true;
                        break;
                    }
                }
                if (!repeat) {
                    res.push(arr[i]);
                }
            }
            return res;
        } else {
            return arr;
        }
    }

    /**
     * 复制二维数组
     * @param array 目标数组 
     */
    static copy2DArray(array: any[][]): any[][] {
        let newArray: any[][] = [];
        for (let i = 0; i < array.length; i++) {
            newArray.push(array[i].concat());
        }
        return newArray;
    }

    /**
     * Fisher-Yates Shuffle 随机置乱算法
     * @param array 目标数组
     */
    static fisherYatesShuffle(array: any[]): any[] {
        let count = array.length;
        while (count) {
            let index = Math.floor(Math.random() * count--);
            let temp = array[count];
            array[count] = array[index];
            array[index] = temp;
        }
        return array;
    }

    /**
     * 混淆数组
     * @param array 目标数组
     */
    static confound(array: []): any[] {
        let result = array.slice().sort(() => Math.random() - .5);
        return result;
    }

    /**
     * 数组扁平化
     * @param array 目标数组
     */
    static flattening(array: any[]) {
        for (; array.some(v => Array.isArray(v));) {    // 判断 array 中是否有数组
            array = [].concat.apply([], array); // 压扁数组
        }
        return array;
    }

    /** 删除数组中指定项 */
    static removeItem(array: any[], item: any) {
        let temp = array.concat();
        for (let i = 0; i < temp.length;) {
            const value = temp[i];
            if (item == value) {
                temp.splice(i, 1);
            } else {
                i++;
            }
        }
        return temp;
    }

    /**
     * 合并数组
     * @param array1 目标数组1
     * @param array2 目标数组2
     */
    static combineArrays(array1: any[], array2: any[]): any[] {
        let newArray = [...array1, ...array2];
        return newArray;
    }

    /**
     * 获取随机数组成员
     * @param array 目标数组
     */
    static getRandomValueInArray(array: any[]): any {
        let newArray = array[Math.floor(Math.random() * array.length)];
        return newArray;
    }

    /**
     * 将array中存在于match中的成员移除
     * @param array 
     * @param match 
     */
    static removeByArray(array: any[], match: any[]) {
        let temp = array.concat();
        for (let i = 0; i < temp.length;) {
            let value = temp[i];
            if (match.indexOf(value) >= 0) {
                temp.splice(i, 1);
            } else {
                i++;
            }
        }
        return temp;
    }

    /**
     * 移除指定索引位置的数组元素。 此函数十分高效，但会改变数组的元素次序。
     * @param array 数组。
     * @param value 待移除元素。
     */
    static fastRemoveAt<T>(array: T[], index: number) {
        const length = array.length;
        if (index < 0 || index >= length) {
            return;
        }
        array[index] = array[length - 1];
        array.length = length - 1;
    }

    /**
     * 移除首个指定的数组元素。判定元素相等时相当于于使用了 `Array.prototype.indexOf`。 此函数十分高效，但会改变数组的元素次序。
     * @param array 数组。
     * @param item 待移除元素。
     */
    static fastRemove<T>(array: T[], item: T) {
        const length = array.length;
        let index = array.indexOf(item);
        if (index >= 0) {
            array[index] = array[length - 1];
            array.length = length - 1;
        }
    }

    /** 判断两数字数组是否相同 */
    static numArrIsEqual(arr1: number[], arr2: number[]): boolean {
        if (arr1.length !== arr2.length) {
            return false;
        }
        arr1.sort((a, b) => { return a - b });
        arr2.sort((a, b) => { return a - b });
        return arr1.every((value, index) => value === arr2[index]);
    }
}

declare global {
    interface IUtil {
        arr: typeof ArrayUtil;
    }
}
c2f.utils.arr = ArrayUtil;
export { };
