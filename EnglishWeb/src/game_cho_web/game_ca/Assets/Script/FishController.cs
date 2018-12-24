using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FishController : MonoBehaviour
{
    public string fruitname;

    //public GameObject thinkingBubble;
    //public GameObject thingkingFruit;
    public float speed = 1;
    //public Sprite[] fruit;

    // Use this for initialization
    void Start()
    {
        //thingkingFruit.GetComponent<SpriteRenderer>().sprite = fruit[0];
    }

    // Update is called once per frame
    void Update()
    {
        SetPoint();

        if (hit.point.x != 0 && hit.point.y != 0)
        {
            if (hit.point.x < this.transform.position.x)
            {
                GetComponent<SpriteRenderer>().flipX = true;
                //thinkingBubble.GetComponent<SpriteRenderer>().flipY = true;
                //thingkingFruit.GetComponent<SpriteRenderer>().flipY = true;
                //thinkingBubble.transform.localPosition = new Vector3(
                //    thinkingBubble.transform.localPosition.x,
                //    -Mathf.Abs(thinkingBubble.transform.localPosition.y),
                //    0);
            }
            else if (hit.point.x > this.transform.position.x)
            {
                GetComponent<SpriteRenderer>().flipX = false;
                //thinkingBubble.GetComponent<SpriteRenderer>().flipY = false;
                //thingkingFruit.GetComponent<SpriteRenderer>().flipY = false;
                //thinkingBubble.transform.localPosition = new Vector3(
                //    thinkingBubble.transform.localPosition.x,
                //    Mathf.Abs(thinkingBubble.transform.localPosition.y),
                //    0);
            }


            // float angel = Vector3.Angle(
            //     new Vector3(1, 0),
            //     new Vector3(hit.point.x - this.transform.position.x, hit.point.y - this.transform.position.y));

            // float direction = Mathf.Sign(hit.point.y - this.transform.position.y);

            // float oldA = this.transform.rotation.z;

            // this.transform.rotation = Quaternion.RotateTowards(
            //             this.transform.rotation,
            //             Quaternion.AngleAxis(angel, new Vector3(0, 0, direction)),
            //             500 * Time.deltaTime);
            // float newA = this.transform.rotation.z;

            // float distance = Vector3.Distance(
            //         new Vector3(hit.point.x, hit.point.y),
            //         this.transform.position);

            // //Debug.Log("dis: " + distance + " cod: (" + hit.point.x + "," + hit.point.y + ")");
            // //Debug.Log(" cod: (" + hit.point.x + "," + hit.point.y + ")");

            // if (oldA == newA &&
            //     distance > 1)
            // {
            //     this.transform.Translate(this.transform.TransformVector(0.15f * Mathf.Sign(hit.point.x - this.transform.position.x) *speed, 0, 0));
            // }

            this.transform.position = Vector3.Lerp(this.transform.position, new Vector3( hit.point.x,hit.point.y,0),speed);
        }
    }

    RaycastHit2D hit;

    void SetPoint()
    {
        //if (Input.GetMouseButtonDown(0) == true)
        {
            hit = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector3.forward, 100);
            //Debug.Log(" cod: (" + hit.point.x + "," + hit.point.y + ")");

        }
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        switch(collision.gameObject.tag)
        {
            case "bubble":
                {
                    int fruitIndex = Random.Range(0, 14);
                    //thingkingFruit.GetComponent<SpriteRenderer>().sprite = fruit[fruitIndex];
                }
                break;
        }
    }

    private void OnCollisionStay2D(Collision2D collision)
    {
        //switch (collision.gameObject.tag)
        //{
        //    case "boundaryX":
        //        SmoothCamera.allowFollowX = false;
        //        break;
        //    case "boundaryY":
        //        SmoothCamera.allowFollowY = false;
        //        break;
        //}
    }
    private void OnCollisionExit2D(Collision2D collision)
    {
        //switch (collision.gameObject.tag)
        //{
        //    case "boundaryX":
        //        SmoothCamera.allowFollowX = true;
        //        break;
        //    case "boundaryY":
        //        SmoothCamera.allowFollowY = true;
        //        break;
        //}
    }
}
