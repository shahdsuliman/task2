const region = document.querySelector(".region");
const searchCountry = document.querySelector("input[type='search']");

const getcountry = async(event) => {
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
					<p class="country-region"><span class="a Rname">Region: </span><span>${region}</span></p>
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

searchCountry.addEventListener("input", (e) => {
	const searchcountry = e.target.value;
	const allcountries = Array.from(document.querySelectorAll(".country"));
	allcountries.forEach(country => {
		const keycountry = country.innerHTML.toLowerCase().trim();
		if (keycountry == searchcountry) {
			country.closest(".country").classList.remove("hide-card")
		} else if (keycountry.includes(searchcountry)) {
			country.closest(".country").classList.remove("hide-card")
		} else {
			country.closest(".country").classList.add("hide-card")
		}
	})
})

const regionSelect = document.querySelector("select");
regionSelect.onchange = (evt) => {
	const allcountries = Array.from(document.querySelectorAll(".country-region span"));
	allcountries.forEach(country => {
		const keycountry = country.innerHTML.toLowerCase().trim();
		if (keycountry == regionSelect.value || regionSelect.value === "all") {
			country.closest(".country").classList.remove("hide-card")
		} else {
			country.closest(".country").classList.add("hide-card")
		}
	})
}
