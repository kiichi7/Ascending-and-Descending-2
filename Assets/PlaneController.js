#pragma strict
var theSight : Transform;

function Start () {

}

function Update () {

	transform.eulerAngles = theSight.eulerAngles;
	transform.localEulerAngles.x -= 25;

}