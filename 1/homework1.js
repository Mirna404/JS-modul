const rezultat1 = document.getElementById("charNumber");
const rezultat2 = document.getElementById("sentencesNumber");
const tekst = document.getElementById("textarea");

function razbijRecenice(event) {
	event.preventDefault();
	let brZnakova = tekst.value.length;
	let brRecenica = tekst.value.split(/[.?!]/).length;
	rezultat1.innerHTML = `Znakovi u rečenici: ${brZnakova}.`;
	rezultat2.innerHTML = `Broj rečenica: ${brRecenica - 1}.`;
}
