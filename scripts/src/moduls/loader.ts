/**
 * Загрузка файлов из папки assets
 */
export function LoadTexture(game:Phaser.Game):void
{
	game.load.spritesheet("button", "assets/buttonLevel.png",216,319);
	game.load.spritesheet('buttonGame', 'assets/buttonGame2.png',272,115);
	game.load.spritesheet('buttonEnd', 'assets/buttonEnd.png',406,76);

	game.load.spritesheet("figura", "assets/figurs.png",100,100,6);
	game.load.spritesheet("level1_anim", "assets/level1_anim.png",497,398,6);
	game.load.spritesheet("level2_anim", "assets/level2_anim.png",205,252,6);
	game.load.spritesheet("level3_anim", "assets/level3_anim.png",582,493,6);
	game.load.spritesheet("mouth", "assets/anim_mauth.png",245,59,11);

	game.load.image("level1", "assets/level1_00.png");
	game.load.image("level2", "assets/level2_0.png");
	game.load.image("level3", "assets/level3_0.png");

	game.load.image("bar", "assets/bar.jpg");
	game.load.image("obloko", "assets/obloko.png");
}