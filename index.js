// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
  return arr.slice(0,2)
}

const returnLastTwoDrivers = function(arr){
  return arr.slice(arr.length-2,arr.length)
}

let selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers]