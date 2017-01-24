/**
 * Модуль игровых параметров
 */

import{createGameButtom} from "./constructGame";
import{getRandomInt,getRandArrey} from "./randomNum";
import BarControl from "./barControl";
import Creater from "./createElements";
import Groups from "./GroupsGame";

//классы модулей
let Creat = new Creater();

//игровые элементы

/**
 * спрайт зверя
 */
let animal : Phaser.Sprite;
/**
 * анимированный рот
 */
let mouth : Phaser.Sprite;
/**
 * спрайт фигуры в облаке
 */
let figur : Phaser.Sprite|undefined;
/**
 * текст номера стадии
 */
let textStage : Phaser.Text;

/**
 * анимация рта
 */
let anim : Phaser.Animation;

/**
 * номер кадра анимации зверя
 */
let fram:number;
/**
 * номер стадии
 */
let stage : number;

class ParamGame
{
    game : Phaser.Game;
    /**
     * группа для последующего удаления объектов
     */
    public groupSost = new Groups();
    /**
     * группа для меняющихся кнопок
     */
    public groupBut = new Groups();
    /**
     * группа для временных объектов в игре
     */
    public groupFigure = new Groups();
    /**
     * объект класса шкалы
     */
    public Bar = new BarControl();

    constructor(game : Phaser.Game)
    {
        this.game = game;
        this.ResetParam();
    }
    /**
     * сброс параметров
     */
    public ResetParam():void
    {
        fram = 0;
        stage  = 1;
        this.Bar.resetBar();
        figur = undefined;
    }
    /**
     * переход на новую волну
     */
    public newStage():void
    {
        stage++;
        textStage.text = stage.toString();
        this.Bar.nullValue();
        this.Bar.UpdateSetValueBar(0.13);
        this.changeFrame();
    }
    /**
     * инициализация игровых параметров
     * 
     * @param callback функция для игровых кнопок
     */
    public initGame(callback?:Function|undefined):void
    {
        let arr: number[] = getRandArrey();
        if(figur==undefined)
            figur = Creat.createFigure(this.game,this.groupFigure.getGroup(),1106,137,"figura",arr[getRandomInt(0,2)]);
        else
            figur.frame = arr[getRandomInt(0,2)];

        createGameButtom(arr,this.game,this.groupBut.getGroup(),callback);
    }
    /**
     * инициализация игровых элементов
     * 
     * @param tegImageAnimal имя загружаемого спрайта для зверя
     * @param style2 стиль для текста стадии
     */
    public initGameElements(tegImageAnimal:string, style2 : any):void
    {
        textStage = Creat.createText(this.game,this.groupSost.getGroup(),this.game.world.centerX-350,this.game.world.centerY-500,stage.toString(),style2);
        textStage.setShadow(-0.3, -0.3, "rgba(1, 1, 1, 0.5)", 3);

        animal = Creat.createSprite(this.game,this.groupSost.getGroup(),this.game.world.centerX,this.game.world.centerY-80,tegImageAnimal,true);
        mouth = Creat.createSprite(this.game,this.groupSost.getGroup(),this.game.world.centerX,this.game.world.centerY-95,"mouth",true);
        Creat.createSprite(this.game,this.groupFigure.getGroup(),820,0,"obloko",false);

        this.Bar.setBar(Creat.createSprite(this.game,this.groupSost.getGroup(),0,720-34,"bar",false,0,1));

        anim = mouth.animations.add("eat");
        this.game.physics.enable(mouth, Phaser.Physics.ARCADE);
    }
    /**
     * Расстановка игровых элементов
     * 
     * @param tegImageAnimal имя загруженного спрайта зверя
     */
    public setPositionElements(tegImageAnimal:string):void
    {
        switch (tegImageAnimal)
        {
        case "level1_anim":
            animal.scale.set(0.8);
            this.correctPosition(mouth,0.4,mouth.x-98);
            break;
        case "level2_anim":
            animal.scale.set(1.5);
            this.correctPosition(mouth,0.35,mouth.x-27,mouth.y-52);
            break;
        default:
            animal.scale.set(0.7);
            this.correctPosition(mouth,0.9,mouth.x+7,mouth.y+80);
            break;
        } 
    }
    /**
     * запуск анимации
     */
    public playAmim():void
    {
        anim.play(15, false);
    }
    /**
     * назначение анимации
     */
    public setAnim():void
    {
        anim = mouth.animations.add("eat");
    }
    /**
     * получение значения стадии
     */
    public getStage():number
    {
        return stage;
    }
    /**
     * получить спрайт рта 
     */
    public getMouth():Phaser.Sprite
    {
        return mouth;
    }
    /**
     * получить значение кадра фигуры
     */
    public isFrameFigur():number
    {
        if (figur!=undefined)
            return figur.frame as number;
        return 0;
    }
    /**
     * изменение параметров объекта
     * 
     * @param obj обект
     * @param scale масштаб
     * @param x координата
     * @param y координата
     */
    correctPosition(obj:Phaser.Sprite,scale:number,x?:number,y?:number):void
    {
        obj.scale.set(scale);

        if(x)
            obj.x = x;
        if(y)
            obj.y = y;
    }
    /**
     * изменение кадра зверя
     */
    changeFrame():void
    {
        if(fram<5)
            fram+=1;
        animal.frame = fram;
    }
}

export{
    ParamGame as default,
}