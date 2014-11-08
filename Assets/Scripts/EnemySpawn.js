#pragma strict
var enemy :  Transform;
var spawnlimit= 5;
private var CurEnemies=0;
var waitforsec:int= 10;

function Start () {
	
	
		InvokeRepeating("spawn", 10, waitforsec);
}

function Update () {

	
	
}

function spawn()
{
	if (CurEnemies< spawnlimit)
		{
		var pos =transform.position;
		pos= Vector3(transform.position.x,1,transform.position.z);
		var enemy = Instantiate(enemy,pos, transform.rotation );
	
		CurEnemies+=1;
		//enemy.rigidbody.AddForce(enemy.transform.forward * 1.0);
	
		}
}