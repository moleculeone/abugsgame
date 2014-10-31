#pragma strict

static var objectNumber:int = 0;
var bomb : Texture;
var Stone : Texture;
var Spray : Texture;



var offsetY : float = 5;
var offsetX : float = 5;
var sizeX : float = 150;
var sizeY : float = 100;


function OnGUI() {

		var text : String ="";
		text="<size=14><color=cyan><b>Level 1</b></color></size> \r\n";
		
		
		var Bammo : String ="";
		Bammo="<size=20><color=cyan><b>"+ WeaponControl.Bomblimit + "</b></color></size> \r\n";		
		
		var Stammo : String ="";
		Stammo="<size=20><color=Yellow><b>"+ WeaponControl.StoneCount + "</b></color></size> \r\n";
		
		var Sammo : String ="";
		Sammo="<size=20><color=gray><b>"+ WeaponControl.Spraylimit + "</b></color></size> \r\n";
		
		
		GUI.BeginGroup (new Rect(offsetX, offsetY, sizeX, sizeY),text );
		GUI.Label(new Rect(0,20, 40, 40),bomb);
		GUI.Label(new Rect(40,25, 40, 40),Bammo);
		
		GUI.Label(new Rect(0,60, 40, 40),Spray);
		GUI.Label(new Rect(40,60, 40, 40),Sammo);
		
		GUI.Label(new Rect(0,100, 40, 40),Stone);
		GUI.Label(new Rect(40,100, 40, 40),Stammo);
		     GUI.EndGroup ();
		GUI.skin.box.alignment = TextAnchor.UpperLeft;
	}