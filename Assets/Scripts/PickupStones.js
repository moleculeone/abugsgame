#pragma strict


 function OnTriggerEnter (info : Collider) 
    {
	
    	if (info.tag=="Player")
    	{
    		WeaponControl.StoneCount= WeaponControl.StoneCount+ 1;
    		Destroy(transform.gameObject,0);
    	
    	}
    	

    } 