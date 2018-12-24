using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class NeilManager : MonoBehaviour {
	
	bool incount = true;

	public int NeilCount=0;
	bool AllowPlayAgain =false;

	public GameObject resultTable;


	public string timeCount;
	public List<Sprite> listTex;

	public float time = 0;

	public GameObject number1;
	public GameObject number2;
	public GameObject number3;

	public GameObject Reusltnumber1;
	public GameObject Reusltnumber2;
	public GameObject Reusltnumber3;

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {

		if(incount==true)
		{
			time+=Time.deltaTime;
			secondToMinute((int)time);
			check();
		}
	}

	void secondToMinute(int second)
	{
		int a = second/60;
		int b = Mathf.Abs(second)%60;
		int c = b%10;
		int d = b/10;

		timeCount = a.ToString()+":"+d.ToString()+c.ToString();
		setTexture(number1, a);
		setTexture(number2, d);
		setTexture(number3, c);

	}

	public void Add()
	{
		NeilCount++;
	}

	public void Subtract()
	{
		NeilCount--;
	}

	void check()
	{
		if(NeilCount== this.transform.childCount)
		{
			AllowPlayAgain = true;
			resultTable.SetActive(true);
			Reusltnumber1.GetComponent<SpriteRenderer>().sprite = number1.GetComponent<SpriteRenderer>().sprite;
			Reusltnumber2.GetComponent<SpriteRenderer>().sprite = number2.GetComponent<SpriteRenderer>().sprite;
			Reusltnumber3.GetComponent<SpriteRenderer>().sprite = number3.GetComponent<SpriteRenderer>().sprite;
			incount=false;
		}
	}

	public void PlayAgain()
	{
		if(AllowPlayAgain ==true)
			SceneManager.LoadScene(0);
		
		AllowPlayAgain=false;
	}

	public void setTexture(GameObject number, int value)
	{
		switch(value)
		{
			case 0:
			{
				number.GetComponent<SpriteRenderer>().sprite = listTex[0];
			}
			break;
			case 1:
			{
				number.GetComponent<SpriteRenderer>().sprite = listTex[1];
			}
			break;
			case 2:
			{
				number.GetComponent<SpriteRenderer>().sprite = listTex[2];
			}
			break;
			case 3:
			{
				number.GetComponent<SpriteRenderer>().sprite = listTex[3];
			}
			break;
			case 4:
			{
				number.GetComponent<SpriteRenderer>().sprite = listTex[4];
			}
			break;
			case 5:
			{
				number.GetComponent<SpriteRenderer>().sprite = listTex[5];
			}
			break;
			case 6:
			{
				number.GetComponent<SpriteRenderer>().sprite = listTex[6];
			}
			break;
			case 7:
			{
				number.GetComponent<SpriteRenderer>().sprite = listTex[7];
			}
			break;
			case 8:
			{
				number.GetComponent<SpriteRenderer>().sprite = listTex[8];
			}
			break;
			case 9:
			{
				number.GetComponent<SpriteRenderer>().sprite = listTex[9];
			}
			break;
		}
	}
}
