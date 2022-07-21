export const newsOptions = {
    ethod: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.NEWS_API_KEY,
		'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
	}
}

export const fetchData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const fetchDataWithOptions = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}

