#pragma strict
private var counter = 0;

private var inWater = false;

var timer : float = 0.0;
var timerMax : float = 5.0;
	

function Start () {

}


function Update () {

if (inWater == true)
	{
	counter++;
	
	Healthbar.HealthStatus+=(0.2);
	
	Debug.Log(Time.deltaTime + "    " + counter);
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
inWater = false;
}    