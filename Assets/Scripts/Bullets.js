#pragma strict

var bullet:Transform;
function Start () {

}

function Update () {


	if (Input.GetMouseButtonDown(0)){

	var shoot = Instantiate(bullet, transform.position, transform.rotation);
    shoot.rigidbody.AddForce(shoot.transform.forward * 500.0);
	//clone.velocity = transform.TransformDirection (Vector3.forward * 10);
	}
	
	}