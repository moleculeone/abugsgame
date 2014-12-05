#pragma strict
import UnityEngine.UI;

var obText1: Text;
var obText2: Text;
var bridge: GameObject;
var ob1: GameObject;
var ob2: GameObject;
//static var showPanel:boolean=false;


public var blocked : AudioClip;

function Start () {
}

function Update () {


}

function OnTriggerEnter (info : Collider) 
    {
    		audio.clip = blocked;
    		audio.Play();
		
    	if (info.tag=="tool2")
    	{
    	bridge.transform.position.y = (-0.23);
    	ob2.SetActive(false);
    	//GameMaster.objectNumber = 2;
    	//toolText2.enabled = true;
    	yield WaitForSeconds(3);
    	//toolText2.enabled = false;
    	
    	}
    	
   }