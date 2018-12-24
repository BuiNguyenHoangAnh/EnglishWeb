using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SmoothCamera : MonoBehaviour {

    public Transform target;

    [Range(0.01f, 1.0f)]
    public float smoothSpeed = 0.15f;

    public Vector3 Offset;

    public bool lookAtPlayer = false;

    public bool rotateAroundPlayer = true;

    public static bool allowFollow = true;

    void Start()
    {
        Offset = transform.position - target.position;
        //transform.LookAt(target);
    }

    Vector3 direction;

    void Update()
    {
        //if(Input.GetKey(KeyCode.A))
        //{
        //    direction = new Vector3(0, 10, 0);
        //    transform.RotateAround(target.position, direction, 10);
        //    //moveVectorControl();
        //}
        //if(Input.GetKey(KeyCode.D))
        //{
        //    direction = new Vector3(0, -10, 0);
        //    transform.RotateAround(target.position, direction, 10);
        //    //moveVectorControl();
        //}
    }

    //public void moveVectorControl()
    //{
    //    ChrControl.moveVector.z = 10;
    //    Vector3 dir = this.transform.TransformDirection(ChrControl.moveVector);
    //    //ChrControl.moveVector.Set(ChrControl.moveVector.x, 0, ChrControl.moveVector.z);
    //    ChrControl.moveVector.Set(0, 0, ChrControl.moveVector.z);

    //    ChrControl.moveVector = dir.normalized * ChrControl.moveVector.magnitude;
    //}

    void LateUpdate()
    {
        //if (Input.GetKey(KeyCode.LeftArrow))
        //{
        //    direction = new Vector3(0, -1, 0);
        //}
        //if (Input.GetKey(KeyCode.RightArrow))
        //{
        //    direction = new Vector3(0, 1, 0);
        //}
        //if (Input.GetKeyUp(KeyCode.LeftArrow) || Input.GetKeyUp(KeyCode.RightArrow))
        //{
        //    direction = new Vector3(0, 0, 0);
        //}

        //if (rotateAroundPlayer)
        //{
        //    Quaternion CamTurnAngle = Quaternion.AngleAxis(direction.y * 2, Vector3.up);
        //    Offset = CamTurnAngle * Offset;
        //}

        if(allowFollow==true)
        {
            Vector3 desirePosition = target.position + Offset;
            Vector3 smoothPosition = Vector3.Lerp(transform.position, desirePosition, smoothSpeed);

            transform.position = smoothPosition;

            if (lookAtPlayer || rotateAroundPlayer)
                transform.LookAt(target);
        }
    }
}


