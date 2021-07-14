// Ajax - get data from API 
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

let info = "girls";
const searchDev = () => {
  $("#form").submit((e)=> {
    e.preventDefault();
    info = $("input").first().val();
    getData(info)
  })
}

// Ajax got API 
const getData = (fromSearch) => {
  url = `http://api.tvmaze.com/search/shows?q=${fromSearch}`  
  $.ajax({ url, method:"get"}).then((response) => {  
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
  searchDev()
});