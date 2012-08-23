#pragma strict

var editable : boolean;
var objectType : String;
var unconfirmed : boolean;

function Start() {

}

function Update() {
	if (Input.GetButtonDown("Choose Object")) {
		Debug.Log("Space!");
	} else if (Input.GetButtonDown("Unconfirm")) {
		if (unconfirmed) {
			Destroy(gameObject);
		}
	}
}

function MarkUnconfirmed() {
	unconfirmed = true;
}

function MarkConfirmed() {
	unconfirmed = false;
}

function OnMouseDown() {
	if (editable) {
		var followMouse : MonoBehaviour;
		if (Input.GetButton("Duplicate")) {
			Debug.Log("Duplicate!");
			var newObject = Instantiate(gameObject, 
										gameObject.transform.position, 
										gameObject.transform.rotation);
			newObject.SendMessage("MarkUnconfirmed");
			followMouse = newObject.GetComponent(FollowMouse);
			followMouse.enabled = !followMouse.enabled;
		} else {
			followMouse = gameObject.GetComponent(FollowMouse);
			followMouse.enabled = !followMouse.enabled;
		}
	}
}



