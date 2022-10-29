// close navigation bar
$("#closeBtn").click(()=>{

  
    if($("#navBar").css("left") ==="-300px"){
        $("#navBar").animate({left : 0} , 1000, ()=>{
            $(".nav-content ul li").animate({paddingTop : "25px" , opacity : 1},800)
        } )  
    }
    else{
        $("#navBar").animate({left : "-300px"} , 1000 )
            $(".nav-content ul li").animate({paddingTop : "25px" , opacity : 0},800)
        }  

    })

//   Show all recipes section 111111111111111111
    let getMeals = []
    let searchName =  document.getElementById("searchName")
    
    async function getApi (){

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    let data = await response.json();
    getMeals = data
    displayData(getMeals.meals)
    }
    getApi ()

  let index;
    function displayData(meal){
        for(let i = 0 ; i < meal.length ; i++){
           temp = ""
           let imgSrc = meal[i].strMealThumb
           temp +=`<div class="col-md-3"> 
            <div class="rowItem" >
            <img src= ${imgSrc} class="w-100 rounded-4" alt="">
            <div class="overLay text-center" onclick="showDesc(${i})" >
             <p>${meal[i].strMeal}<p>
            </div>
            </div>
            </div>`
          
           document.getElementById("myRowrecipe").innerHTML += temp ;
           index = meal
       }

    }
    function showDesc(x){

        temp = ""
        temp += `<section class="foodDescription ">
        <div class="container py-5 px-5 text-white">
         <div class="row">
           <div class="col-md-3">
            <img src="${index[x].strMealThumb}" class="w-100 rounded-2">
            <p class="text-white">${index[x].strMeal}</p>
           </div>
           <div class="col-md-9">
             <h4>Instructions</h4>
             <p>${index[x].strInstructions}.</p>
     
             <p> <span class="fw-bold"> Area :</span> ${index[x].strArea}</p>
             <p> <span class="fw-bold"> Category :</span> ${index[x].strCategory}</p>
             <h3>Recipes :</h3>
             <div class="w-75"> 
                <span>${index[x].strMeasure1}</span> 
                <span>${index[x].strMeasure2}</span> 
                <span>${index[x].strMeasure3}</span>
                <span>${index[x].strMeasure4}</span>
                <span>${index[x].strMeasure5}</span>
                <span>${index[x].strMeasure6}</span>
                <span>${index[x].strMeasure7}</span>
                <span>${index[x].strMeasure8}</span>
                <span>${index[x].strMeasure9}</span>
                <span>${index[x].strMeasure10}</span>
                <span>${index[x].strMeasure11}</span>
                <span>${index[x].strMeasure12}</span>
                <span>${index[x].strMeasure13}</span>
             </div>
             <h4 class="mt-2">Tags :</h4>
             <p class="pink">${index[x].strTags }</p>
             <button class="btn btn-success"><a href="${index[x].strSource}" target = "_blank">Source</a></button>
             <button class="btn btn-danger"><a href="${index[x].strYoutube}" target = "_blank">Youtube</a></button>
         </div>
         </div>
         
     
        </div>
     </section>`
     document.getElementById("foodescription").innerHTML = temp
     
     }


$("#search").click (()=>{
    $("#showRecipes").css("display" , "none")
    $(".ingrediants").css("display" , "none")
    $(".Area").css("display" , "none")
    $(".search").css("display" , "block")

})
//  search by Name  section 2222222222222



async function getApiSearch(meal){

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    let data = await response.json()
    getMeals = data
  
    displayDataSearch(getMeals)
}


searchName.addEventListener("keyup" , search)

function search(){

    getApiSearch(searchName.value)
    
}
            
   
    let mealItem;
function displayDataSearch(meal){
         mealItem = meal.meals
        let temp = ""
        for ( let i = 0 ; i < mealItem.length ; i++){
          
                temp += `<div class="col-md-3">
                  <div class="searchItem rowItem">
                  <img src="${mealItem[i].strMealThumb }" alt="" class="w-100 rounded-2">
                  <div class="overlay" onclick = "showDescSearch(${i})">
                  <p>${mealItem[i].strMeal}</p>
                  </div>
                   </div>
                 </div>`
            document.getElementById("myRow").innerHTML = temp 
        }
   
}

