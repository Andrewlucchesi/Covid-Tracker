import axios from 'axios';

const worldUrl = 'https://api.covid19api.com/summary';
const countyUrl = 'https://covid19-us-api.herokuapp.com/county';
const testingLocations = 'https://raw.githubusercontent.com/covid-19-testing/locations/master/california/complete.json';

export const fetchTestingLocs = async () => {
  try {
    const data = await axios.get(testingLocations);
    return data;
  } catch (error) {}
}

export const fetchCountryData = async () => {
  try {
    const { data: {Countries}} = await axios.get(worldUrl);
    return Countries;
  } catch (error) {}
}
