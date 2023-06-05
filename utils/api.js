export const fetchLocationId = async city => {
  const response = await fetch(
    `https://api.weatherbit.io/v2.0/current?city=${city}?&key=63471656296a45a9b3208e51ae7aa95f`,
  );
  
  const locations = await response.json();
  return {
    location: locations.data[0].city_name,
    weather: locations.data[0].weather.description,
    temperature: locations.data[0].app_temp,
  };
};
