import UnityEngine

class Editable (MonoBehaviour): 
	public editable as bool
	public objectType as string
	public unconfirmed as bool
	
	def Update():
		if Input.GetButtonDown("Choose Object"):
			Debug.Log("Space!")
		elif Input.GetButtonDown("Unconfirm"):
			if unconfirmed:
				Destroy(gameObject)
	
	def MarkUnconfirmed():
		unconfirmed = true

	def MarkConfirmed():
		unconfirmed = false

	def OnMouseDown():
		if editable:
			followMouse as MonoBehaviour
			if Input.GetButton("Duplicate"):
				Debug.Log("Duplicate!")
				newObject = Instantiate(gameObject, 
										gameObject.transform.position, 
										gameObject.transform.rotation)
				newObject.SendMessage("MarkUnconfirmed")
				followMouse = newObject.GetComponent(FollowMouse)
				followMouse.enabled = not followMouse.enabled
			else:
				followMouse = gameObject.GetComponent(FollowMouse)
				followMouse.enabled = not followMouse.enabled