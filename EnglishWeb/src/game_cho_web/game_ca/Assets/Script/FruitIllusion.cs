using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FruitIllusion : MonoBehaviour {

	public GameObject Destination;
	public bool toDes = false;
	public float dis=0;

	public float newDis;
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		if(toDes ==true)
		{
			this.transform.parent= null;
			Vector3 direction =  (Destination.transform.position - this.transform.position); 
			this.transform.Translate(direction * 0.05f);
			newDis = Mathf.Sqrt(
				Mathf.Pow((Destination.transform.position.x - this.transform.position.x),2) +
				Mathf.Pow((Destination.transform.position.y - this.transform.position.y),2));
			if(newDis < 1)
			{
				GameObject.Find("GameManager").GetComponent<Manager>().Restart();
				//Debug.Log("plus "+ ((int)(oldDis*1000000)).ToString()+" "+((int)(newDis*1000000)).ToString());
				Destroy(this.gameObject);
			}
		}
	}
}
