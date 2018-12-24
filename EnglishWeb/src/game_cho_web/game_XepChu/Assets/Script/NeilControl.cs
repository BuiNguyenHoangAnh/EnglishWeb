using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NeilControl : MonoBehaviour {

	public string letterName;
	public bool owner = false;

	public bool beCounted =false;

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}

	/// <summary>
	/// Sent when an incoming collider makes contact with this object's
	/// collider (2D physics only).
	/// </summary>
	/// <param name="other">The Collision2D data associated with this collision.</param>
	void OnCollisionStay2D(Collision2D other)
	{
		switch(other.gameObject.tag)
		{
			case"letter":
			{
				if(other.gameObject.GetComponent<LetterControl>().LetterName == letterName && 
				owner == false&&
				beCounted==false)
				{
					this.transform.parent.GetComponent<NeilManager>().count++;
					beCounted=true;
				}
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
			case"letter":
			{
				if(other.gameObject.GetComponent<LetterControl>().LetterName == letterName && 
				owner == true&&
				beCounted==true)
				{
					this.transform.parent.GetComponent<NeilManager>().count--;
					beCounted=false;
				}
				break;
			}
		}
	}

	public void addCount()
	{
		this.transform.parent.GetComponent<NeilManager>().count++;
	}
	public void subtractCount()
	{
		this.transform.parent.GetComponent<NeilManager>().count--;
	}
}
