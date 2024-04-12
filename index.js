// Code your solution here

function findMatching(drivers, name) {
    const matchingDrivers = [];
    for (const driver of drivers) {
      if (driver.toLowerCase() === name.toLowerCase()) {
        matchingDrivers.push(driver);
      }
    }
    return matchingDrivers;
  }
  
  function fuzzyMatch(drivers, name) {
    const matchingDrivers = [];
    for (const driver of drivers) {
      if (driver.toLowerCase().startsWith(name.toLowerCase())) {
        matchingDrivers.push(driver);
      }
    }
    return matchingDrivers;
  }
  
  function matchName(drivers, name) {
    const matchingDrivers = [];
    for (const driver of drivers) {
      if (driver.name.toLowerCase() === name.toLowerCase()) {
        matchingDrivers.push(driver);
      }
    }
    return matchingDrivers;
  }
  
  
  
  