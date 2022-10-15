const drop = document.querySelector(".drop");
const dropdown = document.querySelector(".dropdown");
const region = document.querySelectorAll(".Region");
const search = document.querySelector(".inputbox");
const Nname = document.getElementsByClassName("Nname");
const regionc = document.getElementsByClassName("country-region");
const countrydetails = document.querySelector(".countrydetails");
const subcontainer = document.querySelector("#subcontainer");
const back = document.querySelector(".back");
const url = `https://restcountries.com/v3.1/`;
let currentQuery = "";
var reg = "ALL";

const queryContry = query => {
    let countries = document.querySelector(".countries");
    document.getElementById("couontryelements").innerHTML = "";
    fetch(url + query)
        .then(res => res.json())
        .then(data => {
            if (query !== "all" && query.substring(query.indexOf("/") + 1) !== currentQuery) {
                return;
            }
            data.forEach(element => {
                let { flags, name, population, region, capital } = element;

                let country = document.createElement("div");
                country.classList.add("country");
                country.classList.add("col-12");
				country.classList.add("col-md-3");
				country.classList.add("px-0");
				country.classList.add("mb-5");

                if (reg == "ALL" || reg == region) {
                    countries.appendChild(country);
					country.addEventListener("click", () => {
						showcountrydetails(name)
					})
                    country.innerHTML = `
				<div class="card">
				<img src="${flags.svg}" />
				<div class="container">
				<h2 class="fs-4 py-3 px-3 Nname">${name.common}</h2>
					<p class="my-1 px-3 "><span class="fw-bold">Population: </span><span>${population}</span></p>
					<p class="my-1 px-3 country-region"><span class="fw-bold Rname">Region: </span><span>${region}</span></p>
					<p class="px-3 mb-5"><span class="fw-bold">Capital: </span><span>${capital}</span></p>
				</div></div>						
				`;
                }
            });
        });
};
const detialContry = query => {
    
	document.getElementById("couontryelements").innerHTML = "";
	
	let shahd=document.getElementById("shahd");
	shahd.innerHTML = "";
	shahd.style.visibility = "visible";
	fetch(url + `name/` + query + "?fullText=true")
		.then(res => res.json())
		.then(data => {
			data.forEach(element => {
				let { flags, name, population, region, capital ,languages , subregion, currencies,tld} = element;
				
				let countryinfo = document.createElement("div");
				
				countryinfo.classList.add("row");
				shahd.appendChild(countryinfo);
				countryinfo.innerHTML = `
				<div class="col-12 col-md-5 detailspic">
				<img src="${flags.svg}">
				</div>
				<div class="row col-12 col-md-5 mx-auto">
				 <h1>${name.common}</h1>
				 <div class="col-5">
				  <p class=""><span>Native Name: </span><span>${Object.values(name.nativeName)[0].common}</span></p>
				  <p class=""><span>Population: </span><span>${population}</span></p>
				  <p class=""><span class="">Region: </span><span>${region}</span></p>
				  <p class=""><span class="">Sub Region: </span><span>${subregion}</span></p>
				  <p class=""><span class="">Capital: </span><span>${capital}</span></p>
				 </div>
				 <div class="col-5">
				  <p class=""><span>Top Level Domain: </span><span>${tld}</span></p>
				  <p class=""><span>Currencies: </span><span>${Object.values(currencies)[0].name}</span></p>
				  <p class=""><span class=""> Languages: </span><span>${Object.values(languages)}</span></p>
				  </div>
				  </div>					 
				`;
			
			});
		});
        
};

function showcountrydetails(country) {
	document.getElementById("aaaa").style.visibility = "visible";
	document.getElementsByClassName("countrydetails").innerHTML = "";
    var countryName = country.common;
	countrydetails.style.visibility = "visible";
	subcontainer.style.visibility = "hidden";
	detialContry(countryName);	
};
const getAllcountry = () => {
	document.getElementById("couontryelements").innerHTML = "";
	document.getElementById("shahd").style.visibility = "hidden";
    queryContry("all");
};

const showcountry = () => {
	document.getElementById("couontryelements").innerHTML = "";
	document.getElementById("shahd").style.visibility = "hidden";
    queryContry(`name/${currentQuery}`);
};

function myFunction() {
	var e = document.body;
	e.classList.toggle("dark-mode");
	//drop.style.backgroundColor= "red";
	
}

getAllcountry();

dropdown.addEventListener("click", () => {
    drop.classList.toggle("show");
});

region.forEach(element => {
    element.addEventListener("click", () => {
        currentQuery = search.value.toString().toLowerCase();

        console.log(reg);

        reg = element.innerHTML;

        console.log(reg);

        if (currentQuery.length === 0) {
            getAllcountry();
        } else {
            showcountry();
        }
    });
});

search.addEventListener("input", e => {
    currentQuery = search.value.toString().toLowerCase();

    console.log(currentQuery);

    if (currentQuery.length === 0) {
        getAllcountry();
    } else {
        showcountry();
       
    }
});

back.addEventListener("click", () => {

	    countrydetails.style.visibility = "hidden";
	    subcontainer.style.visibility = "visible";
		
	if (currentQuery.length === 0) {
        getAllcountry();
    }  else {
        showcountry();
      
    }
})
 

