using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BubbleMaker : MonoBehaviour
{
    public string Fname;
    public bool beSet = false;
    public Sprite fruitImg;

    public GameObject Bubble;
    public int countDown = 100;
    int count = 0;
    public GameObject ScorePosition;

    // Use this for initialization
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        if (fruitImg != null)
        {
            if (count > countDown)
            {
                int desi = Random.Range(0, 2);
                Debug.Log(desi);
                //if (desi != 0)
                {
                    GameObject bubl = GameObject.Instantiate(
                        Bubble,
                        this.transform.position,
                        this.transform.rotation);
                    bubl.GetComponent<BubbleAct>().SetInformation(ScorePosition, Fname,fruitImg, desi);
                    //bubl.GetComponent<BubbleAct>().fruitName = Fname;
                    //bubl.GetComponent<BubbleAct>().fruitIllu.GetComponent<SpriteRenderer>().sprite = fruitImg;
                }
                count = 0;
            }
            count++;
        }
    }
}
