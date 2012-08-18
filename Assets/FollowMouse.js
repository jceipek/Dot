#pragma strict

function Update () {
	var temp : Vector3 = Input.mousePosition;
	temp.z = transform.position.z - Camera.mainCamera.transform.position.z;
 	transform.position = Camera.mainCamera.ScreenToWorldPoint(temp);
}