const droplist = document.querySelector(".drop");
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

var lok  = 0;

var cn = "";
var sv;
var nn;
var idc = 0;
var arr=[];
 
function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
	ev.target.classList.add("opdrag");

}

 function allowDrop(ev) {
      ev.preventDefault();
    }
   
function drop(ev) {
      ev.preventDefault();    
      let divf = document.createElement("div");
	  
		divf.classList.add("row");
		divf.classList.add("mx-0");
				divf.innerHTML = `<div class="row align-content-center "id="${idc}">
				 <img class="h-75 col-3 favimg"src="${sv}"/>
		          <h6 class="col-3 py-1 px-0" id ="conf">${cn}</h6>
				  <button class="col-6 btn-close py-1 w-auto mx-5 closebutton" id="closebutn"> </button>
		           </div>`;
		
	divf.addEventListener("click", () => {
		document.getElementById("favorit").removeChild(divf);
		
		 })
	ev.target.appendChild(divf);
	favorit.classList.add("favlist");
	   idc++;
	arr.push(cn);
    }

const queryContry = query => {
    let countries = document.querySelector(".countries");
    document.getElementById("couontryelements").innerHTML = "";
    fetch(url + query)
        .then(res => res.json())
        .then(data => {
            if (query !== "all" && query.substring(query.indexOf("/") + 1) !== currentQuery) {
                return;
			}
			loc = 0;
            data.forEach(element => {
                let { flags, name, population, region, capital } = element;

                var country = document.createElement("div");
                country.classList.add("country");
                country.classList.add("col-12");
				country.classList.add("col-md-4");
				country.classList.add("pb-5");
				country.id = "aa"+loc;
			
				if (reg == "ALL" || reg == region) {
					countries.appendChild(country);
					country.addEventListener('dragstart',() => { nn = name; cn = name.common; sv = flags.svg; });
					country.addEventListener('dragstart', drag);
					
					country.addEventListener("click", () => {
						showcountrydetails(name)
					})
                    country.innerHTML = `
				<div class="border-0 shadow card" draggable="true" >
				<img src="${flags.svg}" />
				<div class="container">
				<h2 class="fs-4 py-3 px-3 Nname">${name.common}</h2>
					<p class="my-1 px-3 "><span class="fw-bold">Population: </span><span>${population}</span></p>
					<p class="my-1 px-3 country-region"><span class="fw-bold Rname">Region: </span><span>${region}</span></p>
					<p class="px-3 mb-5"><span class="fw-bold">Capital: </span><span>${capital}</span></p>
				</div>
				
				</div>						
				`;
                }
                

         loc = loc +1;
            });
        });
};

const displyfav = () => {
	let countries = document.querySelector(".countries");
	document.getElementById("couontryelements").innerHTML = "";
	arr.forEach(elt => {
		console.log(elt);
		fetch(url + `name/` + elt + "?fullText=true")
			.then(res => res.json())
			.then(data => {
				loc = 0;
				data.forEach(element => {
					let { flags, name, population, region, capital } = element;

					var country = document.createElement("div");
					country.classList.add("country");
					country.classList.add("col-12");
					country.classList.add("col-md-4");
					country.classList.add("pb-5");
					country.id = "aa" + loc;
			
						countries.appendChild(country);
					
						country.addEventListener("click", () => {
							showcountrydetails(name)
						})
						country.innerHTML = `
				<div class="border-0 shadow card" draggable="true" >
				<a href="detailspage.html"><img src="${flags.svg}" /></a>
				<div class="container">
				<h2 class="fs-4 py-3 px-3 Nname">${name.common}</h2>
					<p class="my-1 px-3 "><span class="fw-bold">Population: </span><span>${population}</span></p>
					<p class="my-1 px-3 country-region"><span class="fw-bold Rname">Region: </span><span>${region}</span></p>
					<p class="px-3 mb-5"><span class="fw-bold">Capital: </span><span>${capital}</span></p>
				</div></div>						
				`;
					
                

					loc = loc + 1;
				});
			});
	});
}

