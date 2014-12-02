#pragma strict
var walkSpeed = 2.0;
var TurnSpeed = 10.0;
var directiony;
var directionx;
private var rota:float;
private var trans:float;
function Start () {

}

function Update () {

			animation.Play("idle");
			rota  = Input.GetAxis("Horizontal")* TurnSpeed;
			trans = Input.GetAxis("Vertical");
			
      		if (Input.GetAxisRaw("Horizontal"))
      		{
      		        	
   				transform.Rotate(0, rota,0);
      		}
      		if (Input.GetAxisRaw("Vertical"))
      		{
      			animation.CrossFade("walk");
      			if (trans == 1)      			
      				transform.Translate (Vector3.forward * Time.deltaTime*walkSpeed);
      			else if (trans == -1)      
      				transform.Translate (Vector3.back * Time.deltaTime*walkSpeed);
      		}
}