#pragma strict

function Start () {
	var test : String = "{\"entities\" : [{\"x\":12, \"y\":13, \"z\":13}, {\"x\":67, \"y\":13, \"z\":13}]}";
	Debug.Log(test);
	var parsed = JSONParse.JSONParse(test);
	var entities = parsed["entities"];
	for (var i : Hashtable in entities) {
		Debug.Log(i["x"]);
	}
}

function Update () {

}