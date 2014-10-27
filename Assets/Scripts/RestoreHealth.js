#pragma strict

var HealthRestored:int=20;
function Start () {

}

function Update () {

}
  function OnTriggerEnter (info : Collider) 
    {
	
    	if (info.tag=="Player")
    	{
    	
    		Healthbar.HealthStatus-=HealthRestored;
    		Destroy(transform.gameObject,0);
    	}
    	

    }