import UnityEngine

class Saver (MonoBehaviour): 
	output as string
	//topLevel = dict()

	def saveAll():
		pass
	/*
		topLevel["name"] = "No Name"
		topLevel["entities"] = List()
		editableEntities = FindObjectsOfType(Editable)
		for entity in editableEntities:
			newEnt = Hashtable()
			newEnt["type"] = entity.objectType
			newEnt["pos"] = List()
			(newEnt["pos"] as List).Push(entity.transform.position.x)
			(newEnt["pos"] as List).Push(entity.transform.position.y)
			(newEnt["pos"] as List).Push(entity.transform.position.z)
			(topLevel["entities"] as List).Push(newEnt)
			
		output = ""
		output += "{\n"
		output += "  \"name\" : \""+topLevel["name"]+"\",\n"
		output += "  \"entities\" : \n"
		output += "  [\n"
		
		for entityIndex in range(0,entityIndex < (topLevel["entities"] as List).length):
			entity = (topLevel["entities"] as List)[entityIndex] as dict
			pos = entity["pos"] as List
			output += "    {\n"
			output += "      \"type\" : \""+entity["type"]+"\",\n"
			output += "      \"pos\" : [" + pos[0] + ", " + pos[1] + ", " + pos[2] + "]\n"
			output += "    }"
			if entityIndex < (topLevel["entities"] as List).length - 1:
				output += ","
			output += "\n"
		
		output += "  ]\n";
		output += "}\n";
	
		Debug.Log(output);		
		
	*/
			
	def Update():
		if (Input.GetButtonDown("Fire1")):
  			saveAll()