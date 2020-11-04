// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2)

const returnLastTwoDrivers = (drivers) => drivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (value) => {
    return (value2) => value * value2
}

const fareDoubler = (fare) => fare * 2
const fareTripler = (fare) => fare * 3

const selectDifferentDrivers = (drivers,whichFunction) => {
   return  whichFunction(drivers)
}