/**
 * Модуль шкалы прогресса
 */

/**
 * максимальное значение шкалы
 */
const maxBar : number = 100;
/**
 * Скорость уменьшения шкалы
 */
const speedBar : number = 0.2;

/**
 * Класс шкалы
 */
class BarControl{
    /**
     * Настоящее знаение шкалы
     */
    valueBar : number;
    /**
     * Значение прибавления к шкале
     */
    setValueBar : number;
    /**
     * спрайт шкалы
     */
    bar : any;

    public constructor()
    {
        this.resetBar();
    }

    /**
     * назначение начальных параметров шкалы
     */
    public resetBar():void
    {
        this.valueBar = 0;
        this.setValueBar = 35;
    }
    /**
     * загружен ли спрайт
     */
    public isActiv():boolean
    {
        return this.bar!=undefined?true:false;
    }

    /**
     * назначение спрайта
     * 
     * @param sprite скпрайт шкалы
     */
    public setBar(sprite:any):void
    {
        this.bar = sprite;
    }
    /**
     * прирощение шкалы
     */
    public addValue():void
    {
        this.valueBar += this.setValueBar;
    }
    /**
     * резкое снижение шкалы
     */
    public subValue():void
    {
        let tmp = this.valueBar - this.setValueBar/2;
        this.valueBar = tmp<0 ? 0 : tmp;
    }
    /**
     * обнуление шкалы
     */
    public nullValue():void
    {
        this.valueBar = 0;
    }
    /**
     * Заполнилась ли шкала
     */
    public isNewStage():boolean
    {
        return this.valueBar>=maxBar
    }
    /** 
     * постепенное уменьшение шкалы
    */
    public subInSecond():void
    {   
        if(this.valueBar > 0 && this.valueBar < maxBar)
        {
            let tmp = this.valueBar-speedBar;
            this.valueBar = tmp<0 ? 0 : tmp;
        }
    }
    /**
     * перерисовка спрайта шкалы
     */
    public updateBar():void
    {
        this.bar.scale.setTo(this.valueBar/maxBar,1);
    }
    /**
     * уменьшение параметра (setValueBar) прибавления к шкале
     * 
     * @param prosent процент в десятичных долях от текущего значения setValueBar
     */
    public UpdateSetValueBar(prosent:number):void
    {
        this.setValueBar = this.setValueBar - this.setValueBar*prosent;
    }
}

export{
    BarControl as default,
};