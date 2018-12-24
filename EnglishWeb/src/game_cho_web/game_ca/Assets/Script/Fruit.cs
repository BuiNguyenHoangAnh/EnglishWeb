using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Fruit {
    public string name;
    public Sprite img;

    public Fruit(string identify, Sprite image)
    {
        name = identify;
        img = image;
    }
}
