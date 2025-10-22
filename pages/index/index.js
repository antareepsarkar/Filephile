function identifyExtension(fileName){
     let length = fileName.length;
     let extension = "";
     let flag = false;     
     for(i = 0; i < length; i ++){
          if(fileName[i] == '.'){
               flag = true;
          }
          else{
               if(flag == true){
                    extension += fileName[i];
               }
          }
     }
     return extension;
}


let shownOnce = false;
function show(){
     if(!shownOnce){
          const img = document.createElement("img");
          img.src = URL.createObjectURL(document.getElementById("file-input").files[0]);
          document.getElementById('body').appendChild(img);
          shownOnce = true;
     }
}

async function blobTobase64(blobFile){
  
}

async function convert(){
     console.log("Function Ran");

     let fileName = await (document.getElementById("file-input").value).substring(12);
     let fileExt = identifyExtension(fileName);

     document.getElementById("detected-ext").innerHTML = `Detected file type: ${fileExt}`;

     let convertOptions = document.getElementById("convert-to"); 
     let convertExt = (convertOptions.options)[convertOptions.selectedIndex].value; 

     const blobFile = await (document.getElementById("file-input").files)[0];

     const reader = new FileReader();
     reader.readAsDataURL(blobFile);

     reader.addEventListener("load", async (event) => {
          let inputFile = reader.result;
          let convertedFileDetails = await fetch("http://localhost:3000/converter-api",
               {
                    headers:{
                         "Accept": "application/json",
                         'Content-Type': "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify({
                         fileExt: fileExt,
                         convertExt: convertExt,
                         inputFile: inputFile
                    })
               }
          );
          let fileDetails = await convertedFileDetails.json();
          sessionStorage.setItem("convertedFile", fileDetails.file);                    
     });
}

async function afterConvert(){
     if(document.getElementById("file-input").value == ""){
          alert("Input a file");
          return;
     }
     
     sessionStorage.setItem("fakePath", document.getElementById("file-input").value);
     let convertOptions = document.getElementById("convert-to"); 
     let convertTo = (convertOptions.options)[convertOptions.selectedIndex].value;
     sessionStorage.setItem("extName", convertTo); 
     
     let convertedFile = await convert();
     sessionStorage.setItem("convertedFile", convertedFile);
}