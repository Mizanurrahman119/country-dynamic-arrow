const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2')
    .then(Response => Response.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    // for(const country of countries){
    //     console.log(country);
    // }

    const contaienr = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
       div.innerHTML = ` <h3>Country: ${country.name}</h3>
       <p>Capital: ${country.capital}</p>
       <button onclick="loadCountryByName('${country.name}')">Details</button>`;
    //    const h3 = document.createElement('h3');
    //    h3.innerText = country.name;
    //    div.appendChild(h3);
    //    const p = document.createElement('p');
    //    p.innerText = country.capital;
    //    div.appendChild(p);
         contaienr.appendChild(div);
    });
}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]));
}

const displayCountryDetail = country => {
    console.log(country);
    const containerDiv = document.getElementById('country-detail');
    containerDiv.innerHTML =  `<h4>${country.name}</h4> 
    <p>population: ${country.population}</p>
    <p>Region: ${country.region}</p> 
    <img width= "200px" src="${country.flag}">`

}