const Starlink = (starlink) => {
const starDiv = document.createElement('div')
starDiv.innerHTML = `
          <p>${starlink.version}</p>
          <p>${starlink.spaceTrack.TLE_LINEO}</p>
`
return starDiv
}

export default Starlink