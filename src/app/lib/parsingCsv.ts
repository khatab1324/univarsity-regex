"use server";
export async function pasingCsv(formData: FormData) {
  const file = formData.get("csvFile") as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  const decoder = new TextDecoder("utf-8");
  const csvString = decoder.decode(buffer);
  const parsedData = await parseCSV(csvString);
  //   console.log(parsedData);
  return parsedData;
}
const parseCSV = (data: string) => {
  const regex =
    /(\d{4}),(Level \d+),([A-Z0-9]+),"?([^,]+)"?,"?([^,]+)"?,"?([A-Z0-9]+)"?,"?([^,]+)"?,"?([^,]+)"?,"?([^"\n]+)"?,"?([^"\n]+)"?/g;
  //   const regex =
  //     /^(?:([^",]+))?(?=,)|(?<=,)(?:[^",]*)?(?=[,$])|((?<=")[^"(\s*,)][^"]*(?="))|(?<=")(?=")|(?<=,)(?:[^,"])*(?=$)/;
  const results = [];
  let match;

  while ((match = regex.exec(data)) !== null) {
    const row = [
      {
        year: match[1],
        Industry_aggregation_NZSIOC: match[2],
        Industry_code_NZSIOC: match[3],
        Industry_name_NZSIOC: match[4],
        Units: match[5],
        Variable_code: match[6],
        Variable_name: match[7],
        Variable_category: match[8],
        Value: match[9],
        Industry_code_ANZSIC06: match[10],
        anzsicGroups: match[11],
      },
    ];
    results.push(row);
  }

  return results;
};
// const parseCSV = (data: string) => {
//   //   const regex =
//   //     /(\d{4}),(Level \d+),([A-Z0-9]+),([^,]+),([^,]+),([A-Z0-9]+),([^,]+),([^,]+),"([^"]+)","([^"]+)"/g;

//   const results: any = [];
//   const lines = data.trim().split("\n");

//   lines.forEach((line) => {
//     const regex = /(?:^|,)(?:"([^"]*(?:""[^"]*)*)"|([^",]*))/g;
//     const fields = [];
//     let match;

//     while ((match = regex.exec(line)) !== null) {
//       console.log(match);

//       if (match[1] !== undefined) {
//         fields.push(match[1]); // Handle quoted fields and replace double quotes with single
//       } else {
//         fields.push(match[2]); // Handle unquoted fields
//       }
//     }

//     results.push(fields);
//   });

//   return results;
// };
