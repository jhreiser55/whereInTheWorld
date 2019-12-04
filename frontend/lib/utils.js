require("isomorphic-fetch");


function getProfile(food) {
  console.log("hello");
  return fetch(`http://localhost:8080/api/info?q=${food}`).then(function(resp) {
    return resp.json();
  });
}

function handleError(error) {
  console.warn(error);
  return null;
}

module.exports = {
  getInfo: function(food) {
    if(food != null){
      return getProfile(food).catch(handleError);
    }

  }
};