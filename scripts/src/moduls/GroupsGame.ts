/**
 * Модуль групп объектов
 */
class Group{
    group : Phaser.Group;
    /**
     * инициализация группы
     */
    public initGroup (game : Phaser.Game):void
    {
        this.group = game.add.group();        
    }
    /**
     * удаление группы
     */
    public removeGroup ():void
    {
        this.group.destroy();      
    }
    /**
     * получить группу
     * 
     * @returns группа
     */
    public getGroup():Phaser.Group
    {
        return this.group;
    }
}

export{
    Group as default,
} 