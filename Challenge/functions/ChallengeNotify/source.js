exports = function(changeEvent) {
  
  console.log("IN CHALLENGE NOTIFY FUNCTION!");
  const db = context.services.get("mongodb-atlas").db("sample_training");
  const companies = db.collection("companies");
  
  const TwilioService = context.services.get("TwilioReInventChallenge");
  
  var text = `${context.values.get("Competitor")} configured the trigger correctly!`;
 
  // TwilioService.send({
  //   to: "+16126007305",
  //   from: context.values.get("TwilioNumber"),
  //   body: text
  // });
 
  // TwilioService.send({
  //   to: "+16504836372",
  //   from: context.values.get("TwilioNumber"),
  //   body: text
  // });
  
 
 TwilioService.send({
    to: "+15124230644",
    from: context.values.get("TwilioNumber"),
    body: text
  });
 
};
