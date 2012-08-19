#pragma strict

var editable : boolean;
var objectType : String;

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