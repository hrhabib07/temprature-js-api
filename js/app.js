const apiKey= `27294b2e4bc082a6d2af66ebb2e227ad
`;
const loadData = () =>{
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
};
const setInnerText = (id, value) =>{
    document.getElementById(id).innerText = value;
}
const displayData = info =>{
    setInnerText('city-name', info.name);
    setInnerText('temprature', info.main.temp);
    setInnerText('condition', info.weather[0].main);
    const url = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`
    document.getElementById('icon').setAttribute('src', url)
    console.log(info);
}