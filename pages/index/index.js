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



function show(){
     const img = document.createElement("img");
     img.src = URL.createObjectURL(document.getElementById("file_inp").files[0]);
     document.getElementById('body').appendChild(img);
}

function afterConvert(){
     sessionStorage.setItem("fakePath", document.getElementById("file_inp").value);
     let convertOptions = document.getElementById("convert_to"); 
     let convertTo = (convertOptions.options)[convertOptions.selectedIndex].value;
     sessionStorage.setItem("extName", convertTo);     
}