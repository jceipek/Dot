#pragma strict

private var output : String;
private var topLevel : Hashtable = new Hashtable();

function Start () {
	
}

function saveAll() {
	topLevel["name"] = "No Name";
	topLevel["entities"] = new Array();

	var editableEntities : Editable[] = FindObjectsOfType(Editable);
	for (var entity in editableEntities) {
	    var newEnt : Hashtable = new Hashtable();
		newEnt["type"] = entity.objectType;
		newEnt["pos"] = new Array();
		(newEnt["pos"] as Array).Push(entity.transform.position.x);
		(newEnt["pos"] as Array).Push(entity.transform.position.y);
		(newEnt["pos"] as Array).Push(entity.transform.position.z);
		(topLevel["entities"] as Array).Push(newEnt);
	}
	
	output = "";
	output += "{\n";
	output += "  \"name\" : \""+topLevel["name"]+"\",\n";
	output += "  \"entities\" : \n";
	output += "  [\n";
	for (var entityIndex = 0; entityIndex < (topLevel["entities"] as Array).length; entityIndex++) {
		var entity = (topLevel["entities"] as Array)[entityIndex] as Hashtable;
		var pos = entity["pos"] as Array;
		output += "    {\n";
		output += "      \"type\" : \""+entity["type"]+"\",\n";
		output += "      \"pos\" : [" + pos[0] + ", " + pos[1] + ", " + pos[2] + "]\n";
		output += "    }";
		if (entityIndex < (topLevel["entities"] as Array).length - 1) {
			output += ",";
		}
		output += "\n";
	}
	output += "  ]\n";
	output += "}\n";
	
	Debug.Log(output);
}

function Update () {
  if (Input.GetButtonDown("Fire1")) {
  	saveAll();
  }
}