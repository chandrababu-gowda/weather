let locationSearch = document.querySelector(".enter-location");
let submit = document.querySelector(".submit-btn");

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
          console.log(response);
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
