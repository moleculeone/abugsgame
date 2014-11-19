#pragma strict
import UnityEngine.UI;

var obText1: Text;
var obText2: Text;
var bridge: GameObject;
var ob1: GameObject;
var ob2: GameObject;
var toolText1: Text;
var toolText2: Text;
var endLevelPanel: GameObject;
//static var showPanel:boolean=false;


public var blocked : AudioClip;

function Start () {
obText1.enabled = false;
obText2.enabled = false;
toolText1.enabled = false;
toolText2.enabled = false;
endLevelPanel.SetActive(false);
}

function Update () {




}

function OnTriggerEnter (info : Collider) 
    {
    		audio.clip = blocked;
    		audio.Play();
	
    	if (info.tag=="ob1" && GameMaster.objectNumber != 1)
    	{
    		obText1.enabled = true;
    		yield WaitForSeconds(2);
    		obText1.enabled = false;
    		
    	}
    	
    	if (info.tag=="ob2" && GameMaster.objectNumber != 2)
    	{
    		obText2.enabled = true;
    		yield WaitForSeconds(2);
    		obText2.enabled = false;
    	}
    	
    	if (info.tag=="ob1" && GameMaster.objectNumber == 1)
    	{
    		ob1.SetActive(false);
    	}
    	
    	if (info.tag=="ob2" && GameMaster.objectNumber == 2)
    	{
    		bridge.transform.position.y = 0.5;
    		ob2.SetActive(false);
    	}
    	
    	
    	
    	if (info.tag=="tool1")
    	{
    		GameMaster.objectNumber =1;
    		toolText1.enabled = true;
    		yield WaitForSeconds(3);
    		toolText1.enabled = false;
    		
    	}
    	
    	
    	if (info.tag=="tool2")
    	{
    	GameMaster.objectNumber =2;
    	toolText2.enabled = true;
    	yield WaitForSeconds(3);
    	toolText2.enabled = false;
    	
    	
    	}
    	
    	if (info.tag=="tent")
    	{
    		endLevelPanel.SetActive(true);
    		Screen.showCursor = true;
    		
    	}
    	
    	 	
    	
      	
   }
   
   
function Level2(){

endLevelPanel.SetActive(false);

Application.LoadLevel("Level3a");
}