function showDescSearch(x){
   
    temp = ""
    temp += `<section class="foodDescription ">
    <div class="container py-5 px-5 text-white">
     <div class="row">
       <div class="col-md-3">
        <img src="${mealItem[x].strMealThumb}" class="w-100 rounded-2">
        <p class="text-white">${mealItem[x].strMeal}</p>
       </div>
       <div class="col-md-9">
         <h4>Instructions</h4>
         <p>${mealItem[x].strInstructions}.</p>

         <p> <span class="fw-bold"> Area :</span> ${mealItem[x].strArea}</p>
         <p> <span class="fw-bold"> Category :</span> ${mealItem[x].strCategory}</p>
         <h3>Recipes :</h3>
         <div class="w-75"> 
            <span>${mealItem[x].strMeasure1}</span> 
            <span>${mealItem[x].strMeasure2}</span> 
            <span>${mealItem[x].strMeasure3}</span>
            <span>${mealItem[x].strMeasure4}</span>
            <span>${mealItem[x].strMeasure5}</span>
            <span>${mealItem[x].strMeasure6}</span>
            <span>${mealItem[x].strMeasure7}</span>
            <span>${mealItem[x].strMeasure8}</span>
            <span>${mealItem[x].strMeasure9}</span>
            <span>${mealItem[x].strMeasure10}</span>
            <span>${mealItem[x].strMeasure11}</span>
            <span>${mealItem[x].strMeasure12}</span>
            <span>${mealItem[x].strMeasure13}</span>
         </div>
         <h4 class="mt-2">Tags :</h4>
         <p class="pink">${mealItem[x].strTags }</p>
         <button class="btn btn-success"><a href="${mealItem[x].strSource}" target = "_blank">Source</a></button>
         <button class="btn btn-danger"><a href="${mealItem[x].strYoutube}" target = "_blank">Youtube</a></button>
     </div>
     </div>
     

    </div>
 </section>`
 document.getElementById("myRow").innerHTML = temp

}

// search byyyyyyy firsttttt letteeeeeeeeeeer
let getLetter = []
async function getfirstLetter (letter) {

   let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
   let data = await  response.json()
   getLetter= data
  displaySearchLetter(getLetter)

}

let searchLetter = document.getElementById("searchLetter")
 

searchLetter.addEventListener("keyup" , ()=>{
    getfirstLetter(searchLetter.value)  
})


     let searchval;
function displaySearchLetter(searchLet){
      searchval = searchLet.meals
       let temp = ""
        for ( let i = 0 ; i < searchval.length ; i++){
          
                temp += `<div class="col-md-3">
                  <div class="searchItem rowItem">
                  <img src="${searchval[i].strMealThumb}" alt="" class="w-100 rounded-2">
                  <div class="overLay" onclick = "showletter(${i})">
                  <p>${searchval[i].strMeal}</p>
                  </div>
                   </div>
                 </div>`
            document.getElementById("myRow").innerHTML = temp 
        } 
}

function showletter(x){
   
    temp = ""
    temp += `<section class="foodDescription ">
    <div class="container py-5 px-5 text-white">
     <div class="row">
       <div class="col-md-3">
        <img src="${searchval[x].strMealThumb}" class="w-100 rounded-2">
        <p class="text-white">${searchval[x].strMeal}</p>
       </div>
       <div class="col-md-9">
         <h4>Instructions</h4>
         <p>${searchval[x].strInstructions}.</p>

         <p> <span class="fw-bold"> Area :</span> ${searchval[x].strArea}</p>
         <p> <span class="fw-bold"> Category :</span> ${searchval[x].strCategory}</p>
         <h3>Recipes :</h3>
         <div class="w-75"> 
            <span>${searchval[x].strMeasure1}</span> 
            <span>${searchval[x].strMeasure2}</span> 
            <span>${searchval[x].strMeasure3}</span>
            <span>${searchval[x].strMeasure4}</span>
            <span>${searchval[x].strMeasure5}</span>
            <span>${searchval[x].strMeasure6}</span>
            <span>${searchval[x].strMeasure7}</span>
            <span>${searchval[x].strMeasure8}</span>
            <span>${searchval[x].strMeasure9}</span>
            <span>${searchval[x].strMeasure10}</span>
            <span>${searchval[x].strMeasure11}</span>
            <span>${searchval[x].strMeasure12}</span>
            <span>${searchval[x].strMeasure13}</span>
         </div>
         <h4 class="mt-2">Tags :</h4>
         <p class="pink">${searchval[x].strTags }</p>
         <button class="btn btn-success"><a href="${searchval[x].strSource}" target = "_blank">Source</a></button>
         <button class="btn btn-danger"><a href="${searchval[x].strYoutube}" target = "_blank">Youtube</a></button>
     </div>
     </div>
     

    </div>
 </section>`
 document.getElementById("myRow").innerHTML = temp

}

