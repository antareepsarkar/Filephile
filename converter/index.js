import { PDFDocument } from 'pdf-lib'

async function pngToPdf(imgObjURL){
     const imgBytes = await imgObjURL.arrayBuffer();
     const pdfDoc = await PDFDocument.create();
     const pngImage = await pdfDoc.embedPng(imgBytes);
     const page = pdfDoc.addPage();
     page.drawImage(pngImage);
     const pdfBytes = await pdfDoc.save();
     return pdfBytes;
}

async function jpgToPdf(imgObjURL){
     const imgBytes = await imgObjURL.arrayBuffer();
     const pdfDoc = await PDFDocument.create();
     const jpgImage = await pdfDoc.embedJpg(imgBytes);
     const page = pdfDoc.addPage();
     page.drawImage(jpgImage);
     const pdfBytes = await pdfDoc.save();
     return pdfBytes;     
}  