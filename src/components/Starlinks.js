
import Starlink from './Starlink'

const Starlinks = (stLinks) => stLinks.map(link => Starlinks(link))

export default Starlinks