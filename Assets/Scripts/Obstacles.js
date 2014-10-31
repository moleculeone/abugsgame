#pragma strict
var player : Transform;
var dist:float;
var showGUI:boolean = false;

function Start () {

}

function Update () {


}


function OnTriggerEnter(info:Collider){

showGUI= true;
OnGUI();
if(GameMaster.objectNumber != 1){
yield WaitForSeconds(2);
}
showGUI= false;



if(info.gameObject.tag=="Player" && GameMaster.objectNumber == 1){

Destroy(gameObject);




}

}



function OnGUI(){

if(showGUI){

GUI.Label(Rect (Screen.width/2-50,Screen.height/2+50,400,200), "Find axe to cut");
}
}