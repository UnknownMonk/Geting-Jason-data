let pageCounter = 1;
let btn = document.getElementById("btn");
let animalContainer = document.getElementById("animal-info");


btn.addEventListener("click", () => {
  const ourRequest = new XMLHttpRequest();

  ourRequest.open(
    "GET",
    "https://learnwebcode.github.io/json-example/animals-" + pageCounter + ".json"
  );

  ourRequest.onload = function() {
    let ourData = JSON.parse(ourRequest.responseText);

    renderHTML(ourData);
    
    
  };

  ourRequest.send();
  pageCounter++;
  if(pageCounter > 3) {
    btn.classList.add("hide-me");
  }

});

function renderHTML(data) {
   let htmlString = "";

  for (i = 0; i < data.length; i++){
    htmlString += `<p>` + data[i].name + ` is a ` + data[i].species +  ` that likes `;
    for(ii = 0; ii < data[i].foods.likes.length; ii++){
      if (ii == 0) {
        htmlString += data[i].foods.likes[ii];
      }else {
        htmlString += ` and ` + data[i].foods.likes[ii];
      }
    }

    htmlString += `and dislikes `;

     for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
       if (ii == 0) {
         htmlString += data[i].foods.dislikes[ii];
       } else {
         htmlString += ` and ` + data[i].foods.dislikes[ii];
       }
     }
    

    htmlString += ` .</p>`

    
  }

 

 animalContainer.insertAdjacentHTML("beforeend", htmlString);
  
}
