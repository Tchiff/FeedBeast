/**
 * Модуль сборки игровых элементов
 */

import Creater from "./createElements";

let Creat = new Creater();

/**
 * Создание игровых кнопок
 * 
 * @param butFrame массив со значениями кадров кнопок
 * @param group группа к которой принадлежат кнопки
 * @param callback функция которая запускается при нажатии на кнопку
 */
export function createGameButtom(butFrame: number[],game:Phaser.Game,group:Phaser.Group,callback?:Function|undefined):void
{   
    Creat.createButton(game,group,game.world.centerX-320,585,"buttonGame",butFrame[0],butFrame[0]+6,butFrame[0]+12,callback);
    Creat.createButton(game,group,game.world.centerX,585,"buttonGame",butFrame[1],butFrame[1]+6,butFrame[1]+12,callback);
    Creat.createButton(game,group,game.world.centerX+320,585,"buttonGame",butFrame[2],butFrame[2]+6,butFrame[2]+12,callback);
}

/**
 * создание игрового меню
 * 
 * @param group группа к которой принадлежат кнопки
 * @param style стиль текста в игровом меню
 * @param selectLevel функция которая запускается при нажатии на кнопку
 */
export function initStartSost(game:Phaser.Game,group:Phaser.Group,style:any,selectLevel?:Function|undefined):void
{
    //инициализация начального состояния
    Creat.createSprite(game,group,game.world.centerX-320,game.world.centerY,"level1",true,0.7);
    Creat.createButton(game,group,game.world.centerX-320,game.world.centerY,"button",0,1,2,selectLevel,"level1_anim");

    Creat.createSprite(game,group,game.world.centerX,game.world.centerY,"level2",true);
    Creat.createButton(game,group,game.world.centerX,game.world.centerY,"button",0,1,2,selectLevel,"level2_anim");
    
    Creat.createSprite(game,group,game.world.centerX+320,game.world.centerY,"level3",true,0.3);
    Creat.createButton(game,group,game.world.centerX+320,game.world.centerY,"button",0,1,2,selectLevel,"level3_anim");

    let txt = Creat.createText(game,group,270,game.world.centerY+220,"ВЫБЕРИ ЗВЕРЯ",style);
    txt.setShadow(-0.3, -0.3, "rgba(0, 0, 0, 0.5)", 3);
}