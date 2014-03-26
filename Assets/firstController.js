#pragma strict
var the2ndPart : Transform;

function Start () {

}

function Update () {

	transform.position += the2ndPart.localPosition;
	the2ndPart.localPosition = Vector3.zero;

	if (transform.position.x > 6) {
		transform.eulerAngles.x = GradualChange(transform.eulerAngles.x, -10);
		transform.eulerAngles.z = GradualChange(transform.eulerAngles.z, 10);
	}
	else if (transform.position.x < -6) {
		transform.eulerAngles.x = GradualChange(transform.eulerAngles.x, 10);
		transform.eulerAngles.z = GradualChange(transform.eulerAngles.z, -10);
	}
	else if (transform.position.z < -6) {
		transform.eulerAngles.x = GradualChange(transform.eulerAngles.x, 10);
		transform.eulerAngles.z = GradualChange(transform.eulerAngles.x, 10);
	}
	else if (transform.position.z > 6) {
		transform.eulerAngles.x = GradualChange(transform.eulerAngles.x, -10);
		transform.eulerAngles.z = GradualChange(transform.eulerAngles.z, -10);
	}

}

function GradualChange (current : float, target : float) {

//if ((Input.anyKey)||(Input.GetAxis("Mouse X")!=0)||(Input.GetAxis("Mouse Y")!=0)) {
//获得绝对值小于180的数
	if (current > 180) current -= 360;
	if (target > 180) target -= 360; 
	
	if (target > current) { 
		if ((target - current)>1) return (current + 1);  
	}
	else if (target < current) {
		if ((current - target)>1) return (current - 1);
	}
	return (target);
//}
//else return (current);

}
