/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts"/>

import {LoadTexture} from './moduls/loader';
import{initStartSost} from "./moduls/constructGame";
import Creater from "./moduls/createElements";
import Param from "./moduls/paramsGame";

//стили текста
let style = { font: "bold 56px", fill: "#FF9933", boundsAlignH: "center", boundsAlignV: "middle" };
let style2 = { font: "bold 800px", fill: "#ffcd38", boundsAlignH: "center", boundsAlignV: "middle" };

/**
 * конструктор класса Phaser.Game
 */
var game = new Phaser.Game(1280, 720, Phaser.AUTO, "content", { 
    preload: ()=>{
        LoadTexture(game);
    }, 

    create: ()=>{
        game.physics.startSystem(Phaser.Physics.ARCADE);// включаем аркадную физику
        game.stage.backgroundColor = "#FFCC33";
        Parametrs.groupSost.initGroup(game);

        //инициализация начального состояния
        initStartSost(game, Parametrs.groupSost.getGroup(),style,selectLevel);
    }, 

    update: ()=>{
        //уменьшение шкалы
        if(Parametrs.Bar.isActiv())
        {
            Parametrs.Bar.subInSecond();
            Parametrs.Bar.updateBar();
        }
        //конроль столкновения со ртом
        if(Parametrs.getMouth()!=undefined)
            game.physics.arcade.overlap(Parametrs.getMouth(), Parametrs.groupFigure.getGroup(), (obj1:any, obj2:any)=>{
                obj2.kill();//удаляем фигуру при столкновении со ртом
            },
            undefined, game);
    }
});

/**
 * класс модуля createElements
 */
let Creat = new Creater();
/**
 * класс модуля paramsGame
 */
let Parametrs = new Param(game);

/**
 * Действие кнопки перехода в состояние игры
 * Загрузка и расстановка игровых объектов
 */
function  selectLevel (button : Phaser.Button):void
{
    let tegImageAnimal:string = button.name;//имя кнопки соответствует имени загружаемого изображения

    Parametrs.groupSost.removeGroup();

    Parametrs.groupSost.initGroup(game);
    Parametrs.groupFigure.initGroup(game);
    Parametrs.groupBut.initGroup(game);

    Parametrs.initGameElements(tegImageAnimal,style2);
    Parametrs.initGame(addValueBar);

    Parametrs.setAnim();
    game.physics.enable(Parametrs.getMouth(), Phaser.Physics.ARCADE);

    Parametrs.setPositionElements(tegImageAnimal);
}

/**
 * Действие игровой кнопки
 * Инициализация параметров шкалы
 */
function addValueBar(button : Phaser.Button):void
{
    let num = button.frame as number % 6;   //получаем номер фигуры у кнопки

    if(Parametrs.isFrameFigur() == num)    //нажата верная кнопка
    {
        Parametrs.Bar.addValue();
        if(Parametrs.Bar.isNewStage())
            Parametrs.newStage();
        Parametrs.Bar.updateBar();
        
        Parametrs.groupBut.removeGroup();

        if(Parametrs.getStage()==6)    //уровень пройден
        {
            Creat.createButton(game,Parametrs.groupSost.getGroup(),game.world.centerX,585,"buttonEnd",0,1,2,ResetGame);
            Parametrs.groupFigure.removeGroup();
        }
        else
        {
            let figur:any = Creat.createFigure(game,Parametrs.groupFigure.getGroup(),button.x-100,button.y,"figura",num);
            game.physics.enable(figur, Phaser.Physics.ARCADE);
            game.add.tween(figur.body).to( {x: Parametrs.getMouth().x-(Parametrs.getMouth().width/2), y: Parametrs.getMouth().y }, 350, Phaser.Easing.Linear.None, true);
            Parametrs.playAmim();

            Parametrs.groupBut.initGroup(game);
            Parametrs.initGame(addValueBar);
        }
    }
    else // нажата не верная кнопка
    {
        Parametrs.Bar.subValue();
        Parametrs.Bar.updateBar();
    }
}

/**
 * Действие кнопки выхода
 * Сброс параметров и перезапуск
 */
function ResetGame():void
{
    Parametrs.ResetParam();
    Parametrs.groupSost.removeGroup();
    Parametrs.groupSost.initGroup(game);
    initStartSost(game,Parametrs.groupSost.getGroup(),style,selectLevel);
}
