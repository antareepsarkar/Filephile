import { PDFDocument } from 'pdf-lib';

async function pngToPdf(base64Img){
     const pdfDoc = await PDFDocument.create();
     const pngImage = await pdfDoc.embedPng(base64Img);
     const page = pdfDoc.addPage();
     page.drawImage(pngImage);
     const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
     return pdfDataUri;
}

async function jpgToPdf(base64Img){
     const pdfDoc = await PDFDocument.create();
     const jpgImage = await pdfDoc.embedJpg(base64Img);
     const page = pdfDoc.addPage();
     page.drawImage(jpgImage);
     const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
     return pdfDataUri;     
}  

export {pngToPdf, jpgToPdf};