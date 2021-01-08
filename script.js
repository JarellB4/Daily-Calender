function currenttime() {
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a')); 
    }
    setInterval(currenttime, 500);
  
//    $(document).ready(function(){
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