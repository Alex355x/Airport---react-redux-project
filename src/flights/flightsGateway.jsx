
const baseUrl = 'https://api.iev.aero/api/flights/10-02-2020';


export const fetchFlightsList = () => {
  return fetch(baseUrl)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('failed to get flightsList');
    })
   
};


