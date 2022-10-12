const drop = document.querySelector(".drop");
const dropdown = document.querySelector(".dropdown");
const region = document.querySelectorAll(".Region");
const search = document.querySelector(".inputbox");
const Nname = document.getElementsByClassName("Nname");
const regionc = document.getElementsByClassName("country-region");
const getcountry = async (event) => {
	const url = `https://restcountries.com/v3.1/all`
	const countries = document.querySelector(".countries");
	const countryArray = [];
	await fetch(url)
		.then(res => res.json())
		.then(data => {
			data.forEach(element => {

				const { flags, name, population, region, capital } = element
				countryArray.push(name.common);

				const country = document.createElement("div");
				country.classList.add("country")
				country.classList.add("col")
				countries.appendChild(country);

				country.innerHTML = `
				<div class="card">
				<img src="${flags.svg}" />
				<div class="container">
					<h5 class="Nname">${name.common}</h5>
					<p><span class="a">Population: </span><span>${population}</span></p>
					<p class="country-region"><span class="a Rname">Region:</span><span>${region}</span></p>
					<p><span class="a">Capital: </span><span>${capital}</span></p>
				</div></div>				
				`
			});
		})
};
function myFunction() {
    var e= document.body;
    e.classList.toggle("dark-mode");
}

getcountry();
dropdown.addEventListener("click", () => {
	drop.classList.toggle("show")
    console.log("halll");
})

region.forEach(element => {
	element.addEventListener("click", () => {
		console.log(element);
		Array.from(regionc).forEach(elem => {
			console.log(elem.innerText);
			if (elem.innerText.includes(element.innerText) || element.innerText == "ALL") {
				elem.parentElement.parentElement.style.display = "grid"
			}
			else {
				elem.parentElement.parentElement.style.display = "none"
			}
		})
	
	})
});
search.addEventListener("input", (e) => {
	console.log(search.value.toString().toLowerCase())
	Array.from(Nname).forEach(elem => {
		if (elem.innerText.toLowerCase().includes(search.value.toLowerCase())) {
			elem.parentElement.parentElement.style.display = "grid"
			console.log("000000000000")
		}
		else {
			elem.parentElement.parentElement.style.display = "none"
			console.log("1111111111111111111")
		}
	});

})