using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LetterControl : MonoBehaviour {

	public string letterName;

	bool beReset = false;
	Vector3 defaultPosition;
	bool resultPosition = false;
	Vector3 neilPosition;

	// Use this for initialization
	void Start () {
		defaultPosition =  this.transform.position;
		letterName=this.gameObject.name;
	}
	
	// Update is called once per frame
	void Update () {
		setResetState();
	}
	public void setResetState()
	{
		if(beReset==true)
		{
			float vecx = defaultPosition.x - this.transform.position.x;
			float vecy = defaultPosition.y - this.transform.position.y;
			this.transform.Translate(new Vector3(vecx,vecy,0)* Time.deltaTime*5);
			if((int)vecx==0 && (int)vecy==0)
			{
				this.transform.position = defaultPosition;
				beReset=false;
			}
		}
	}

	public void neil()
	{
		if(resultPosition==true)
		{
			this.transform.position = neilPosition;
		}
		else
		{
			beReset=true;
		}
	}

	public void SetDefaultPosition(Vector3 newPosition)
	{
		defaultPosition = newPosition;
	}

	protected void OnCollisionEnter2D(Collision2D other)
	{
		switch(other.gameObject.tag)
		{
			case "neil":
			{
				if(other.gameObject.GetComponent<NeilControl>().letterName==this.name)
				{
					resultPosition =true;
					neilPosition =  other.gameObject.transform.position;
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
			case "neil":
			{
				if(other.gameObject.GetComponent<NeilControl>().letterName==this.name)
				{
					resultPosition =false;
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
