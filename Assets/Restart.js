#pragma strict

function Start () {

}

function Update () {

	if(Input.GetKey(KeyCode.R)||(transform.position.y<2)) Application.LoadLevel(Application.loadedLevel);

}