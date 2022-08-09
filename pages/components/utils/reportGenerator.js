// reportGenerator.js

import jsPDF from 'jspdf';
import 'jspdf-autotable';
// Date Fns is used to format the dates we receive
// from our API call
import { format } from 'date-fns';

// define a generatePDF function that accepts a regions argument
const generatePDF = regions => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const tableColumn = ['Id', 'Region Name', 'Region Code'];
  // define an empty array of rows
  const tableRows = [];

  // for each region pass all its data into an array
  regions?.map(region => {
    const regionData = [
      region.id,
      region.regName,
      region.regCode,
      // called date-fns to format the date on the region
      format(new Date(region.createdAt), 'yyyy-MM-dd')
    ];
    // push each region's info into a row
    tableRows.push(regionData);
  });

  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(' ');
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // region title. and margin-top + margin-left
  doc.text('Regions of the Country.', 14, 15);
  // we define the name of our PDF file.
  doc.save(`report_${dateStr}.pdf`);
};

export default generatePDF;
