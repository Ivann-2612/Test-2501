import Ship from './Ship'

const Ships = (ships) => {
console.log(ships);
const divCompany = document.createElement('div')
divCompany.id = 'company'
divCompany.innerHTML = `
     <p>${ship.name}</p>
     <p>${ship.founded}</p>
     <p>${ship.headquarters.address}</p>
`
return divCompany
    //return ships.map(ship => Ship(ship))
   
}

export default Ships