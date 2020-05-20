import axios from 'axios';


const worldUrl = 'https://api.covid19api.com/summary';
const countyUrl = 'https://covid19-us-api.herokuapp.com/county';

export const fetchUSACountyData = async () => {
    try {
        const { data: {message}} = await axios.get(countyUrl);
        console.log(message);
        return message;
    } catch (error) {

    }
}

export const fetchCountryData = async () => {
    try {
        const { data: {Countries}} = await axios.get(worldUrl);
        console.log(Countries);
        return Countries;
    } catch (error) {

    }
}
