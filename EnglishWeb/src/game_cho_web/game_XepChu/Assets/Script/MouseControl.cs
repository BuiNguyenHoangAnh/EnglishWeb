using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MouseControl : MonoBehaviour {

	RaycastHit2D hit;
	public GameObject takenOverObj =null;

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		takeover();
	}

	void takeover()
	{
		hit = Physics2D.Raycast(
			Camera.main.ScreenToWorldPoint(Input.mousePosition), 
			Vector3.forward,
			100);

		if( Input.GetMouseButton(0)==true)
		{
			if(takenOverObj == null)
			{
				if(hit.collider!=null)
				{
					switch(hit.transform.gameObject.tag.Trim())
					{
						case "letter":
						{
							takenOverObj = hit.transform.gameObject;
							break;
						}
						default:
						{
							break;
						}
					}
				}
			}
			else
			{
				//takenOverObj = hit.transform.gameObject;
				float x = Camera.main.ScreenToWorldPoint(Input.mousePosition).x;
				float y = Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
				takenOverObj.transform.position = new Vector3(x,y,0);
				//takenOverObj.transform.position
			}
		}
		else
		{
			if(takenOverObj!=null)
			{
				takenOverObj.GetComponent<LetterControl>().neil();
				takenOverObj = null;
			}
		}

	}
}