// section threeeeeee show categoriessssssssssss



$("#categories").click(()=>{
    $(".search").css("display" , "none")
    $("#showRecipes").css("display" , "none")
    getCategory ()
})

    let gategs = []
    async function getCategory (){
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        let data = await response.json()
    
        gategs = data.categories
       
        displayCategories(gategs)
    }
   
    
    function displayCategories(categoryItem){
        for(let i = 0 ; i < categoryItem.length ; i++){
           temp = ""
           let imgSrc = categoryItem[i].strCategoryThumb
           temp +=`<div class="col-md-3"> 
            <div class="rowCateg shadow" >
            <img src= ${imgSrc} class="w-100 rounded-4" alt="">
            <div class="overLayer text-center" onclick="categoryDetail(${i})" >
             <h3>${categoryItem[i].strCategory}<h3>
             <p>${categoryItem[i].strCategoryDescription}</p>
             </div>
            </div>
            </div>`
          
           document.getElementById("myRowgateg").innerHTML += temp ;
           index = categoryItem
       }
    }
    let categ = []
    async function getCategoryItem (categoryItemvalue){

        let response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryItemvalue}`)
        let data = await response.json()
         categ = data
         diplayCategoryItems(categ)
        
    } 


    function categoryDetail(detail){
        let categoryItem = index[detail].strCategory
        
        getCategoryItem(categoryItem)
      } 
     let item ;
      function diplayCategoryItems(categItem){

        let showCateg = categItem.meals
        temp = ""
        for(let i = 0 ; i < showCateg.length ; i++){
            
            let imgSrc = showCateg[i].strMealThumb

            temp +=`<div class="col-md-3 "> 
             <div class="rowCateg shadow" >
             <img src= ${imgSrc} class="w-100 rounded-4" alt="">
             <div class="overLayer text-center" onclick="showingred(${i})">
              <h3>${showCateg[i].strMeal}<h3>
              </div>
             </div>
             </div>`
          
            document.getElementById("myRowgateg").innerHTML = temp ;
           
        }
        item = showCateg
      }

       
      async function categorydetails(x){
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`)
  
       let data = await response.json()
       categoryingred = data
       displaitem(categoryingred.meals)
       
  }
  let itemingrediants ; 


      function showingred(x){
       let iteming = item[x].strMeal
     let iteming2 = x
       itemingrediants = iteming2
    
  
       console.log(itemingrediants)

       categorydetails(iteming)
      }
     

      function displaitem(x){
     

        temp = ""
        temp += `<section class="foodDescription ">
        <div class="container py-5 px-5 text-white">
         <div class="row">
           <div class="col-md-3">
            <img src="${x[itemingrediants].strMealThumb}" class="w-100 rounded-2">
            <p class="text-white">${x[itemingrediants].strMeal}</p>
           </div>
           <div class="col-md-9">
             <h4>Instructions</h4>
             <p>${x[itemingrediants].strInstructions}.</p>
    
             <p> <span class="fw-bold"> Area :</span> ${x[itemingrediants].strArea}</p>
             <p> <span class="fw-bold"> Category :</span> ${x[itemingrediants].strCategory}</p>
             <h3>Recipes :</h3>
             <div class="w-75"> 
                <span>${x[itemingrediants].strMeasure1}</span> 
                <span>${x[itemingrediants].strMeasure2}</span> 
                <span>${x[itemingrediants].strMeasure3}</span>
                <span>${x[itemingrediants].strMeasure4}</span>
                <span>${x[itemingrediants].strMeasure5}</span>
                <span>${x[itemingrediants].strMeasure6}</span>
                <span>${x[itemingrediants].strMeasure7}</span>
                <span>${x[itemingrediants].strMeasure8}</span>
                <span>${x[itemingrediants].strMeasure9}</span>
                <span>${x[itemingrediants].strMeasure10}</span>
                <span>${x[itemingrediants].strMeasure11}</span>
                <span>${x[itemingrediants].strMeasure12}</span>
                <span>${x[itemingrediants].strMeasure13}</span>
             </div>
             <h4 class="mt-2">Tags :</h4>
             <p class="pink">${x[itemingrediants].strTags }</p>
             <button class="btn btn-success"><a href="${x[itemingrediants].strSource}" target = "_blank">Source</a></button>
             <button class="btn btn-danger"><a href="${x[itemingrediants].strYoutube}" target = "_blank">Youtube</a></button>
         </div>
         </div>
         
    
        </div>
     </section>`
     document.getElementById("myRowgateg").innerHTML = temp
    
    }



