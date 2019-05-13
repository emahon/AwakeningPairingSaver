function avatarGenderSelect_change(e) {
	var value = ($(this).val());
	if (value === "male") {
		$(".male").append('<span class="male-character" id="avatar-m">Avatar<br /></span>');
		$("#avatar-f").remove();
	}
	else if (value === "female") {
		$(".female").append('<span class="female-character" id="avatar-f">Avatar<br /></span>');
		$("#avatar-m").remove();
	}
	else {
		$("#avatar-m").remove();
		$("#avatar-f").remove();
	}		
}

$(document).ready(function() {
	// initialize selector functions	
	$("#avatar-gender-select").on('change',avatarGenderSelect_change);
	
	//load data
	var characters = JSON.parse();
	
	var saveFiles = JSON.parse(localStorage.getItem("saveFiles"));
	
});