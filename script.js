const drop = document.querySelector(".drop");
const dropdown = document.querySelector(".dropdown");
const region = document.querySelectorAll(".Region");
const search = document.querySelector(".inputbox");
const Nname = document.getElementsByClassName("Nname");
const regionc = document.getElementsByClassName("country-region");

var a;

var reg = 'ALL';

var url;


const queryContry =  () => {
	
	let countries = document.querySelector(".countries");

	fetch(url)
		.then(res => res.json())
		.then(data => {
			data.forEach(element => {

				let { flags, name, population, region, capital } = element;

				let country = document.createElement("div");
				country.classList.add("country");
				country.classList.add("col");
				
				if (reg == "ALL" || reg == region) 
				{
					
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
				`;	
				
				}
				
			});
		});
}

const getAllcountry = () => {
	
	document.getElementById("couontryelements").innerHTML = "";
	
	 url = 'https://restcountries.com/v3.1/all';
	 
	 queryContry();
	
}

const showcountry =  () => {
	
	document.getElementById("couontryelements").innerHTML = "";
	
    url =`https://restcountries.com/v3.1/name/${a}`;
	
	 queryContry();
	
}	


const getcountry = (event) => {
	getAllcountry();
};


function myFunction() {
    var e= document.body;
    e.classList.toggle("dark-mode");
};


getAllcountry();

dropdown.addEventListener("click", () => {
	drop.classList.toggle("show")
});

region.forEach(element => {
	element.addEventListener("click", () => {
		
		a = search.value.toString().toLowerCase();
		
		console.log(reg);
		
		reg = element.innerHTML;
		
		console.log(reg);
			 
		if (a.length === 0) {
				getAllcountry();
		}
		
	
	else {
	
		showcountry();
		
		 }
	
	});
});

search.addEventListener("input", (e) => {
	
	a = search.value.toString().toLowerCase();
	
	console.log(a);
		 
	if (a.length === 0 ) {
		getAllcountry();
	}
	else {
		
		showcountry();
		console.log("i");
		
	}
	
	



});