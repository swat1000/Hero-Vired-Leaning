function convertTwoDigitYearsToFourDigitYears(years) {
    let convertedYears = [];
    for (let i = 0; i < years.length; i++) {
      let year = years[i];
      if (year < 35) {
        convertedYears.push(2000 + year);
      } else {
        convertedYears.push(1900 + year);
      }
    }
    return convertedYears;
  }

  let years = [77,15,85] 
  let convertedYears = convertTwoDigitYearsToFourDigitYears(years)
  console.log(convertedYears)
   