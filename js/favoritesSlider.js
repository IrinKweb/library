// filter for favorites
function hideAllBlock() {
	document.getElementById('winter').style.display = 'none';
	document.getElementById('spring').style.display = 'none';
	document.getElementById('summer').style.display = 'none';
	document.getElementById('autumn').style.display = 'none';
  }

function Selected(a) {
	hideAllBlock();
	document.getElementById(a.value).style.display = 'block';
	document.getElementById(a.value).style.animation = 'none';
}
