export const global: any;
declare global {

    class WordArray { }

    namespace CryptoJS {

        // SHA256 声明
        interface HashStatic {
            (message: string | WordArray, key?: string | WordArray, options?: any): WordArray;
        }
        const SHA256: HashStatic;

        namespace AES {
            export function encrypt(message: string, key: string, cfg: { iv: string, mode: mode, padding: pad }): WordArray;

            export function decrypt(text: string, key: string, cfg: { iv: string, mode: mode, padding: pad }): WordArray;
        }

        namespace enc {
            namespace Utf8 {
                export function parse(key: WordArray): string;
                export function stringify(word: WordArray): string;
            }
        }

        export enum mode {
            CBC
        }

        export enum pad {
            Pkcs7
        }
    }
}