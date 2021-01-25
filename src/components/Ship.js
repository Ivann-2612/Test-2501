import Ships from './Ships'
const app = document.querySelector('#app')

const Ship = (ship) => {
    const divShips = document.createElement('div')
    divShips.classList.add('divShips')

    const pCompanyFounded = document.createElement('p')
    pCompanyFounded.textContent = ship.founded
    const pCompanyName = document.createElement('p')
    pCompanyName.textContent = ship.name
    const pCompanyAdress = document.createElement('p')
    pCompanyAdress.textContent = ship.headquarters.address
    const pCompanyState = document.createElement('p')
    pCompanyState.textContent = ship.headquarters.state
    const pCompanyCity = document.createElement('p')
    pCompanyCity.textContent = ship.headquarters.city

    divShips.append(pCompanyFounded,pCompanyName,pCompanyAdress,pCompanyState,pCompanyCity)
    app.append(divShips)
    console.log(divShips);
    return divShips
    
}

export default Ship

//(Узети са API-ја)ИмеГодина оснивањаПуна локација (Адреса,Држава,Град)
// ceo: "Elon Musk"
// coo: "Gwynne Shotwell"
// cto: "Elon Musk"
// cto_propulsion: "Tom Mueller"
// employees: 8000
// founded: 2002
// founder: "Elon Musk"
// headquarters: {address: "Rocket Road", city: "Hawthorne", state: "California"}
// id: "5eb75edc42fea42237d7f3ed"
// launch_sites: 3
// links: {website: "https://www.spacex.com/", flickr: "https://www.flickr.com/photos/spacex/", twitter: "https://twitter.com/SpaceX", elon_twitter: "https://twitter.com/elonmusk"}
// name: "SpaceX"

