//SpaceX - АпликацијаSpaceX - Апликација1. Исписати основне податке о компанији (Узети са API-ја)ИмеГодина оснивањаПуна локација (Адреса,Држава,Град)
//2. 
//Исписати //све StarLink сателите и омогућити селектовање сателита на основу верзије (објекат има поље version)Исписати TLE_LINE0 и верзију3.
// Исписати следеће лансирање 
//(next)СликаИме4. На основу 3. задатка, исписати одговарајућу ракетуПомоћ: Користити id ракете како бисте са сервера дохватили одговарајућуИме ракете и једна 
//слика* Напомене: - За други задатак: - Без селекта 60% поена - ручно додавање опцијa 30% поена - За последњи задатак можете узети било који id (50% поена
//https://github.com/r-spacex/SpaceX-API/tree/master/docs/v4



import { getPrimaryData } from "./service"
import { getStarLinkSatelite } from "./service"
import Ships from './components/Ships'
import Starlinks from './components/Starlinks'
import Select from './components/Select'
import Starlink from './components/Starlink'
import Ship from './components/Ship'
const app = document.querySelector('#app')
const main = document.querySelector('main')

let ships = []  
let showShips = []

getPrimaryData().then(res => {

    main.append(Ships(res.data))
    // ships = res.data
    // showShips = ships
    // app.append(...Ships(showShips))
    
    //console.log(showShips)
})

getStarLinkSatelite().then(res => {
    let starlinks = res.data
    let version = [...new Set(starlinks)]
    main.append(...Starlinks(res.data))
    const select = Select(version)
    select.addEventListener('change', (e) => {
        main.innerHTML = ''
        starlinks = starlinks.filter(starlink => starlinkversion == e.target.value)
        main.append(...Starlinks(starlinks))
    // showShips = ships
    // app.append(...Ships(showShips))
})
    
    

   
    
