



   let squareOne = {color: "#7c7e82", height: 200, width: 200}

   let newSquare = document.createElement("div");
   newSquare.style.background = squareOne.color;
   newSquare.style.height=squareOne.height + "px";
   newSquare.style.width=squareOne.width + "px"
   newSquare.style.margin = "5px";
   newSquare.style.cssFloat = "left";
   div.appendChild(newSquare)

   let squareTwo = {color: "#7c7e82", height: 200, width: 200}

   let newerSquare = document.createElement("div");
   newerSquare.style.background = squareOne.color;
   newerSquare.style.height=squareOne.height + "px";
   newerSquare.style.width=squareOne.width + "px"
   newerSquare.style.margin = "5px";
   newerSquare.style.cssFloat = "left";
   test.appendChild(newerSquare)

   let squareThree = {color: "#7c7e82", height: 200, width: 200}

   let newestSquare = document.createElement("div");
   newestSquare.style.background = squareOne.color;
   newestSquare.style.height=squareOne.height + "px";
   newestSquare.style.width=squareOne.width + "px"
   newestSquare.style.margin = "5px";
   newestSquare.style.cssFloat = "left";
   testing.appendChild(newestSquare)

   element.addEventListener("click", beenClicked);

   function beenClicked(event){
       event.target.style.backgroundColor = "red";

       let response = event.target.getAttribute("data-color");
       event.target.innerHTML = response;

   }