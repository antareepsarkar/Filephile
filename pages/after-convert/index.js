function identifyOnlyName(fileName){
     let length = fileName.length;
     let onlyName = "";
     let flag = true;     
     for(i = 0; i < length; i ++){
          if(fileName[i] == '.'){
               flag = false;
          }
          else{
               if(flag == true){
                    onlyName += fileName[i];
               }
          }
     }
     return onlyName;
}

function DownloadFile(){
     let url = document.getElementById("downloadable").src;  
     let download_btn = document.getElementById("download_anchor");    
     download_btn.href = url;

     let fakePath = sessionStorage.getItem("fakePath");
     let convertTo = sessionStorage.getItem("extName");
     download_btn.download = `${identifyOnlyName(fakePath.substring(12))}-filephile.${convertTo}`;
}