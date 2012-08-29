import UnityEngine

class FollowMouse (MonoBehaviour): 

	def OnDisable():
		SendMessage("MarkConfirmed");

	def Update():
		temp as Vector3 = Input.mousePosition
		temp.z = transform.position.z - Camera.mainCamera.transform.position.z
		transform.position = Camera.mainCamera.ScreenToWorldPoint(temp)