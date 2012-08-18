#pragma strict

import System.IO;
import System.Collections.Generic;

function Start () {

	var levelLocation;
	
	if (Application.isEditor) {
		levelLocation = "Levels/";
	} else {
		levelLocation = "../Levels/";
	}

    try {
        // Create an instance of StreamReader to read from a file.
        var sr = new StreamReader(levelLocation + "demolvl.json");

        // Read and display lines from the file until the end of the file is reached.
        var lines = sr.ReadToEnd();

		var parsed = JSONParse.JSONParse(lines);
		var entities = parsed["entities"] as Array;
		for (var i : int; i < entities.length; i++) {
			var ent = entities[i] as Hashtable;
			var type = ent["type"] as String;
			var pos = ent["pos"] as Array;
			Instantiate(Resources.Load(type), new Vector3(pos[0], pos[1], pos[2]), Quaternion.identity);
			Debug.Log("Created Object of type " + type + " at " + pos);
		}
		
        sr.Close();
    }

    catch (e) {
        // Let the user know what went wrong.
        Debug.Log("The file could not be read:");
        Debug.Log(e.Message);
    }
    

}

function Update () {

}