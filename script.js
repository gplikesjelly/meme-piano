let sounds = [];
let keys = [];

function preload() {
	let oof = loadSound("sounds/oof.mp3");
	let mario = loadSound("sounds/mario.mp3");
	let nelson = loadSound("sounds/nelson.mp3");
	let shrek = loadSound("sounds/shrek.mp3");
	let idiottrump = loadSound("sounds/idiottrump.mp3");
	sounds = [oof, mario, nelson, shrek, idiottrump];
}

function setup() {
	let canvas = createCanvas(600, 200);
	canvas.parent("canvas_container");
	let keynum = 14;
	let keyspace = (width - 40)/(keynum -1);
	let blackKeys = [1,2,4,5,6,8,9,11,12,13];
	let num = 0;
	for (let i = 0; i < keynum; i++) {
		let key = new Clickable();
		key.locate(i*keyspace,0);
		key.width = 40;
		key.height = 200;
		key.color = "#f2f2f2";
		key.cornerRadius = 10;
		key.text = "";
		key.stroke = "255";
		key.num = num;
		key.onPress = ()=> playTheSound();
		key.onRelease = function() {
			this.color = "#f2f2f2"
		}
		key.onHover = function() {
			this.color = "#d9d9d9";
		}
		key.onOutside = function() {
			this.color = "#f2f2f2";
		}
		keys.push(key);
		num++;
		if (blackKeys.includes(i)) {
			let pos = i*keyspace - 11 - (keyspace - 40)/2;
			let blackKey = new Clickable();
			blackKey.locate(pos, 5);
			blackKey.width = 22;
			blackKey.height = 100;
			blackKey.color = "#000000";
			blackKey.text = "";
			blackKey.cornerRadius = 10;
			blackKey.strokeWeight = 0; 
			blackKey.num = num
			blackKey.onPress = ()=> playTheSound();
			blackKey.onRelease = function() {
				this.color = "#000000"
			}
			blackKey.onHover = function() {
				this.color = "#4a4a4a";
			}
			blackKey.onOutside = function() {
				this.color = "#000000";
			}
			num++;
			keys.push(blackKey);
		}
	}
}

function draw() {
	background(255);
	noStroke();
	for (let key of keys) {
		key.draw();
	}
}

function playTheSound() {
	this.color = "#a6a6a6";
	let select = document.getElementById("blue");
	let value = select.value;
	sounds[value].play()
}

//Things to do next week
/*
	Slider to change sounds
	Pitch shift sounds on different keys
*/