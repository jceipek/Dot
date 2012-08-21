#pragma strict

var editable : boolean;
var objectType : String;

function Start () {

}

function Update () {
	if (Input.GetButtonDown("Duplicate")) {
	
	} else if (Input.GetButtonDown("Choose Object")) {
	
	}
}

function OnMouseDown () {
	if (editable) {
		var followMouse : MonoBehaviour = gameObject.GetComponent(FollowMouse);
		followMouse.enabled = !followMouse.enabled;
	}
}



