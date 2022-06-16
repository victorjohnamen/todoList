

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
  //just a test if i can pass a parameter base on my understanding of the concept
  //guess what u can!
  return num1+num2;
};
