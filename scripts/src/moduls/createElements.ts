/**
 * Модуль создания отдельных элементов игры
 */

class Creater
{
    /**
     * Создание кнопки
     * 
     * @param group группа к которой принадлежит кнопка
     * @param x координата
     * @param y координата
     * @param teg имя загружаемого спрайта для кнопки
     * @param defFrame кадр обычного состояния
     * @param overFrame кадр при наведении мыши
     * @param downFrame кадр при нажатии
     * @param callback функция которая запускается при нажатии на кнопку
     * @param name имя кнопки
     */
    public createButton(game:Phaser.Game, group:Phaser.Group, x:number, y:number, teg:string,
                            defFrame:number, overFrame:number, downFrame:number,
                            callback?:Function|undefined, name?:string|undefined):void
    {
        let button = game.add.button(x, y, teg, callback, game,overFrame,defFrame,downFrame);
        button.anchor.set(0.5);
        if(name!=undefined)
            button.name = name;
        group.add(button);
    }
    /**
     * Создание картинки
     * 
     * @param group группа к которой принадлежит картинка
     * @param x координата
     * @param y координата
     * @param teg имя загружаемого спрайта для картинки
     * @param center переместить ли якорь картинки к центру
     * @param scale пропорциональный масштаб или горизонтальный
     * @param scaleH вертикальный масштаб
     * @returns объект класса Phaser.Sprite
     */
    public createSprite(game:Phaser.Game, group:Phaser.Group,x:number,y:number,teg:string, center:boolean, scale?:number|undefined,scaleH?:number|undefined):Phaser.Sprite
    {
        let img = game.add.sprite(x, y, teg);
        if(center)
            img.anchor.setTo(0.5, 0.5);
        if(scale!=undefined)
            img.scale.setTo(scale, scaleH!=undefined?scaleH:scale);
        group.add(img);
        return img;
    }
    /**
     * Создание текста
     * 
     * @param group группа к которой принадлежит текст
     * @param x координата
     * @param y координата
     * @param txt текст
     * @param style стиль текста
     * @returns объект класса Phaser.Text
     */
    public createText(game:Phaser.Game,group:Phaser.Group, x:number, y:number, txt:string, style:any):Phaser.Text
    {
        let text = game.add.text(x, y, txt, style);
        group.add(text);
        return text;
    }
    /**
     * Создание изображения с заданием кадра анимации
     * 
     * @param group группа к которой принадлежит картинка
     * @param x координата
     * @param y координата
     * @param teg имя загружаемого спрайта для картинки
     * @param frame начальный кадр изображения
     * @returns объект класса Phaser.Sprite
     */
    public createFigure(game:Phaser.Game,group:Phaser.Group,x:number,y:number,teg:string,frame:number):Phaser.Sprite
    {
        let figur = game.add.sprite(x, y, teg, frame);
        group.add(figur);
        figur.anchor.set(0.5);
        return figur;
    }
}

/**
 * Модуль
 */
export {
	Creater as default,
};