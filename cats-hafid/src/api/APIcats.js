const axios = require('axios');


function getCatFact(callback) {
    try {
      axios.get('https://catfact.ninja/facts?limit=4&max_length=140').then((result) => {
          callback(result.data.data);
      });
    } catch (error) {
      console.error(error);
    }
}



export { getCatFact }