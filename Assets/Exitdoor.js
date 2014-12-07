#pragma strict

function Start () {

}

function OnTriggerEnter (info : Collider) 
{
	if (info.name=="Player")
	{

		 if (transform.tag.EndsWith(RandomDoor.doornumber)==true)
		 {
	
			Application.LoadLevel("NightScene");
		
		}
	
	}


}