const prviAuto = {
	ime: document.getElementById("nickname1"),
	brzina: document.getElementById("speed1"),
	udaljenost: document.getElementById("distance"),
};

const drugiAuto = {
	ime: document.getElementById("nickname2"),
	brzina: document.getElementById("speed2"),
	udaljenost: document.getElementById("distance"),
};

let pobjednik = document.getElementById("results");

function tkoJeBrzi(event) {
	event.preventDefault();
	rezultatPrvi = prviAuto.udaljenost.value / prviAuto.brzina.value;
	rezultatDrugi = drugiAuto.udaljenost.value / drugiAuto.brzina.value;
	if (rezultatDrugi > rezultatPrvi) {
		pobjednik.innerHTML = ` ${prviAuto.ime.value} je brži od ${drugiAuto.ime.value}.`;
	} else if (rezultatPrvi > rezultatDrugi) {
		pobjednik.innerHTML = ` ${drugiAuto.ime.value} je brži od ${prviAuto.ime.value}.`;
	} else if ((rezultatPrvi = rezultatDrugi)) {
		pobjednik.innerHTML = `${prviAuto.ime.value} i ${drugiAuto.ime.value} stigli su u isto vrijeme!`;
	} else {
		pobjednik.innerHTML = `Pliz ispravno ispuni predviđene forme. Tenks!`;
	}
}
