#pragma strict

//var theta = Mathf.PI/8.0f;
var c : float;
var theta : float;

var x : float;
var y : float;
var z : float;
var w : float;

var a : Vector3;
var b : Vector3;

function Start () {
	theta = Mathf.PI/4.0f;
}

function Update () {
	//theta += Time.deltaTime;
	/*
	var v = new Vector3(1.0,0.0,0.0);
	transform.rotation.w = Mathf.Cos(0.5*theta);
	transform.rotation.x = v.x * Mathf.Sin(0.5*theta);
	transform.rotation.y = v.y * Mathf.Sin(0.5*theta);
	transform.rotation.z = v.z * Mathf.Sin(0.5*theta);*/
	
	//c += Time.deltaTime;
	
	a.Normalize();
	b.Normalize();
	
	var q1 = new Quaternion(Mathf.Cos(0.5*theta), a.x * Mathf.Sin(0.5*theta), a.y * Mathf.Sin(0.5*theta), a.z * Mathf.Sin(0.5*theta));
	
	var q2 = new Quaternion(Mathf.Cos(0.5*theta), b.x * Mathf.Sin(0.5*theta), b.y * Mathf.Sin(0.5*theta), b.z * Mathf.Sin(0.5*theta));
	
	transform.rotation = q1*q2;
	
	x = transform.rotation.x;
	y = transform.rotation.y;
	z = transform.rotation.z;
	w = transform.rotation.w;
}