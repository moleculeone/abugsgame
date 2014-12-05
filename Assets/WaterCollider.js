#pragma strict
private var counter = 0;

static var inWater = false;

function Start () {

}


function Update () {


if (inWater == true)
	{
	counter++;
	
	Healthbar.HealthStatus+=(0.05);
	
	}
}


function OnTriggerEnter (info : Collider) 
{
	if (info.name == "Player")
	{
	inWater = true;

	}
}    


function OnTriggerExit (info : Collider) 
{
	if (info.name == "Player")
	{
	inWater = false;
	}
}    