// section 33333333333 areaaaaa mealssssss


$("#Aries").click(()=>{
    $("#showRecipes").css("display" , "none")
    
    $(".search").css("display" , "none")
    $(".ingrediants").css("display" , "none")
    areaApi ()
})


let areaArray = []


async function areaApi (){

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let data = await response.json()

    areaArray = data.meals
    displayArea(areaArray)
   }
let areameal ;
function displayArea(area){
    let temp =""
    console.log(area)
    for( let i =0 ; i < area.length ; i++ ){

      temp+= `<div class="col-md-3 "> 
      <div class="rowCateg shadow text-center " onclick=" areameals(${i})">
      <i class="fa-solid fa-city fa-3x text-danger"></i>
       <p class="text-white">${area[i].strArea}<p>
       </div>
      </div>`
    }
    document.getElementById("myRowArea").innerHTML = temp ;
    areameal = area
}


function areameals(x){
  let mealArea = areameal[x].strArea 

  getMealsArea(mealArea)
}


let areamealsApi =[]
async function getMealsArea(area){
       let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
       let data = await response.json() 
       areamealsApi = data
       displayAreaMeals(areamealsApi.meals)
}
let mealsAreaing;
function displayAreaMeals(areameals){
    mealsAreaing = areameals

    temp = ""
    for(let i = 0 ; i < areameals.length ; i++){
      temp +=`<div class="col-md-3">
      <div class="searchItem rowItem" onclick="areaingrediants(${i})">
      <img src="${areameals[i].strMealThumb}" alt="" class="w-100 rounded-2">
      <div class="overLay">
      <p>${areameals[i].strMeal}</p>
      </div>
       </div>
     </div>`
       document.getElementById("myRowArea").innerHTML = temp 
       
    }
}
let areaItemsingrediants ;

