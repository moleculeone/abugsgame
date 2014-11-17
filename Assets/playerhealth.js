#pragma strict

public var dieanimation: AnimationClip;
var check:int = 1;

function Start () {

}

function Update () {

if (Healthbar.HealthStatus >100){

if (check==1){
check +=1;
dieani();


}
}
}

function dieani(){


animation.Play("player_die");

//yield WaitForSeconds(2);

Destroy(gameObject, 2);

}

