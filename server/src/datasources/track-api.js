const {RESTDataSource} = require('apollo-datasource-rest');
const https = require('https');


const agent = new https.Agent({
  rejectUnauthorized: false
})

class TrackAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
    }

    getTracksForHome() {
        return this.get('tracks', {}, { agent });
    }

    getAuthor(authorId) {
        return this.get(`author/${authorId}`, {}, { agent });
    }
  }

  module.exports = TrackAPI;