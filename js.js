




let dolarTotl = document.querySelector("#flexRadioDefault1")
let tlToDolar = document.querySelector("#flexRadioDefault2")
let euroTotl = document.querySelector("#flexRadioDefault3")
let tlToeuro = document.querySelector("#flexRadioDefault4")
let poundTotl = document.querySelector("#flexRadioDefault5")
let tlToPound = document.querySelector("#flexRadioDefault6")

let iconFrom = document.querySelector("#icon1")
let iconTo = document.querySelector("#icon2")

let valueEntery = document.querySelector("#değergiriş")
let calculate = document.querySelector("#hesapla")
let result = document.querySelector("#sonuç")
let dolarKur = document.querySelector(".dolarKur");
let euroKur = document.querySelector(".euroKur");
let poundKur = document.querySelector(".poundKur");

let aDolar
let aEuro
let aPound


class Request {

get(url){
    return new Promise((resolve,reject)=>{
       fetch(url)
       .then(Response => Response.json())
       .then(data=>resolve(data))
       .catch(err=> reject(err))

    })
}
}
const request = new Request();

request.get("http://api.exchangeratesapi.io/v1/latest?access_key=28c70045d4518c03b26a5a75eb86ded6&format=1")
.then(data => {
 aEuro = data.rates.TRY
 aDolar = aEuro/data.rates.USD
 aPound = aEuro/data.rates.GBP

 dolarKur.innerHTML = (aEuro / data.rates.USD).toFixed(2);;
euroKur.innerHTML = data.rates.TRY.toFixed(2);;
poundKur.innerHTML = (aEuro / data.rates.GBP).toFixed(2);;
})
.catch(err => console.log(err))




dolarTotl.addEventListener("click",function(){
    result.innerHTML = "<input disabled  type='text' class='form-control bg-light text-dark fs-5' placeholder=' ' >"
    iconFrom.innerHTML="<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='currentColor' class='bi bi-currency-dollar align-self-center' viewBox='0 0 16 16'><path d='M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z'/></svg>"
    iconTo.innerHTML="<img class='tl' src='12037.png' alt=>"
})

tlToDolar.addEventListener("click",function(){
    result.innerHTML = "<input disabled  type='text' class='form-control bg-light text-dark fs-5' placeholder=' ' >"
    iconTo.innerHTML="<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='currentColor' class='bi bi-currency-dollar align-self-center' viewBox='0 0 16 16'><path d='M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z'/></svg>"
    iconFrom.innerHTML="<img class='tl' src='12037.png' alt=''>"
})

euroTotl.addEventListener("click",function(){
    result.innerHTML = "<input disabled  type='text' class='form-control bg-light text-dark fs-5' placeholder=' ' >"

    iconFrom.innerHTML="  <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='currentColor' class='bi bi-currency-euro align-self-center' viewBox='0 0 16 16'><path d='M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z'/></svg>"
    iconTo.innerHTML="<img class='tl' src='12037.png' alt=''>"
})

tlToeuro.addEventListener("click",function(){
    result.innerHTML = "<input disabled  type='text' class='form-control bg-light text-dark fs-5' placeholder=' ' >"

    iconTo.innerHTML="  <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='currentColor' class='bi bi-currency-euro align-self-center' viewBox='0 0 16 16'><path d='M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z'/></svg>"
    iconFrom.innerHTML="<img class='tl' src='12037.png' alt=''>"
})

poundTotl.addEventListener("click",function(){
    result.innerHTML = "<input disabled  type='text' class='form-control bg-light text-dark fs-5' placeholder=' ' >"

    iconFrom.innerHTML="<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='currentColor' class='bi bi-currency-pound align-self-center' viewBox='0 0 16 16'><path d='M4 8.585h1.969c.115.465.186.939.186 1.43 0 1.385-.736 2.496-2.075 2.771V14H12v-1.24H6.492v-.129c.825-.525 1.135-1.446 1.135-2.694 0-.465-.07-.913-.168-1.352h3.29v-.972H7.22c-.186-.723-.372-1.455-.372-2.247 0-1.274 1.047-2.066 2.58-2.066a5.32 5.32 0 0 1 2.103.465V2.456A5.629 5.629 0 0 0 9.348 2C6.865 2 5.322 3.291 5.322 5.366c0 .775.195 1.515.399 2.247H4v.972z'/></svg>"
    iconTo.innerHTML="<img class='tl' src='12037.png' alt=''>"
})

tlToPound.addEventListener("click",function(){
    result.innerHTML = "<input disabled  type='text' class='form-control bg-light text-dark fs-5' placeholder=' ' >"

    iconTo.innerHTML="<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='currentColor' class='bi bi-currency-pound align-self-center' viewBox='0 0 16 16'><path d='M4 8.585h1.969c.115.465.186.939.186 1.43 0 1.385-.736 2.496-2.075 2.771V14H12v-1.24H6.492v-.129c.825-.525 1.135-1.446 1.135-2.694 0-.465-.07-.913-.168-1.352h3.29v-.972H7.22c-.186-.723-.372-1.455-.372-2.247 0-1.274 1.047-2.066 2.58-2.066a5.32 5.32 0 0 1 2.103.465V2.456A5.629 5.629 0 0 0 9.348 2C6.865 2 5.322 3.291 5.322 5.366c0 .775.195 1.515.399 2.247H4v.972z'/></svg>"
    iconFrom.innerHTML="<img class='tl' src='12037.png' alt=''>"
})


calculate.addEventListener("click",function(){
if (tlToDolar.checked){
    let giriş = valueEntery.value
    let çıkışş = (giriş / aDolar).toFixed(2);
    result.innerHTML= "<input disabled  type='text' class='form-control bg-light text-dark fs-5' placeholder='" + çıkışş + "' >"
}
else if (dolarTotl.checked){
    let giriş = valueEntery.value
    let çıkışş = (aDolar * giriş).toFixed(2);
    result.innerHTML= "<input disabled  type='text' class='form-control bg-light text-dark fs-5' placeholder='" + çıkışş + "' >"
}
else if (tlToeuro.checked){
    let giriş = valueEntery.value
    let çıkışş = (giriş / aEuro).toFixed(2);
    result.innerHTML= "<input disabled  type='text' class='form-control bg-light text-dark fs-5' placeholder='" + çıkışş + "' >"
  
}
else if (euroTotl.checked){
    let giriş = valueEntery.value
    let çıkışş = (giriş * aEuro).toFixed(2);
    result.innerHTML= "<input disabled  type='text' class='form-control bg-light text-dark fs-5' placeholder='" + çıkışş + "' >"

} 
else if (tlToPound.checked){
    let giriş = valueEntery.value
    let çıkışş = (giriş / aPound).toFixed(2);
    result.innerHTML= "<input disabled  type='text' class='form-control bg-light text-dark fs-5' placeholder='" + çıkışş + "' >"
 
}
else if (poundTotl.checked){
    let giriş = valueEntery.value
    let çıkışş = (giriş * aPound).toFixed(2);
    result.innerHTML= "<input disabled  type='text' class='form-control bg-light text-dark fs-5' placeholder='" + çıkışş + "' >"
   
}


})