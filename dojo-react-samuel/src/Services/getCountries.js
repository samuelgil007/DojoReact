const BASE_URL = "https://restcountries.eu/rest/v2/region"

function getCountries(continent){
    const res  = await fetch(`${BASE_URL}/${countinent}`)
    const data = await res.json()
    return data
}

export default getCountries;