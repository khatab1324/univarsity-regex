export function checkSringthOfPassword(password: string) {
  let count = 0;
  count += checkForValidation(new RegExp("[A-Z a-z]{3,}"), password);
  count += checkForValidation(new RegExp("[0-9]{1,}"), password);
  count += checkForValidation(new RegExp("\\w{8,}"), password);
  count += checkForValidation(new RegExp("\\W{1,}"), password);
  count += checkForValidation(new RegExp("[A-Z]{1,}"), password);
  //TODO :use reducer
  
  return count;
}
const checkForValidation = (regex: RegExp, password: string): number => {
  const isValideString = regex.test(password);
  return isValideString ? 1 : 0;
};
