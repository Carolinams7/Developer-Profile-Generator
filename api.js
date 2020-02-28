const axios = require("axios")

const api = {
getUser(username){
    return axios.get(`
      https://api.github.com/users/${username}?client_id=Carolinams7&client_secret=arrumaremprego1  
`)
.catch(function(err){
    console.log(err)
})
}
}

module.exports = api;