function areaingrediants(x){
  let areaItems =  mealsAreaing[x].idMeal
   areaItemsingrediants = x
 
  getApiId(areaItems)
}
let idMeal = []
async function getApiId(x){
    let response = await fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${x}`)
    let data = await response.json()
    idMeal = data.meals
  
    diplayByID(idMeal)
}

function diplayByID(meal) {
    console.log(meal[areaItemsingrediants])
   
    temp = ""
    temp += `<section class="foodDescription ">
    <div class="container py-5 px-5 text-white">
     <div class="row">
       <div class="col-md-3">
        <img src="${meal[areaItemsingrediants].strMealThumb}" class="w-100 rounded-2">
        <p class="text-white">${meal[areaItemsingrediants].strMeal}</p>
       </div>
       <div class="col-md-9">
         <h4>Instructions</h4>
         <p>${meal[areaItemsingrediants].strInstructions}.</p>

         <p> <span class="fw-bold"> Area :</span> ${meal[areaItemsingrediants].strArea}</p>
         <p> <span class="fw-bold"> Category :</span> ${meal[areaItemsingrediants].strCategory}</p>
         <h3>Recipes :</h3>
         <div class="w-75"> 
            <span>${meal[areaItemsingrediants].strMeasure1}</span> 
            <span>${meal[areaItemsingrediants].strMeasure2}</span> 
            <span>${meal[areaItemsingrediants].strMeasure3}</span>
            <span>${meal[areaItemsingrediants].strMeasure4}</span>
            <span>${meal[areaItemsingrediants].strMeasure5}</span>
            <span>${meal[areaItemsingrediants].strMeasure6}</span>
            <span>${meal[areaItemsingrediants].strMeasure7}</span>
            <span>${meal[areaItemsingrediants].strMeasure8}</span>
            <span>${meal[areaItemsingrediants].strMeasure9}</span>
            <span>${meal[areaItemsingrediants].strMeasure10}</span>
            <span>${meal[areaItemsingrediants].strMeasure11}</span>
            <span>${meal[areaItemsingrediants].strMeasure12}</span>
            <span>${meal[areaItemsingrediants].strMeasure13}</span>
         </div>
         <h4 class="mt-2">Tags :</h4>
         <p class="pink">${meal[areaItemsingrediants].strTags }</p>
         <button class="btn btn-success"><a href="${meal[areaItemsingrediants].strSource}" target = "_blank">Source</a></button>
         <button class="btn btn-danger"><a href="${meal[areaItemsingrediants].strYoutube}" target = "_blank">Youtube</a></button>
     </div>
     </div>
     

    </div>
 </section>`
 document.getElementById("myRowArea").innerHTML = temp
}


// section ingridentsssssss 

$("#ingrediants").click(()=>{
    $("#showRecipes").css("display" , "none")
    
    $(".search").css("display" , "none")
    $(".Area").css("display" , "none")
    getApingred ()
})


let ingredItem = []
async function getApingred (){
  let response = await fetch (`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
  let data = await response.json()

  displayIngrediants(data.meals)

}
let  itemingredcat
function displayIngrediants (ingredArray){
     itemingredcat = ingredArray
    temp =""
    for(let i = 0 ; i < 20 ; i++){
         temp+=`<div class="col-md-3 "> 
         <div class="rowCateg shadow text-center  "onclick="showingredMeals(${i})">
         <i class="fa-solid fa-bowl-food fa-3x "></i>
          <p class="text-white">${itemingredcat[i].strIngredient}<p>
          <p class="text-OverFlow text-muted">${(itemingredcat[i].strDescription) ? itemingredcat[i].strDescription.split(" ").splice(0,15).join(" ") :"lorem" } </p>
          </div>
         </div>`
    

    }
    document.getElementById("myRowing").innerHTML = temp
    
}

