fetch('data.json')
    .then(function (response) {
      return response.json();
  })
  .then( (data)=>{
      appendData(data);
      //console.log(data[0].name)
  })
  .catch(function (err){
      console.log(err);
  });
  
  var price=0;
  function appendData(data) { 
    //   alert("Loading") ;
      var arr=localStorage.getItem("carts");
      let array=JSON.parse(arr);
      
     
      for(var j=0;j<array.length;j++){
        var i=array[j];
        price+=data[i].price;
        console.log(data[i].name);
        let mainContainer=document.getElementById("carts");
        let div=document.createElement("div");
        div.classList.add("container","p-2");

        let content=`
        <div class="row" style="border:1px solid gray;border-radius:5px">
        <br>
            <!-- Flex for the entire row -->
    <div class="d-flex flex-column bd-primary mb-3">
      <div class="p-2 bd-highlight">
        <!-- Gird to divide into columns -->
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div class="d-flex flex-column">
                <img src="${data[i].images[0]}" alt"..." height="200px" width="300px">
              </div>
            </div>
            <div class="col-sm-6 ml-5">
              <strong>${data[i].model}</strong><br>
              <label><strong> M R P : </strong>${data[i].price} /-</label><br>
              <lable><strong>Offer Price : <s class="text-danger">${(data[i].price)+1000} /- </s>&nbsp; <label class="text-success bg-warning"> ${data[i].price} /-</label></strong></lable><br>
              <label><strong> You saved Rs : </strong>1000 /- </label><br>
              <label><strong> Discount : </strong>${data[i].discount} %</label><br>
              <h3>Assured by CameraAI</h3>
            </div>
            <div class="col-sm mt-5 pt-5">
            <button type="button" class="btn btn-danger" onclick=removeItem(${data[i].id})>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>`
        div.innerHTML+=content;
        mainContainer.appendChild(div);
    }
 
    var sideContainer=document.getElementById("priceDetails");
    let div=document.createElement("div");
    div.classList.add("container","p-2");
    
    let content=`
    
    <div class="container-fluid">
  <div class="row">
    
    <div class="col-9"><button class="btn btn-success"">Prosceed To Pay</button></div>
    <div class="col ">
    <div class="d-flex" width="auto" style="border:1px solid gray;border-radius:5px">
        <div class="d-flex justify-content-end bd-highlight">
            <div class="p-2">Total Amount :<strong> `+price+` </strong>/-</div>
        </div>
    </div>

    </div>
  </div>
</div>
    `
    div.innerHTML+=content;
    sideContainer.appendChild(div);

    let div2=document.createElement("div");
    div.classList.add("container","p-2");
    // let button1=`
    // <center><button class="btn btn-success"">Prosceed To Pay</button></center>
    //     `
        div2.innerHTML+=button1;
        sideContainer.appendChild(div2);
}

function removeItem(id){
    let arr=localStorage.getItem("carts");
    let array=JSON.parse(arr);
     let newArray=[];
     for(let i=0;i<array.length;i++){
         if((id-1)==array[i]){
        }
        else{
             newArray.push(array[i]);

         }
     }   
     localStorage.setItem("carts",JSON.stringify(newArray));
     window.location.href="cart.html";
}