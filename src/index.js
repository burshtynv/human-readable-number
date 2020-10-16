module.exports = function toReadable (number) {
    const arrUnitsNumbers = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const arrDozensNumber = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];  
    if (number < 20) return arrUnitsNumbers[number];
    else if (number >= 20 && number < 100) {
      if (number % 10 === 0) return arrDozensNumber[number / 10 - 1];
      else return `${arrDozensNumber[Math.trunc(number / 10) - 1]} ${arrUnitsNumbers[number % 10]}`;
    }
    else if (number >= 100 && number < 1000) {
      if (number % 100 === 0) return `${arrUnitsNumbers[number / 100]} hundred`;
      else if (number % 100 < 20) return `${arrUnitsNumbers[Math.trunc(number / 100)]} hundred ${arrUnitsNumbers[number % 100]}`; 
      else if (number % 10 === 0) return `${arrUnitsNumbers[Math.trunc(number / 100)]} hundred ${arrDozensNumber[number % 100 / 10 - 1]}`;     
      else return `${arrUnitsNumbers[Math.trunc(number / 100)]} hundred ${arrDozensNumber[Math.trunc(number / 10) % 10 - 1]} ${arrUnitsNumbers[number % 10]}`;     
    }
  }
