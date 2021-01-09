function currenttime() {
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a')); 
    }
    setInterval(currenttime, 500);
  
   $("#9amButton").on("click",()=> {
        
      let textArea =  document.getElementById("B").value;
      let StringifytextArea = JSON.stringify(textArea)
      localStorage.setItem("textArea", StringifytextArea )
    })

    $("#10amButton").on("click",()=> {
        
        let textArea =  document.getElementById("A").value;
        let StringifytextArea = JSON.stringify(textArea)
        localStorage.setItem("textArea", StringifytextArea )
      })

      $("#11amButton").on("click",()=> {
        
        let textArea =  document.getElementById("C").value;
        let StringifytextArea = JSON.stringify(textArea)
        localStorage.setItem("textArea", StringifytextArea )
      })
      $("#12pmButton").on("click",()=> {
        
        let textArea =  document.getElementById("D").value;
        let StringifytextArea = JSON.stringify(textArea)
        localStorage.setItem("textArea", StringifytextArea )
      })
      $("#1pmButton").on("click",()=> {
        
        let textArea =  document.getElementById("E").value;
        let StringifytextArea = JSON.stringify(textArea)
        localStorage.setItem("textArea", StringifytextArea )
      })

// $(document).ready(function(){
//     $(".button").on("click", function({
//        //distinguish which save button was clicked by using window obj THIS  $(this)
//        //grab value from our textarea

//     //  $(this)
//     })


// })

/* <div row id="9am">
    <div col >9am</div>
    <textarea col></textarea>
    <buton col>save</buton>
<div> */