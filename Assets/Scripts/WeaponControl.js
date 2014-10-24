#pragma strict
var spray :  Transform;
var bomb : GameObject;

internal var fireDelay : float;
var Bspeed : float =10;
var Bdistance : float = 5;
var roteOffire : float = 1;
var Bomblimit : int= 5;
var Spraylimit : int = 5;

function Start () {

}

function Update () {
	var clone : GameObject;
		/// play spray effect
		if(Input.GetKey(KeyCode.W))
		{
			if (Spraylimit>0)
			{
				if (GameObject.FindWithTag("spray")==null)
				{
					var pieceRotation = Quaternion.AngleAxis(20, Vector3.up);
					var effect = Instantiate(spray,transform.position, transform.rotation);
					Destroy(effect.gameObject, 3);
					Spraylimit=Spraylimit-1;
				}
			}
		}
		
	
		
			if(Input.GetKey(KeyCode.D) && Time.time > fireDelay)
			{
				//limit bomb in a level
				if (Bomblimit>0)
				{
					fireDelay = Time.time + roteOffire;
					clone  = Instantiate (bomb, transform.position, transform.rotation);
					clone.rigidbody.velocity = transform.TransformDirection(Vector3 (0,Bdistance,Bspeed));
					//Physics.IgnoreCollision(clone.collider, transform.root.collider);				
					Bomblimit=Bomblimit-1;
			
				}
			}
		
	

		
}
