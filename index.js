import { PDFDocument } from 'pdf-lib'

function show(){
     const img = document.createElement("img");
     img.src = URL.createObjectURL(document.getElementById("file_inp").files[0]);
     document.getElementById('body').appendChild(img);
}

async function ImageToPDF(imgObjURL){
     const imgBytes = await imgObjURL.arrayBuffer();
     const pdfDoc = await PDFDocument.create();
     const pngImage = await pdfDoc.embedPng(imgBytes);
     const page = pdfDoc.addPage();
     page.drawImage(pngImage);
     const pdfBytes = await pdfDoc.save();
     return pdfBytes;
}

function DownloadFile(){
     browser.downloads.download({
     url: downloadUrl,
     filename: "my-image-again.png",
     conflictAction: "uniquify",
     });
}