export const dateValidate = (dateString: string) => {
  const regex =
    /^((19[4-9][0-9])|(20[0-2][0-4]))-((1[1-2])|[1-9])-([0-2][1-9]|[1-9]|3[0-1])$/g;
  return regex.test(dateString);
};
