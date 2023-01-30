function getYear(year) {
    if (year < 35) {
      return "20" + year;
    } else {
      return "19" + year;
    }
  }
  
  let year = 15;
  console.log(getYear(year));