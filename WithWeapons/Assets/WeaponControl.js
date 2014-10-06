#pragma strict
var spray :  Transform;
var bomb : GameObject;

internal var fireDelay : float;
var Bspeed : float =10;
var Bdistance : float = 5;
var roteOffire : float = 1;


function Start () {

}

function Update () {
	var clone : GameObject;
		/// play spray effect
		if(Input.GetKey(KeyCode.S))
		{
			if (GameObject.FindWithTag("spray")==null)
			{
			var effect = Instantiate(spray,transform.position, transform.rotation);
			Destroy(effect.gameObject, 3);
			}
		}
		if(Input.GetKey(KeyCode.D) && Time.time > fireDelay)
		{
			
			fireDelay = Time.time + roteOffire;
			clone  = Instantiate (bomb, transform.position, transform.rotation);
			clone.rigidbody.velocity = transform.TransformDirection(Vector3 (0,Bdistance,Bspeed));
			//Physics.IgnoreCollision(clone.collider, transform.root.collider);
	
				
		}
	

		
}
