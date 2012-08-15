#pragma strict

var editable : boolean;

function Start () {

}

function Update () {

}

function OnMouseDown () {
	if (editable) {
		var followMouse : MonoBehaviour = gameObject.GetComponent(FollowMouse);
		followMouse.enabled = !followMouse.enabled;
	}
}