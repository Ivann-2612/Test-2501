import axios from 'axios'

const BASE_URL = 'https://api.spacexdata.com/v4'
const COMPANY = '/company'
const STARLINK = '/starlink'

export const getPrimaryData = () => axios.get(`${BASE_URL}${COMPANY}`)
export const getStarLinkSatelite = () => axios.get(`${BASE_URL}${STARLINK}`)


