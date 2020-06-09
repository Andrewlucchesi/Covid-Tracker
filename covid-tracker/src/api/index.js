import axios from 'axios';

const worldUrl = 'https://api.covid19api.com/summary';
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
    console.log(Countries);
    return Countries;
  } catch (error) {}
}