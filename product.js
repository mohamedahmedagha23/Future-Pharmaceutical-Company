//get product
function getproduct(){
    var products={"products":[{category:"Orthopedic" , thumbnail:"./products imgages/Flamotal-400mg-ortho-300x200.jpg" , product_name: "Flamotal 400 mg Tablets" , price : "24 L.E"} , 
    {category:"Orthopedic" , thumbnail:"./products imgages/Flamotal-600mg-ortho-300x200.jpg" , product_name: "Flamotal 600 mg Tablets" , price : "20 L.E"} , 
    {category:"Orthopedic" , thumbnail:"./products imgages/Flamotal-800mg-ortho-300x200.jpg" , product_name: "Flamotal 800 mg Tablets" , price : "18 L.E"} ,
    {category:"Orthopedic" , thumbnail:"./products imgages/Futacoxib-60mg-ortho-300x200.jpg" , product_name: "Futacoxib 60mg FCT" , price : "147.75 L.E"} , 
    {category:"Orthopedic" , thumbnail:"./products imgages/Futacoxib-ortho-90mg-300x200.jpg" , product_name: "Futacoxib 90mg FCT" , price : "156 L.E"} , 
    {category:"Infection" , thumbnail:"./products imgages/Cefex-Infection-1gm-300x200.jpg" , product_name: "Cefex 1 gm FCT" , price : "22.5 L.E"} , 
    {category:"Infection" , thumbnail:"./products imgages/Futarhomal-Infection-200mg-300x200.jpg" , product_name: "Futarhomal 200 mg Tablets" , price : "40 L.E"} , 
    {category:"Infection" , thumbnail:"./products imgages/Moflox-Infection-400mg-300x205.jpg" , product_name: "Moflox 400mg FCT" , price : "140.5 L.E"} , 
    {category:"Infection" , thumbnail:"./products imgages/Zolifutal-Infection-500mg-300x200.jpg" , product_name: "Zolifutal 500 mg Tablets" , price : "37 L.E"} , 
    {category:"Cardio" , thumbnail:"./products imgages/Candalkan-Cardio-16mg-300x200.jpg" , product_name: "Candalkan 16 mg FCT" , price : "43 L.E"} , 
    {category:"Cardio" , thumbnail:"./products imgages/Futavildix-Cardio-50-1000mg-300x200.jpg" , product_name: "Futavildix 1000/50 mg F.C.T" , price : "111 L.E"} , 
    {category:"Cardio" , thumbnail:"./products imgages/Irbefutal-Cardio-300-12.5mg-300x200.jpg" , product_name: "Irbefutal CO 300/12.5 mg Tab" , price : "115.5 L.E"} , 
    {category:"Cardio" , thumbnail:"./products imgages/LEVOCARNINE-Cardio-30TAB.-600x600-1-300x186.jpg" , product_name: "Levocarnine 500 mg Tab" , price : "43 L.E"} , 
    {category:"Cardio" , thumbnail:"./products imgages/Novistoric-Cardio-20mg-300x200.jpg" , product_name: "Novistoric 20 mg FCT" , price : "53 L.E"} , 
    {category:"Neuro" , thumbnail:"./products imgages/Amitriptine-Neuro-50mg-300x200.jpg" , product_name: "Amitriptine 50 mg Tab" , price : "25.5 L.E"} , 
    {category:"Neuro" , thumbnail:"./products imgages/Mirtofutal-Neuro-30mg-300x200.jpg" , product_name: "Mirtofutal 30 mg F.C.T" , price : "70 L.E"} , 
    {category:"Neuro" , thumbnail:"./products imgages/Quetiapine-Neuro-25mg-1-300x200.jpg" , product_name: "Quetiapine 25 mg FCT" , price : "63 L.E"} , 
    {category:"Neuro" , thumbnail:"./products imgages/Thionerv-Neuro-300mg-300x200.jpg" , product_name: "Thionerv 300 mg Tab" , price : "58 L.E"} , 
    {category:"Gastroenterology" , thumbnail:"./products imgages/Futapan-Gastro-40mg-tab-300x200.jpg" , product_name: "Futapan 40 mg E.C.T" , price : "37.5 L.E"} , 
    {category:"Gastroenterology" , thumbnail:"./products imgages/Futapan-Gastro-40mg-Vial-300x200.jpg" , product_name: "Futapan 40 mg Injection" , price : "45 L.E"} , 
    {category:"Gastroenterology" , thumbnail:"./products imgages/Jeparilon-Gastro-300x200.jpg" , product_name: "Jeparilon chewable Tab" , price : "26 L.E"} , 
    {category:"Gastroenterology" , thumbnail:"./products imgages/Lanzofutal-Gastro-15mg-300x200.jpg" , product_name: "Lanzofutal 15 mg Capsules" , price : "42 L.E"} ,
    {category:"ENT" , thumbnail:"./products imgages/Astin-ENT-20mg-2-300x200.jpg" , product_name: "Astin 20 mg F.C.T" , price : "28.8 L.E"} , 
    {category:"ENT" , thumbnail:"./products imgages/Astin-Syrup-ENT-300x247.jpg" , product_name: "Astin Syrup" , price : "14.4 L.E"} , 
    {category:"ENT" , thumbnail:"./products imgages/Steadyfutal-ENT-24mg-300x200.jpg" , product_name: "Steadyfutal 24 mg Tab" , price : "36 L.E"} , 
    {category:"OTC" , thumbnail:"./products imgages/coldatrexy_tabs-Supliment-300x200.jpg" , product_name: "Coldatrexy Tab" , price : "39 L.E"} , ]
    }
     return products.products;
    }
    var prodcuts= getproduct() ;
 // process
 var set=[];     // for cart
 var div_newproducts =document.getElementById('newproducts');
 div_newproducts.style.cssText=`display :flex ;flex-wrap : wrap;background-color: #a5b0b13b;`;
 function draw(prodcuts){
    var div = document.createElement('div');
    var img = document.createElement('img');
    var name = document.createElement('h3');
    var price = document.createElement('h4');
    var button = document.createElement('button');
    img.src=prodcuts.thumbnail;
    name.innerText=prodcuts.product_name;
    price.innerText=prodcuts.price;
    button.innerText=('Buy Now');
    
    div_newproducts.appendChild(div);
    div.append(img,name,price,button);
    div.style.cssText=`box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin:15px auto;
    padding: 15px;
    text-align: center;
    font-family: arial;`;
    button.style.cssText=`border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    `;
    
    img.style.cssText=`width :100%`;
    price.style.cssText=`color: grey;
    font-size: 22px`;

    button.onclick=function(){
        button.style.backgroundColor="#898585";
        setTimeout(() => {
            button.style.backgroundColor="black";
        }, 500);
        set.push(prodcuts);
        localStorage.setItem('set',JSON.stringify(set));
        
    }
 } 

