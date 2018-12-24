using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BubbleAct : MonoBehaviour {

    public string fruitName;
    public GameObject fruitIllu;
    bool lostIllu=false;

	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	void Update () {

        this.transform.Translate(new Vector3(0, 0.05f));

	}

    public void SetInformation(GameObject des, string FName, Sprite FImg, int enableShow)
    {
        fruitIllu.GetComponent<FruitIllusion>().Destination = des;
        //fruitName = FName;
        if(enableShow==0)
        {
            fruitIllu.GetComponent<SpriteRenderer>().sprite= null;
            fruitName = "Empty";
        }
        else
        {
            fruitIllu.GetComponent<SpriteRenderer>().sprite= FImg;
            fruitName = FName;
        }
	}
    private void OnCollisionExit2D(Collision2D collision)
    {
        //Debug.Log("out");

        switch(collision.gameObject.tag)
        {
            case "background":
                Destroy(this.gameObject);
                break;
        }
    }

    private void OnCollisionStay2D(Collision2D collision)
    { 
        switch(collision.gameObject.tag)
        {
            
            case "fish":
                {
                    Debug.Log("colFish");
                    if (collision.gameObject.GetComponent<FishController>().fruitname == fruitName && this.transform.childCount>0)
                    {
                        //GameObject.Find("GameManager").GetComponent<Manager>().Restart();
                        fruitIllu.GetComponent<FruitIllusion>().toDes=true;
                    }
                }
                break;
        }
    }
}
