//Random animal fetch button
const apiURL = 'https://extinct-api.herokuapp.com/api/v1/animal/';
const buttonGetAPIData = document.getElementById('buttonGetAPI');
const apiContentDisplayed = document.getElementById('apiContents');
const buttonDoSomethingWithAPIData = document.getElementById('buttonDoSomethingWithAPI');
const theThingDisplayed = document.getElementById('theThingDisplayed'); //NOTHING YET?!?

//Get a list of...
const apiURLJellyBean = 'https://jellybellywikiapi.onrender.com/api/beans';
const buttonGetAPIDataJellyBean = document.getElementById('buttonGetAPIJellyBean');
const apiContentDisplayedJellyBean = document.getElementById('apiContentsJellyBean');
const buttonDoSomethingWithAPIDataJellyBean = document.getElementById('buttonDoSomethingWithAPIJellyBean');
const theThingDisplayedJellyBean = document.getElementById('theThingDisplayedJellyBean'); //show full table
let actualJellyBeanData = [];

//Get a new random animal
const pressButtonToGetAPI = () => {
    fetch(apiURL)
    .then(response => response.json())
    .then(animalDataFromAPI => {
        console.log(animalDataFromAPI);
        buttonGetAPIData.textContent = 'Loading...';
        apiContentDisplayed.textContent = animalDataFromAPI.data[0].commonName;
        buttonGetAPIData.textContent = 'Get Animal';
  }  )
};

//Get a list of Jelly beans
const pressButtonToGetAPIJellyBean = () => {
    fetch(apiURLJellyBean)
    .then(response => response.json())
    .then(jellyBeanDataFromAPI => {
        const beans = jellyBeanDataFromAPI.items ?? [];
        actualJellyBeanData = jellyBeanDataFromAPI.items ?? [];
                console.log(actualJellyBeanData);
        apiContentDisplayedJellyBean.innerHTML = beans
            .map(bean => `<li>${bean.flavorName}</li>`)
            .join('')
            ;
        }  )};


// Display the entire table of Jelly Bean data
function makeJellyBeanDataTable() {
    if (!actualJellyBeanData.length) {
        theThingDisplayedJellyBean.textContent = 'No jelly beans loaded';
        return;}

    //Make Table Header
    const columns = Object.keys(actualJellyBeanData[0]);
    let tableHTML = `<table class="jellyBeanTable id="jellyBeanTable"><thead><tr>`;
    tableHTML += columns.map(col => `<th>${col}</th>`).join('');  //<--- <--- <--- LEARN AND UNDERSTAND THIS LINE <--- <--- <--- UNFINISHED!!!
    tableHTML += `</thead></tr>`;

    //Make Table Body
    tableHTML += '<tbody>';
    actualJellyBeanData.forEach(bean => {
        tableHTML += '<tr>';
        tableHTML += columns.map(col => `<td>${bean[col]}</td>`).join(''); //<--- <--- <--- LEARN AND UNDERSTAND THIS LINE <--- <--- <---
        tableHTML += '</tr>';
    });
    
    tableHTML += `</tbody></table>`;
    theThingDisplayedJellyBean.innerHTML = tableHTML;

    };










buttonGetAPIDataJellyBean.addEventListener('click', pressButtonToGetAPIJellyBean);
buttonGetAPIData.addEventListener('click', pressButtonToGetAPI);
//do something with animal
buttonDoSomethingWithAPIDataJellyBean.addEventListener('click', makeJellyBeanDataTable);

