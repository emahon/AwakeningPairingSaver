var avatarGender = "";
var activeMaleCharacter = "";
var activeFemaleCharacter = "";
var characters = [];

function avatarGenderSelect_change(e) {
	var value = ($(this).val());
	if (value === "male") {
		avatarGender = "m";
		refreshCharacters();
	}
	else if (value === "female") {
		avatarGender = "f";
		refreshCharacters();
	}
	else {
		avatarGender = "";
		refreshCharacters();
	}		
}

// https://www.w3schools.com/html/html5_draganddrop.asp
function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

// https://stackoverflow.com/questions/28203585/prevent-drop-inside-a-child-element-when-drag-dropping-with-js

function dropFemaleContainer(ev, el) {
	ev.preventDefault();
	ev.stopPropagation();
	var data = ev.dataTransfer.getData("text");
	var el2 = document.getElementById(data);
	if (el2.classList.contains("female-character")
		&& (ev.target.getAttribute("draggable") !== "true")) {
		ev.target.appendChild(el2);
		activeFemaleCharacter = "";
		refreshCharacters();
	}
}

function dropFemalePair(ev, el) {
	ev.preventDefault();
	ev.stopPropagation();
	var data = ev.dataTransfer.getData("text");
	var el2 = document.getElementById(data);
	if (el2.classList.contains("female-character")
		&& (ev.target.children.length === 0)
		&& (ev.target.getAttribute("draggable") !== "true")) {
		ev.target.appendChild(el2);
		activeFemaleCharacter = el2.id;
		refreshCharacters();
	}
}

function dropMaleContainer(ev, el) {
	ev.preventDefault();
	ev.stopPropagation();
	var data = ev.dataTransfer.getData("text");
	var el2 = document.getElementById(data);
	if (el2.classList.contains("male-character")
		&& (ev.target.getAttribute("draggable") !== "true")) {
		ev.target.appendChild(el2);
		activeMaleCharacter = "";
		refreshCharacters();
	}
}

function dropMalePair(ev, el) {
	ev.preventDefault();
	ev.stopPropagation();
	var data = ev.dataTransfer.getData("text");
	var el2 = document.getElementById(data);
	if (el2.classList.contains("male-character")
		&& (ev.target.children.length === 0)
		&& (ev.target.getAttribute("draggable") !== "true")) {
		ev.target.appendChild(el2);
		activeMaleCharacter = el2.id;
		refreshCharacters();
	}
}

function dragover(ev) {
	ev.preventDefault();
}

function refreshCharacters() {
	$(".female").empty();
	$(".male").empty();
	var canMarry = [];
	if (activeFemaleCharacter !== "") {
		var pairedCharacter = characters.find(function(e) { return e.name === activeFemaleCharacter; }); 
		canMarry = pairedCharacter.canMarry;
	}
	if (activeMaleCharacter !== "") {
		var pairedCharacter = characters.find(function(e) { return e.name === activeMaleCharacter; });
		canMarry = canMarry.concat(pairedCharacter.canMarry);
	}
	
	for(var character of characters) {		
		if (!character.married 
			&& (character.name !== activeFemaleCharacter)
			&& (character.name !== activeMaleCharacter)
			&& ((canMarry.length === 0) || canMarry.includes(character.pool))) {
				
			if ((character.pool === "main-female")
				|| (character.pool === "sumia")
				|| (character.pool === "chrom-pool")) {
				$(".female").append('<span id="' + character.name + '" class="female-character ' +  character.pool + '" draggable="true" ondragstart="drag(event)">' + character.name + '</span><br />');
			}
			else if ((character.pool === "main-male")
				|| (character.pool === "chrom") 
				|| (character.pool === "sumia-pool")){
				$(".male").append('<span id="' + character.name + '" class="male-character ' + character.pool + '" draggable="true" ondragstart="drag(event)">' + character.name + '</span><br />');
			}
			else if ((character.pool === "avatar-f") && (avatarGender === "f")) {
				$(".female").append('<span id="' + character.name + '" class="female-character avatar-f' + '" draggable="true" ondragstart="drag(event)">' + character.name + '</span><br />');
			}
			else if ((character.pool === "avatar-f-pool") && (avatarGender === "f")) {
				$(".male").append('<span id="' + character.name + '" class="male-character avatar-f-pool' + '" draggable="true" ondragstart="drag(event)">' + character.name + '</span><br />');
			}
			else if ((character.pool === "avatar-m") && (avatarGender === "m")) {
				$(".male").append('<span id="' + character.name + '" class="male-character avatar-m' + '" draggable="true" ondragstart="drag(event)">' + character.name + '</span><br />');
			}
			else if ((character.pool === "avatar-m-pool") && (avatarGender === "m")) {
				$(".female").append('<span id="' + character.name + '" class="female-character avatar-f' + '" draggable="true" ondragstart="drag(event)">' + character.name + '</span><br />');
			}
		}		
	}
}

$(document).ready(function() {
	// initialize selector functions	
	$("#avatar-gender-select").on('change',avatarGenderSelect_change);
	
	//load data
	
	characters = charactersOriginal;
	
	var saveFiles = JSON.parse(localStorage.getItem("saveFiles"));
	
	refreshCharacters();
});