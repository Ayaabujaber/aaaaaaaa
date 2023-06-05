/* eslint-disable global-require */

const images = {
  'Clear sky': require('../assets/clear.png'),
  'Thunderstorm with Hail': require('../assets/hail.png'),
  'Overcast clouds': require('../assets/heavy-cloud.png'),
  'Few clouds': require('../assets/light-cloud.png'),
  'Heavy Rain': require('../assets/heavy-rain.png'),
  'Light Rain': require('../assets/light-rain.png'),
  'Shower rain': require('../assets/showers.png'),
  'Mix snow/rain': require('../assets/sleet.png'),
  'Snow': require('../assets/snow.png'),
  'Thunderstorm with heavy drizzle': require('../assets/thunder.png'),
};

export default weather => images[weather];
