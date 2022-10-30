let locationSearch = document.querySelector(".enter-location");
let submit = document.querySelector(".submit-btn");
let displayTemp = document.querySelector(".temp");
let displayDesc = document.querySelector(".desc");
let displayImg = document.querySelector(".icon");

const options = {
  method: "GET",
};

submit.addEventListener("click", () => {
  let locationEntered = locationSearch.value;
  fetch(
    `http://dataservice.accuweather.com/locations/v1/search?q=${locationEntered}&apikey=KFN3QrWNJCPTSSwZ8TGjWPraDWLInSFV`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err))
    .then((response) => {
      let locationKey = response[0].Key;
      fetch(
        `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=KFN3QrWNJCPTSSwZ8TGjWPraDWLInSFV`,
        options
      )
        .then((response) => response.json())
        .catch((err) => console.error(err))
        .then((response) => {
          let temperature = response[0].Temperature.Metric.Value;
          let unit = response[0].Temperature.Metric.Unit;
          let description = response[0].WeatherText;
          let icon = response[0].WeatherIcon;
          displayTemp.innerHTML = `${temperature} °${unit}`;
          displayDesc.innerHTML = `${description}`;
          displayImg.src = `./images/${icon}.png`;
          console.log(response);
          console.log(temperature, unit, description);
        });
    });
});

// Delhi

//  Location Key ---- http://dataservice.accuweather.com/locations/v1/search?q=Delhi&apikey=KFN3QrWNJCPTSSwZ8TGjWPraDWLInSFV;

// apikey  =  KFN3QrWNJCPTSSwZ8TGjWPraDWLInSFV
// Delhi Lat = 28.643  Lon = 77.118
// Location Key = 202396

//  Current forecast ---- http://dataservice.accuweather.com/currentconditions/v1/202396?apikey=KFN3QrWNJCPTSSwZ8TGjWPraDWLInSFV

//  5 days forecast ---- http://dataservice.accuweather.com/forecasts/v1/daily/5day/202396?apikey=KFN3QrWNJCPTSSwZ8TGjWPraDWLInSFV
