var avatarGender = "";
var activeMaleCharacter = "";
var activeFemaleCharacter = "";
var characters = [];
var marriages = [];

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
	var malePools = ["avatar-m", "chrom", "sumia-pool", "main-male", "avatar-f-pool", "morgan-m", "child-male"];
	var femalePools = ["avatar-f", "sumia", "chrom-pool", "main-female", "avatar-m-pool", "morgan-f", "child-female"];
	if (activeFemaleCharacter !== "") {
		var pairedCharacter = characters.find(function(e) { return e.name === activeFemaleCharacter; }); 
		canMarry = pairedCharacter.canMarry;
	}
	else {
		canMarry = malePools;
	}
	if (activeMaleCharacter !== "") {
		var pairedCharacter = characters.find(function(e) { return e.name === activeMaleCharacter; });
		canMarry = canMarry.concat(pairedCharacter.canMarry);
	}
	else {
		canMarry = canMarry.concat(femalePools);
	}
	
	for(var character of characters) {
		var born = true;
		
		if (character.parent) {
			var characterParent = characters.find(function(c) { return c.name === character.parent; });
			born = characterParent.married;
		}
		
		if (!character.married 
			&& born
			&& (character.name !== activeFemaleCharacter)
			&& (character.name !== activeMaleCharacter)
			&& ((canMarry.length === 0) || canMarry.includes(character.pool))) {
				
			if ((character.pool === "main-female")
				|| (character.pool === "sumia")
				|| (character.pool === "chrom-pool")
				|| (character.pool === "child-female")) {
				$(".female").append('<span id="' + character.name + '" class="female-character ' +  character.pool + '" draggable="true" ondragstart="drag(event)">' + character.name + '</span><br />');
			}
			else if ((character.pool === "main-male")
				|| (character.pool === "chrom") 
				|| (character.pool === "sumia-pool")
				|| (character.pool === "child-male")){
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
			else if ((character.pool === "morgan-f") && (avatarGender === "m")) {
				$(".female").append('<span id="' + character.name + '" class="female-character morgan-f"' + '" draggable="true" ondragstart="drag(event)">' + character.name + '</span><br />'); 
			}
			else if ((character.pool === "morgan-m") && (avatarGender === "f")) {
				$(".male").append('<span id="' + character.name + '" class="male-character morgan-m"' + '" draggable="true" ondragstart="drag(event)">' + character.name + '</span><br />');
			}
		}		
	}
}

function refreshMarriages() {
	$(".pairings-list-container").empty();
	for (var marriage of marriages) {
		$(".pairings-list-container").append('<span>' + marriage.male + ' and ' + marriage.female + '<button class="remove-marriage-button" id="marriage-' + marriage.male + '">x</button></span><br />');	
	}
	$(".remove-marriage-button").click(removeMarriageButton_click);
}

function pairCharactersButton_click(e) {
	var maleCharacter = characters.find(function(e) { return e.name === activeMaleCharacter; });
	var femaleCharacter = characters.find(function(e) { return e.name === activeFemaleCharacter; });
	
	maleCharacter.married = true;
	femaleCharacter.married = true;
	
	marriages.push( {
		male: maleCharacter.name,
		female: femaleCharacter.name
	});
	
	$("#pairing-checker-male").empty();
	$("#pairing-checker-female").empty();
	
	activeMaleCharacter = "";
	activeFemaleCharacter = "";
	refreshMarriages();
	refreshCharacters();
}

function removeMarriageButton_click(e) {
	var marriedMale = e.target.id.split("-")[1];
	var marriage = marriages.find(function(m) { return m.male === marriedMale; });
	var maleCharacter = characters.find(function(c) { return c.name === marriage.male; } );
	var femaleCharacter = characters.find(function(c) { return c.name === marriage.female; } );
	
	maleCharacter.married = false;
	femaleCharacter.married = false;
	
	// remove children, including from marriages
	var children = characters.filter(function(c) { return (c.parent === maleCharacter.name) || (c.parent === femaleCharacter.name); });
	
	if (children.length > 0) {
		var childNames = children.map(function(c) { return c.name; } );
		var childMarriages = marriages.filter(function(m) { return (childNames.includes(m.male) || childNames.includes(m.female)); });
		for (var childMarriage of childMarriages) {
			var maleChild = characters.find(function(c) { return c.name === childMarriage.male; } );
			var femaleChild = characters.find(function(c) { return c.name === childMarriage.female; });
			
			maleChild.married = false;
			femaleChild.married = false;
		}
		marriages = marriages.filter(function(m) { return (!childNames.includes(m.male) && !childNames.includes(m.female)); });
	}
	
	// remove deleted marriage
	marriages = marriages.filter(function(m) { return m !== marriage });
	refreshMarriages();
	refreshCharacters();
}

$(document).ready(function() {
	// initialize selector functions	
	$("#avatar-gender-select").on('change',avatarGenderSelect_change);
	$("#pair-characters-button").click(pairCharactersButton_click);
	
	//load data
	
	characters = charactersOriginal;
	
	var saveFiles = JSON.parse(localStorage.getItem("saveFiles"));
	
	refreshCharacters();
});