async function getGategIngred(item){
    let response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${item}`)
    let data = await response.json()
    displaycategIng(data.meals)
}

let ingredval2 
let itemiingredval
let  ingredidmeal
function showingredMeals(item){
       ingredidmeal =item
        itemiingredval =itemingredcat[item].strIngredient
       ingredval2 =itemingredcat[item].idIngredient
       console.log(ingredval2)

       console.log(itemiingredval)
       
       getGategIngred(itemiingredval)
       ingredbyID(ingredval2)  
}
let temodata;
function displaycategIng (dataing){
     temodata = dataing
    let temp = ""
   for(let i = 0 ; i < temodata.length ; i++){
    temp+=`<div class="col-md-3">
    <div class="searchItem rowItem" onclick="showingred(${i})">
    <img src="${temodata[i].strMealThumb}" alt="" class="w-100 rounded-2">
    <div class="overLay">
    <p>${temodata[i].strMeal}</p>
    </div>
     </div>
   </div>`
   
   }
   document.getElementById("myRowing").innerHTML = temp
   
}
let dataIDsan
function showingred(x){
    dataIDsan = x
    let dataID = temodata[x].idMeal
    console.log(dataIDsan)
    ingredbyID(dataID)
}
let idingMeal = []
async function ingredbyID(id){
    let response = await fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let data = await response.json()
    idingMeal = data.meals
    displayingrediantsByID(idingMeal)

}

 function displayingrediantsByID(idmeal){
    console.log(idmeal[dataIDsan])
    temp += `<section class="foodDescription ">
    <div class="container py-5 px-5 text-white">
     <div class="row">
       <div class="col-md-3">
        <img src="${idmeal[dataIDsan].strMealThumb}" class="w-100 rounded-2">
        <p class="text-white">${idmeal[dataIDsan].strMeal}</p>
       </div>
       <div class="col-md-9">
         <h4>Instructions</h4>
         <p>${idmeal[dataIDsan].strInstructions}.</p>

         <p> <span class="fw-bold"> Area :</span> ${idmeal[dataIDsan].strArea}</p>
         <p> <span class="fw-bold"> Category :</span> ${idmeal[dataIDsan].strCategory}</p>
         <h3>Recipes :</h3>
         <div class="w-75"> 
            <span>${idmeal[dataIDsan].strMeasure1}</span> 
            <span>${idmeal[dataIDsan].strMeasure2}</span> 
            <span>${idmeal[dataIDsan].strMeasure3}</span>
            <span>${idmeal[dataIDsan].strMeasure4}</span>
            <span>${idmeal[dataIDsan].strMeasure5}</span>
            <span>${idmeal[dataIDsan].strMeasure6}</span>
            <span>${idmeal[dataIDsan].strMeasure7}</span>
            <span>${idmeal[dataIDsan].strMeasure8}</span>
            <span>${idmeal[dataIDsan].strMeasure9}</span>
            <span>${idmeal[dataIDsan].strMeasure10}</span>
            <span>${idmeal[dataIDsan].strMeasure11}</span>
            <span>${idmeal[dataIDsan].strMeasure12}</span>
            <span>${idmeal[dataIDsan].strMeasure13}</span>
         </div>
         <h4 class="mt-2">Tags :</h4>
         <p class="pink">${idmeal[dataIDsan].strTags }</p>
         <button class="btn btn-success"><a href="${idmeal[dataIDsan].strSource}" target = "_blank">Source</a></button>
         <button class="btn btn-danger"><a href="${idmeal[dataIDsan].strYoutube}" target = "_blank">Youtube</a></button>
     </div>
     </div>
     

    </div>
 </section>`
 document.getElementById("myRowing").innerHTML = temp
 }


// section contaaaaaaaaaact



$("#contact").click(()=>{
    $("#showRecipes").css("display" , "none")

    $(".search").css("display" , "none")
    $(".Area").css("display" , "none")
    $(".contact").css("display" , "block")

    
})






let nameRegex = document.getElementById("nameRegex")
let EmailRegex = document.getElementById("EmailRegex")
let passRegex = document.getElementById("passRegex")
let repassRegex = document.getElementById("repassRegex")

let btn = document.getElementById("btn")






btn.addEventListener("click", function(){

 if (validateName() == true ){
   $(".validateIcons-Name  i").eq(1).removeClass("error")
   $(".validateIcons-Name  i").eq(0).addClass("sucees")
    
 }else{
    $(".validateIcons-Name  i").eq(1).addClass("error")
    $(".validateIcons-Name  i").eq(0).removeClass("sucees")
 }
 if( EmailValidate () == true){
    $(".validateIcons-email  i").eq(1).removeClass("error")
    $(".validateIcons-email  i").eq(0).addClass("sucees")
 }
 else{
    $(".validateIcons-email  i").eq(1).addClass("error")
    $(".validateIcons-email i").eq(0).removeClass("sucees")
 }
 if( passwordvalidate () == true){
    $(".validateIcons-pass  i").eq(1).removeClass("error")
    $(".validateIcons-pass  i").eq(0).addClass("sucees")
 }
 else{
    $(".validateIcons-pass i").eq(1).addClass("error")
    $(".validateIcons-pass i").eq(0).removeClass("sucees")
 }
 if( repasswordvalidate() == true){
    $(".validateIcons-repass  i").eq(1).removeClass("error")
    $(".validateIcons-repass  i").eq(0).addClass("sucees")
 }
 else{
    $(".validateIcons-repass i").eq(1).addClass("error")
    $(".validateIcons-repass i").eq(0).removeClass("sucees")
 }

} )

function validateName(){
    let regexName = /^[A-Z][a-z]{3,8}$/
    if(regexName.test(nameRegex.value) == true){
      return true
    }
    else{
        return false
    }
}

function EmailValidate (){
    let regexEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    if(regexEmail.test(EmailRegex.value) == true){
      return true
    }
    else{
        return false
    }
}
function passwordvalidate(){
    let regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if(regularExpression.test(passRegex.value) == true){
        return true
      }
      else{
          return false
      }
}
function repasswordvalidate(){
    if(passRegex.value === repassRegex.value){
        return true 
    }
    else{
        return false
    }
}
