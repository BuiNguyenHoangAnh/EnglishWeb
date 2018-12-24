using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RandomPosition : MonoBehaviour {

	// Use this for initialization
	void Start () {
		Random r = new Random();
		
		for(int i =0 ;i< this.transform.childCount;i++)
		{
			int k = Random.Range(0,this.transform.childCount);
			
			Transform K_obj = this.transform.GetChild(k);
			Transform i_obj = this.transform.GetChild(i);
			
			Vector3 o = this.transform.GetChild(k).transform.position;
			K_obj.transform.position = i_obj.transform.position;
			i_obj.transform.position = o;

			K_obj.GetComponent<LetterControl>().SetDefaultPosition(K_obj.transform.position);
			i_obj.GetComponent<LetterControl>().SetDefaultPosition(i_obj.transform.position);
		}
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