function showdata(){
    div_newproducts.innerHTML=('');
    for(var i=0; i<prodcuts.length ;i++){
        
        draw(prodcuts[i]);
    }
}

// filter

function categoryShow(category){
    
    div_newproducts.innerHTML=('');
    for(var i=0;i<prodcuts.length ; i++){
        if(prodcuts[i].category==category){
        draw(prodcuts[i]);}
    }
}

//cart
function cart(){
    var all=JSON.parse(localStorage.getItem('set'));
    div_newproducts.innerHTML=('');
   for(var i=0 ; i<all.length; i++){
   var div = document.createElement('div');
    var img = document.createElement('img');
    var name = document.createElement('h3');
    var price = document.createElement('h4');
    var button1 = document.createElement('button');
    
    img.src=all[i].thumbnail;
    name.innerText=all[i].product_name;
    price.innerText=all[i].price;
    button1.innerText=('Leave It');
   
    
    div_newproducts.appendChild(div);
    div.append(img,name,price,button1);
    div.style.cssText=`box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin:15px auto;
    padding: 15px;
    text-align: center;
    font-family: arial;`;
    
    
    img.style.cssText=`width :100%`;
    price.style.cssText=`color: black;
    font-size: 22px`;


    
    button1.style.cssText=`border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    `;
    
    // button1.onclick=function(){
    //     button1.style.backgroundColor="#898585";
    //     setTimeout(() => {
    //         button1.style.backgroundColor="black";
    //     }, 500);
        
    //     //localStorage.setItem('set',JSON.stringify(set));
    //    localStorage.removeItem('');
    // }
        
    }

    
}


