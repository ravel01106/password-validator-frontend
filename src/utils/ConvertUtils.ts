const convertStringToNumber = (expression:string) => {
  return !Number.isNaN(expression) ? parseInt(expression): 1;
}

const convertStringToBoolean = (expression:string) => {
  return expression === "true" ? true: false;

}

const ConvertUtils = {
  convertStringToNumber,
  convertStringToBoolean
}

export default ConvertUtils;