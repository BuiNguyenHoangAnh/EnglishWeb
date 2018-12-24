using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Manager : MonoBehaviour {

    //class Fruit
    //{
    //    public string name;
    //    public Sprite img;
    //}

    public Sprite[] fs;
    public string[] fname;

    public int score;
    public Text scoreIllu;
    public GameObject fish;
    public List<Fruit> fruits;
    public Text fruitName;
    public GameObject[] bubbleMaker;

    // Use this for initialization
    void Start () {
        init();

        int fruitIndex = Random.Range(0, fruits.Count-1);
        int bubbleIndex = Random.Range(0, 3);

        setBB(fruitIndex, bubbleIndex);

        //Fruit temp = fruits[fruitIndex];
        //GameObject b1 = bubbleMaker[bubbleIndex];

        //b1.GetComponent<SpriteRenderer>().sprite = temp.img;
        //b1.GetComponent<BubbleMaker>().beSet = true;
        //fruitName.text = temp.name;

        //fish.GetComponent<FishController>().fruitname = temp.name;

        //for(int i=0; i<bubbleMaker.Length;i++)
        //{
        //    if(bubbleMaker[i].GetComponent<BubbleMaker>().beSet==false)
        //    {
        //        bubbleMaker[i].GetComponent<SpriteRenderer>().sprite = fruits[Random.Range(0, fruits.Length)].img;
        //        bubbleMaker[i].GetComponent<BubbleMaker>().beSet = true;
        //    }
        //}

	}

    private void init()
    {
        fruits = new List<Fruit>();
        //Debug.Log(fs.Length);
        //Debug.Log(fname.Length);
        for (int i = 0; i < fs.Length; i++)
        {
            fruits.Add(new Fruit(fname[i], fs[i]));
            //Debug.Log(fruits.Count);
        }
    }

    public void Restart()
    {
        correct();
        for (int i = 0; i < bubbleMaker.Length; i++)
        {
            bubbleMaker[i].GetComponent<BubbleMaker>().beSet = false;
        }

        int fruitIndex = Random.Range(0, fruits.Count-1);
        int bubbleIndex = Random.Range(0, 3);

        setBB(fruitIndex, bubbleIndex);
    }

    private void correct()
    {
        score++;
        string strScore = "000";
        if (score < 10)
        {
            strScore = "00" + score.ToString();
        }
        else if(score>9)
        {
            strScore = "0" + score.ToString();
        }
        else if(score>99)
        {
            strScore = score.ToString();
        }
        scoreIllu.text = strScore;
    }

    private void setBB(int fruitI, int bb)
    {
        bubbleMaker[bb].GetComponent<BubbleMaker>().fruitImg = fruits.ToArray()[fruitI].img;
        bubbleMaker[bb].GetComponent<BubbleMaker>().Fname = fruits.ToArray()[fruitI].name;
        bubbleMaker[bb].GetComponent<BubbleMaker>().beSet = true;

        fruitName.text = fruits[fruitI].name;

        fish.GetComponent<FishController>().fruitname = fruits.ToArray()[fruitI].name;

        for (int i = 0; i < bubbleMaker.Length; i++)
        {
            if (bubbleMaker[i].GetComponent<BubbleMaker>().beSet == false)
            {
                int f_ind = Random.Range(0, fruits.Count);
                bubbleMaker[i].GetComponent<BubbleMaker>().fruitImg = fruits[f_ind].img;
                bubbleMaker[i].GetComponent<BubbleMaker>().Fname = fruits.ToArray()[f_ind].name;
                bubbleMaker[i].GetComponent<BubbleMaker>().beSet = true;
            }
        }
    }

    // Update is called once per frame
    void Update () {
		
	}
}
