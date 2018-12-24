using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LetterControl : MonoBehaviour {

	bool beReset = false;
	Vector3 defaultPosition;
	public bool resultPosition = false;
	Vector3 neilPosition;
	public string LetterName;

	// Use this for initialization
	void Start () {
		defaultPosition =  this.transform.position;
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
				if(other.gameObject.GetComponent<NeilControl>().letterName==LetterName&&
				other.gameObject.GetComponent<NeilControl>().owner==false)
				{
					resultPosition =true;
					neilPosition =  other.gameObject.transform.position;
					other.gameObject.GetComponent<NeilControl>().owner=true;
					//SetDefaultPosition(neilPosition);

					other.gameObject.GetComponent<NeilControl>().addCount();
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
				if(other.gameObject.GetComponent<NeilControl>().letterName==LetterName)
				{
					resultPosition =false;
					other.gameObject.GetComponent<NeilControl>().owner=false;
					other.gameObject.GetComponent<NeilControl>().subtractCount();
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
