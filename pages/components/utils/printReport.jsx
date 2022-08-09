import React, { useEffect } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const printReport = docName => {
  const input = document?.getElementById('pdfdiv');
  html2canvas(input).then(canvas => {
    var imgWidth = 200;
    var pageHeight = 290;
    var imgHeight = (canvas.height * imgWidth) / canvas.width;

    var heightLeft = imgHeight;

    const imgData = canvas.toDataURL('image/jpeg');
    const pdf = new jsPDF('p', 'mm', 'a4');
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      doc.addPage();
      doc.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(docName);
  });
};
