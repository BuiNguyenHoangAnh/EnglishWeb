using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class NeilManager : MonoBehaviour {

	public int count = 0;
	public Button nextBtn;

	// Use this for initialization
	void Start () {
		nextBtn.enabled=false;
	}
	
	// Update is called once per frame
	void Update () {
		if(this.transform.childCount == count)
		{
			//Debug.Log("Change Scene");
			count=0;
			//ChangeScene();
			nextBtn.enabled=true;
		}
	}

	public void ChangeScene()
	{
		int i= Random.Range(0,32);
		SceneManager.LoadScene(i);
	}
}
