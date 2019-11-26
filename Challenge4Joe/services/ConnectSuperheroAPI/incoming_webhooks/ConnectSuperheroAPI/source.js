exports = function(payload) {
  var queryArg = payload.body.text() || '';
  if(queryArg.length > 0){
    let atlas = context.services.get("mongodb-atlas");
    let superheroes = atlas.db("AtlasChallenge").collection("superheroes");
    superheroes.insertOne({ "alias" : queryArg, "superheroStatus" : 8 });
    return ({ok:true});
  }
  return ({ok:false});
};