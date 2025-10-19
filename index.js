function show(){
     const img = document.createElement("img");
     img.src = URL.createObjectURL(document.getElementById("file_inp").files[0]);
     document.getElementById('body').appendChild(img);
}

function Convert(){

}

function DownloadFile(){
     browser.downloads.download({
     url: downloadUrl,
     filename: "my-image-again.png",
     conflictAction: "uniquify",
     });
}