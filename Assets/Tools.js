#pragma strict
var player : Transform;
var dist:float;

function Start () {

}

function Update () {



}

function OnTriggerEnter(info:Collider){

if(info.gameObject.tag=="Player"){

GameMaster.objectNumber = 1;
Debug.Log(GameMaster.objectNumber);
Destroy(gameObject);

}

}