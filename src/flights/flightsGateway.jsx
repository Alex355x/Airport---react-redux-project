 import moment from "moment";

const currentDate = moment().format("DD-MM-YYYY");


const baseUrl = `https://api.iev.aero/api/flights/${currentDate}`;
// const baseUrl = 'https://api.iev.aero/api/flights/04-10-2020';


export const fetchFlightsList = () => {
  return fetch(baseUrl)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('failed to get flightsList');
    })
   
};


