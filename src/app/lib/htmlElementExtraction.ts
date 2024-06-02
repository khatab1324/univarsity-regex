export const htmlElementExtraction = (htmlElement: string) => {
  const regex = /<([a-zA-Z0-9]+)(\s+[^>]+|>)/g;
  const arrayOfElement: string[] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(htmlElement)) !== null) {
    arrayOfElement.push(match[1]);
  }

  return arrayOfElement;
};
