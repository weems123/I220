function changeColor(event){
       //event.target.style.backgroundColor = "red";

       let response = event.target.getAttribute("data-color");
       console.log();
       //event.target.innerHTML = response;
        event.target.style.backgroundColor = response;
   }