const MqueryContry = query => {
    let countries = document.querySelector(".countries");
    document.getElementById("couontryelements").innerHTML = "";
    fetch(url + query)
        .then(res => res.json())
        .then(data => {
            if (query !== "all" && query.substring(query.indexOf("/") + 1) !== currentQuery) {
                return;
			}
			loc = 0;
            data.forEach(element => {
                let { flags, name, population, region, capital } = element;

                var country = document.createElement("div");
                country.classList.add("country");
                country.classList.add("col-12");
				country.classList.add("col-md-4");
				country.classList.add("pb-5");
				country.id = "aa"+loc;
			
				if (reg == "ALL" || reg == region) {
					countries.appendChild(country);
					country.addEventListener('dragstart',() => { nn = name; cn = name.common; sv = flags.svg; });
					country.addEventListener('dragstart',drag);
					
					country.addEventListener("click", () => {
						showcountrydetails(name)
					})
                    country.innerHTML = `
				<div class="border-0 shadow card" draggable="true" >
				<a href="detailspage.html"><img src="${flags.svg}" /></a>
				<div class="container">
				<h2 class="fs-4 py-3 px-3 Nname">${name.common}</h2>
					<p class="my-1 px-3 "><span class="fw-bold">Population: </span><span>${population}</span></p>
					<p class="my-1 px-3 country-region"><span class="fw-bold Rname">Region: </span><span>${region}</span></p>
					<p class="px-3 mb-5"><span class="fw-bold">Capital: </span><span>${capital}</span></p>
					<div id="imageDiv"></div>
					</div>
					<div class=" text-end"><button class="star border-0">&#9734</div>
				</div>						
				`;   
                }
				const star = document.querySelectorAll("star")
				star.onclick = function () {
					console.log(star);
				   }

         loc = loc +1;
            });
        });
};
const detialContry = query => {
	const page = window.open("detailspage.html");
	page.document.getElementsByClassName("countrydetails").innerHTML = "";
	let detailspage=page.document.getElementById("detailspage");
	detailspage.innerHTML = "";
	fetch(url + `name/` + query + "?fullText=true")
		.then(res => res.json())
		.then(data => {
			
			data.forEach(element => {
				let { flags, name, population, region, capital ,languages , subregion, currencies,tld} = element;
				
				let countryinfo = page.document.createElement("div");
				console.log(name.common);
				countryinfo.classList.add("row");
				detailspage.appendChild(countryinfo);
				countryinfo.innerHTML = `
				<div class="col-12 col-md-6 detailspic">
				<img src="${flags.svg}">
				</div>
				<div class="row col-12 col-md-6 mx-auto p-5">
				 <h1>${name.common}</h1>
				 <div class="col-6">
				  <p class=""><span class="fw-semibold">Native Name: </span><span>${Object.values(name.nativeName)[0].common}</span></p>
				  <p class=""><span class="fw-semibold">Population: </span><span>${population}</span></p>
				  <p class=""><span class="fw-semibold">Region: </span><span>${region}</span></p>
				  <p class=""><span class="fw-semibold">Sub Region: </span><span>${subregion}</span></p>
				  <p class=""><span class="fw-semibold">Capital: </span><span>${capital}</span></p>
				 </div>
				 <div class="col-6">
				  <p class=""><span class="fw-semibold">Top Level Domain: </span><span>${tld}</span></p>
				  <p class=""><span class="fw-semibold">Currencies: </span><span>${Object.values(currencies)[0].name}</span></p>
				  <p class=""><span class="fw-semibold"> Languages: </span><span>${Object.values(languages)}</span></p>
				  </div>
				  <div class="d-flex align-items-start ">
				  <span class="fw-semibold">Border Countries:</span>
				  <button class="btn shadow mx-3">France</button>
				  <button class="btn shadow mx-3">Germany</button>
				  <button class="btn shadow mx-3">Netherlands</button>
			  </div>
				  </div>					 
				`;
			
			});
		});
        
};

function showcountrydetails(country) {
	var countryName = country.common;
	console.log(countryName);
	detialContry(countryName);	
};
const getAllcountry = () => {
	document.getElementById("couontryelements").innerHTML = " " ;
	
    queryContry("all");
};

const showcountry = () => {
	document.getElementById("couontryelements").innerHTML = "";

    queryContry(`name/${currentQuery}`);
};

function Darkmode() {
	var e = document.body;
	e.classList.toggle("dark-mode");
	document.getElementsByClassName("drop").style.backgroundColor = 'salmon';
	
}

getAllcountry();

dropdown.addEventListener("click", () => {
	droplist.classList.toggle("show");
	
});

region.forEach(element => {
    element.addEventListener("click", () => {
        currentQuery = search.value.toString().toLowerCase();

        console.log(reg);

        reg = element.innerHTML;

        console.log(reg);
		if (reg == "Favourites") {
			if (currentQuery.length === 0) {
				displyfav();
			} 
				
		}
		else {
			if (currentQuery.length === 0) {
				getAllcountry();
			} else {
				showcountry();
				
			}
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


let myMediaQuery = window.matchMedia('(max-width: 376px)');
myMediaQuery.addEventListener('change', widthChangeCallback); 


function widthChangeCallback(myMediaQuery) {
	if (myMediaQuery.matches) {
		document.getElementById("couontryelements").innerHTML = "";
		document.getElementById("favorit").remove();
		console.log("111111111111111")
		MqueryContry("all");
		
	
	}
}

back.addEventListener("click", () => {
	if (currentQuery.length === 0) {
		getAllcountry();
	} else {
		showcountry();   
	}
});