import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";

import {jpgToPdf, pngToPdf} from "./converter/index.js"; 

const app = express();
const port = 3000;
app.use(cors({origin: "http://127.0.0.1:5500"}));
app.use(bodyParser.json());

app.post("/converter-api", async (req, res) => {
     let fileExt = req.body.fileExt;
     let convertExt = req.body.convertExt;
     let inputFile = req.body.inputFile;
     let convertedFile = "";
     let converted = true;
     if(fileExt == "png"){
          if(convertExt == "pdf"){
               convertedFile = await pngToPdf(inputFile);
          }
     }
     else if(fileExt == "jpg"){
          if(convertExt == "pdf"){
               convertedFile = await jpgToPdf(inputFile);
          }          
     }
     console.log(typeof(convertedFile));
     let conversionDetails = {
          "converted": converted,
          "file": convertedFile
     };

     res.json(conversionDetails);
     console.log(`Converted Successfuly`);
});

app.listen(port, (error) => {
     if(!error){
          console.log(`Server Running on port ${port}`);
     }
     else{
          console.log("Run failed");
     }
});


