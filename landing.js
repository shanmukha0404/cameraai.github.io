var param;
fetch("data.json")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    let param = new URL(document.location).searchParams;
    index=param.get("id")-1;
    console.log(index);
    appendData(data);
})
.catch(function(err)
{
    console.log(err);
});

function appendData(data){
    // var index=localStorage.getItem("prdId")-1;

    document.getElementById("img1").src=data[index].images[0];
    document.getElementById("img2").src=data[index].images[1];
    document.getElementById("img3").src=data[index].images[2];
    document.getElementById("img4").src=data[index].images[3];
    document.getElementById("brand").innerHTML=data[index].brand;
    document.getElementById("model").innerHTML=data[index].model;
    document.getElementById("price").innerHTML="MRP : "+data[index].price+".00/-";
    document.getElementById("type").innerHTML=data[index].type;
    document.getElementById("model1").innerHTML=data[index].model;
    document.getElementById("isoRange").innerHTML=data[index].isoRange;
    document.getElementById("resolution").innerHTML=data[index].resolution;
    document.getElementById("touchscreen").innerHTML=data[index].touchScreen;
    document.getElementById("builtinflash").innerHTML=data[index].builtInFlash;
    document.getElementById("liveview").innerHTML=data[index].liveView;
    document.getElementById("gps").innerHTML=data[index].gps;
    document.getElementById("hdr").innerHTML=data[index].hdrModel;
    document.getElementById("dualmemory").innerHTML=data[index].dualMemoryCard;
}

function myCart(){

    if (localStorage.getItem('carts') == null) {
        
        let cart=[];
        let size=cart.length;
        cart[size]=index;
        localStorage.setItem("carts",JSON.stringify(cart));
        console.log(cart);

    }
    else{
        let cart=localStorage.getItem("carts");
        //console.log(JSON.parse(cart));
        let m=JSON.parse(cart)
        let p=m.length
        m[p]=index;
        localStorage.setItem("carts",JSON.stringify(m));
        
    }
    window.document.location="cart.html"+"?id="+(index+1);
}