const convertStringToNumber = (expression:string) => {
  return !Number.isNaN(expression) ? parseInt(expression): 1;
}

const convertStringToBoolean = (expression:string) => {
  return expression === "true" ? true: false;

}

const Convert = {
  convertStringToNumber,
  convertStringToBoolean
}

export default Convert;