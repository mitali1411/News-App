export const getWeather = async(city) => {
    const response = await fetch (`https://api.weatherapi.com/v1/current.json?key=ff2001bd05564f74a84163058241102&q=indore&aqi=yes`)
    const data = await response.json();
    return data;
}