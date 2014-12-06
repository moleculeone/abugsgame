using UnityEngine;
using System.Collections;

public class GameOver : MonoBehaviour {

	
	void OnTriggerEnter () {


		Application.LoadLevel("NightScene");
		Debug.Log ("Yeee!!! You have found your resting place for tonight. Get enough rest cos you got work tommorrow");
		
	}

	
	}

