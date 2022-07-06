const requestURL = 'json/data.json';
const cards = document.querySelector(".cards");

async function fetchCompanies() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    displayCompanies(data);
  } else {
    throw Error(response.statusText);
  }
}

function displayCompanies(data) {
  data.affiliates.forEach(company => {
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let logo = document.createElement('img');
    let membership = document.createElement('p');

    name.textContent = `${company.name}`;
    phone.textContent = `${company.phone}`;
    website.innerHTML = `${company.website}`;
    membership.textContent = `${company.membership} Member`;
    logo.setAttribute('src', company.logo);
    logo.setAttribute('alt', company.name);

    card.appendChild(h3);
    card.appendChild(image);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership);

    document.querySelector('div.directory').appendChild(card);
  });
}

fetchCompanies()

// BUTTONS

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
  cards.classList.add("grid");
  cards.classList.remove("list");
});

listbutton.addEventListener("click", () => {
  cards.classList.add("list");
  cards.classList.remove("grid");
});