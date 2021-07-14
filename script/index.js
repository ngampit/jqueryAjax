// Ajax - get data from API 

let url = `https://api.tvmaze.com/search/shows?q=girls`; 

const searchDiv = ()=> {
  
$(".search").append(`
<form action="/action_page.php">
  <label for="search">Search</label>
  <div class="searchCss">
    <input type="search" id="search" name="search"><br><br>
    <input type="submit" value="Submit">
  </div>
</form>`)

}


// Append new div 
const appendDiv = (tit,img,sum) => {
  $(".show").append(`<div class="container">
  <div class="leftDiv">
  <img class="img" src=${img} alt="cat" width=50%;>
  </div>
  <div class="rightDiv">
  <h3>${tit}</h3>
  <p>${sum}</p>
  </div>
  </div>`);
}

// Ajax got API 
const getData = () => {
  
  
  searchDiv()
  $.ajax({ url:url, method:"get"}).then((response) => {  
  for(let data of response) {
    const title = data.show.name;
    const image = data.show.image.medium;
    const summary = data.show.summary;
    appendDiv(title,image,summary)
  }
  })
}


// render with Jquery 
$(document).ready(()=>{
  getData()
});