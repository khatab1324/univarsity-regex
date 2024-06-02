export const dateValidate = (dateString: string) => {
  const regex =
    /^((19[4-9][0-9])-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))|((20[0-2][0-4])-((0[1-5]))-((0[1-9])|([1-2][0-9])|(3[0-1]))))$/g;
  return regex.test(dateString);
};
