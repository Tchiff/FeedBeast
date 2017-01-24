/**
 * Модуль рандомных чисел
 */


/**
 * получить рандомное целое число
 * 
 * @param min минимальное (включительно)
 * @param max максимальное (включительно)
 * @returns рандомное число в заданном диапазоне
 */
export function getRandomInt(min:number, max:number):number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * получит рандомное число за исключением 1го или 2х чисел
 * 
 * @param min минимальное (включительно)
 * @param max максимальное (включительно)
 * @param excepNum1 исключаемое число
 * @param excepNum2 второе исключаемое число
 * @returns рандомное число в заданном диапазоне и с заданными исключениями
 */
export function getRandomExcept(min:number, max:number, excepNum1:number,excepNum2?:number|null):number
{
    let rand:number;
    for(let i = 0;i<100;i++){
        rand = getRandomInt(min,max);
        if(rand!=excepNum1 && (rand!=excepNum2 || excepNum2==null))
            return rand;
    }
    return 0;
}
/**
 * Получение массива с тремя разными рандомными числами
 * 
 * @returns массив с тремя рандомными разными числами
 */
export function getRandArrey():number[]
{
    let butFrame : number[] = [];
    butFrame[0] = getRandomInt(0,5);
    butFrame[1] = getRandomExcept(0,5,butFrame[0]);
    butFrame[2] = getRandomExcept(0,5,butFrame[0],butFrame[1]);

    return butFrame;
}