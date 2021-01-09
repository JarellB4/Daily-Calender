function currenttime() {
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a')); 
    }
    setInterval(currenttime, 500);
  
   $("#NAMButton").on("click",()=> {
        
      let textArea =  document.getElementById("B").value;
      let StringifytextArea = JSON.stringify(textArea)
      localStorage.setItem("textArea", StringifytextArea )
    })

    $("#AMButton").on("click",()=> {
        
        let textArea =  document.getElementById("A").value;
        let StringifytextArea = JSON.stringify(textArea)
        localStorage.setItem("textArea", StringifytextArea )
      })

      $("#EAMButton").on("click",()=> {
        
        let textArea =  document.getElementById("C").value;
        let StringifytextArea = JSON.stringify(textArea)
        localStorage.setItem("textArea", StringifytextArea )
      })
      $("#TPMButton").on("click",()=> {
        
        let textArea =  document.getElementById("D").value;
        let StringifytextArea = JSON.stringify(textArea)
        localStorage.setItem("textArea", StringifytextArea )
      })
      $("#OpmButton").on("click",()=> {
        
        let textArea =  document.getElementById("E").value;
        let StringifytextArea = JSON.stringify(textArea)
        localStorage.setItem("textArea", StringifytextArea )
      })
      function backgroundColorEdit(){
        if (hourNow == currentTime){
            document.getElementsById("B").style.backgroundColor = "#ff0000";
        }else if (hourNow < currentTime){
            document.getElementsById("B").style.backgroundColor = "#d3d3d3";
        }else 
        {
            document.getElementsById("B").style.backgroundColor = "#90ee90";
        }
}
function backgroundColorEdit(){
    if (hourNow == currentTime){
        document.getElementsById("A").style.backgroundColor = "#ff0000";
    }else if (hourNow < currentTime){
        document.getElementsById("A").style.backgroundColor = "#d3d3d3";
    }else 
    {
        document.getElementsById("A").style.backgroundColor = "#90ee90";
    
    }
}
  
function backgroundColorEdit(){
    if (hourNow == currentTime){
        document.getElementsById("C").style.backgroundColor = "#ff0000";
    }else if (hourNow < currentTime){
        document.getElementsById("C").style.backgroundColor = "#d3d3d3";
    }else 
    {
        document.getElementsById("C").style.backgroundColor = "#90ee90";
    }
}
function backgroundColorEdit(){
    if (hourNow == currentTime){
        document.getElementsById("D").style.backgroundColor = "#ff0000";
    }else if (hourNow < currentTime){
        document.getElementsById("D").style.backgroundColor = "#d3d3d3";
    }else 
    {
        document.getElementsById("D").style.backgroundColor = "#90ee90";
    }
}
function backgroundColorEdit(){
    if (hourNow == currentTime){
        document.getElementsById("E").style.backgroundColor = "#ff0000";
    }else if (hourNow < currentTime){
        document.getElementsById("E").style.backgroundColor = "#d3d3d3";
    }else 
    {
        document.getElementsById("E").style.backgroundColor = "#90ee90";
    }
}