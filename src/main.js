const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function getAllNames() {
  axios.get(`${BASE_URL}/constellations`)
      .then(Response=> {
        let constellationNames
         = Response.data.map(constellation=> constellation.name)
         console.log(constellationNames)
         .catch(err=> console.log(err))

      })
}

function getConstellationsByQuadrant(quadrant) {
        axios.get(`${BASE_URL}/constellations`)
               .then(Response=> {
                 const constellations = Response.data.filter(stars=> stars.quadrant === quadrant)
                 console.log(constellations)
                   .catch(error=> console.log(error))
               })
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};