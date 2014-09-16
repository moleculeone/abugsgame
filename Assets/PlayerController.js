#pragma strict

var movementSpeed:float = 5;
var rotationSpeed:float = 10;

function Start () {

}

function Update () {


transform.position.x += movementSpeed * Input.GetAxis("Horizontal") * Time.deltaTime;

/*if(Input.GetKey(KeyCode.X)){
transform.rotation.y += rotationSpeed * Time.deltaTime;
}

if(Input.GetKey(KeyCode.Z)){
transform.rotation.y -= rotationSpeed * Time.deltaTime;
}*/

if(Input.GetKey(KeyCode.UpArrow)){
transform.position.z += movementSpeed * Time.deltaTime;
}

if(Input.GetKey(KeyCode.DownArrow)){
transform.position.z -= movementSpeed * Time.deltaTime;
}

if(Input.GetKey(KeyCode.Space)){
transform.position.y += movementSpeed * Time.deltaTime;
}


}