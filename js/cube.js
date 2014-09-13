var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.add(camera);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

THREEx.WindowResize(renderer, camera);

var cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
var cubeMaterial = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.x = 3;
pointLight.position.y = 3;
pointLight.position.z = 3;
scene.add(pointLight);

camera.position.z = 5;

var rotSpeed = 0.05;

var wPressed = false;
var sPressed = false;
var aPressed = false;
var dPressed = false;

Mousetrap.bind("w", function () {
	wPressed = true;
}, "keydown");

Mousetrap.bind("s", function () {
	sPressed = true;
}, "keydown");

Mousetrap.bind("a", function () {
	aPressed = true;
}, "keydown");

Mousetrap.bind("d", function () {
	dPressed = true;
}, "keydown");

Mousetrap.bind("w", function () {
	wPressed = false;
}, "keyup");

Mousetrap.bind("s", function () {
	sPressed = false;
}, "keyup");

Mousetrap.bind("a", function () {
	aPressed = false;
}, "keyup");

Mousetrap.bind("d", function () {
	dPressed = false;
}, "keyup");

function update() {
	if (wPressed) { cube.rotation.x -= rotSpeed; }
	if (sPressed) { cube.rotation.x += rotSpeed; }
	if (aPressed) { cube.rotation.y -= rotSpeed; }
	if (dPressed) { cube.rotation.y += rotSpeed; }
}

function render() {
	update();
	requestAnimationFrame(render);
	renderer.render(scene, camera);
};
render();