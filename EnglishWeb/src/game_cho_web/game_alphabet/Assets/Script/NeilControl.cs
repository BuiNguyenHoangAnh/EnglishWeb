using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NeilControl : MonoBehaviour {

	bool beCount =false;
	public string letterName;
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}

	/// <summary>
	/// Sent each frame where a collider on another object is touching
	/// this object's collider (2D physics only).
	/// </summary>
	/// <param name="other">The Collision2D data associated with this collision.</param>
	void OnCollisionStay2D(Collision2D other)
	{
		switch(other.gameObject.tag)
		{
			case "letter":
			{
				if(other.gameObject.GetComponent<LetterControl>().letterName==letterName)
				{
					if(beCount==false)
					{
						this.transform.parent.GetComponent<NeilManager>().Add();
						beCount=true;
					}
				}
				break;
			}
			default:
			{
				break;
			}

		}
	}

	/// <summary>
	/// Sent when a collider on another object stops touching this
	/// object's collider (2D physics only).
	/// </summary>
	/// <param name="other">The Collision2D data associated with this collision.</param>
	void OnCollisionExit2D(Collision2D other)
	{
		switch(other.gameObject.tag)
		{
			case "letter":
			{
				if(other.gameObject.GetComponent<LetterControl>().letterName==letterName)
				{
					if(beCount==true)
					{
						this.transform.parent.GetComponent<NeilManager>().Subtract();
						beCount=false;

					}
				}
				break;
			}
			default:
			{
				break;
			}

		}
	}
}
