using UnityEngine;
using System.Collections;

public class NewGame : MonoBehaviour {

	public void StartGame(int Levelnum){

		Application.LoadLevel(Levelnum);
	}
}
