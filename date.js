

exports.currentDate = function(){
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month:"long"
  }
  return today.toLocaleDateString("en-US",options);
};

exports.addNum = function(num1,num2){
  return num1+num2;
};
