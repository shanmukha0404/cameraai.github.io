var data;
fetch("data.json")
.then((response)=>{
    return response.json();
})
.then((mydata)=>{
    console.log(mydata);
    data=mydata;
    appendData(data);
})


function appendData(data){
    var main=document.getElementById("xyz");
        for(var i=0;i<data.length;i++){   
        var p=document.createElement("div");
        p.classList.add("p-3","cards");
        let product=`<a target="_blank"  onclick="setId(${data[i].id})" style="text-decoration:none"> 
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${data[i].images[0]}" alt="Card image cap" style="height:'250px'">
        <div class="card-body">
          <h5 class="card-title">${data[i].model}</h5>
          <p class="card-text">MRP: ${data[i].price}</p>
        </div>
        </div>
      </a>`
        p.innerHTML+=product;
        main.appendChild(p);
        
    }    
}    
function setId(id){
    // localStorage.setItem("prdId",id);
    window.document.location="landing.html"+"?id="+id;
}    




// ===================Filters===============================
function applyFilters(){
    let b=document.getElementsByClassName("brand");
    let brandArray=[];
    let brandListingArray=[];
  let mainArray=[];
  let listingArray=[];
    

  for(let x of b){
      if(x.checked){ 
          brandArray.push(x.value);
      }
  }
  console.log(brandArray)
  if(brandArray.length!==0){
      for(let i=0;i<brandArray.length;i++){
          for(let j=0;j<data.length;j++){
              if(brandArray[i]===data[j].brand){
                  brandListingArray.push(data[j].id);
              }
          }
      } 
      console.log(brandListingArray);
  }

  
  
  let temp=0;

  if (brandListingArray.length !== 0) {
      for(let i=0;i<brandListingArray.length;i++){
                  for(let k=0;k<mainArray.length;k++){
                      if(mainArray[k]===brandListingArray[i]){
                          temp++;
                      }
                  }
                  if(temp===0){
                      mainArray.push(brandListingArray[i]);
                  }
              }
          }
  
  else if(brandListingArray.length!==0){
      for(let i=0;i<brandListingArray.length;i++){
          mainArray.push(brandListingArray[i]);
      }
  }
  
  console.log(mainArray);

  for(let i=0;i<mainArray.length;i++){
      let elem=data.find((e)=>{
          if(mainArray[i]===e.id){
              return true;
          }
      })
      listingArray.push(elem);
  }
  console.log(listingArray);
  document.getElementById("xyz").innerHTML=""; 
  appendData(listingArray);
  if(listingArray.length===0){
      if(brandListingArray.length!==0){
      let res=document.getElementById("mainId");
      res.innerHTML="Product Not Found";
      res.style.color="red";
      res.style.fontWeight="bolder";
      res.style.fontSize="20px";
      }
      else{
          appendData(data);
      }
  }
}