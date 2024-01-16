function findMatching(drivers, _name) {
    return drivers.filter(driver => driver.toLowerCase() == _name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

function matchName(drivers, _name) {
    return drivers.filter(driver => driver && driver.name && driver.name.toLowerCase() === _name.toLowerCase());
}
