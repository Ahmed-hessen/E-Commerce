// Start  Loading Page 
window.addEventListener("load",function (){
    let loader = document.querySelector(".loader")
    loader.classList.add("loader-hidden")

    loader.addEventListener("transitionend",function(){
        document.body.removeChild("loader");
    })
})
// End  Loading Page 
// ==================================
//Start nav bar hover on account 
let account = document.getElementById("account");
let accountMenu = document.querySelector(".menu");

account.addEventListener("mouseenter",function(){
    accountMenu.style.display="block";

})
account.addEventListener("mouseleave",function(){
    accountMenu.style.display="none";
})
accountMenu.addEventListener("mouseenter",function(){
    accountMenu.style.display="block";
})
accountMenu.addEventListener("mouseleave",function(){
    accountMenu.style.display="none";
})
//End nav bar hover on account 
// ========================================================
// Start  Nav Bar Click On Categories
let categories = document.getElementById("category");
let categoryMenu=document.querySelector(".category-menu");

categories.addEventListener("click",()=> {
  body.classList.toggle("active")
})

// End  Nav Bar Click On Categories
// ========================================================
// Start Top Selling Section 
const carouselContent = document.querySelector('.carousel-content');
let scrollAmount = 250; 
let scrollPosition = 0;

function scrollCarousel(scrollOffset) {
  scrollPosition += scrollOffset;
  if (scrollPosition < 0) {
    scrollPosition = 0;
  } else if (scrollPosition > carouselContent.scrollWidth - carouselContent.clientWidth) {
    scrollPosition = carouselContent.scrollWidth - carouselContent.clientWidth;
  }
  carouselContent.style.transform = `translateX(-${scrollPosition}px)`;
}

document.querySelector('.prev').addEventListener('click', () => {
  scrollCarousel(-scrollAmount);
});

document.querySelector('.next').addEventListener('click', () => {
  scrollCarousel(scrollAmount);
});
// End Top Selling 
// =======================================
// Start best Seller JS 
let switcherButtons = document.querySelectorAll(".icons li");
let allCards = document.querySelectorAll(".carousel-content .card");

switcherButtons.forEach((li) => {
  li.addEventListener("click", function removeActiveAndManageImages(){
      // remove class active and add it on one we click
      switcherButtons.forEach((li) => {
          li.classList.remove("active");
          this.classList.add("active");
      })   
      // disappear all cards 
      allCards.forEach((card)=> {
        card.style.display = "none";
    })  
    // appear all cards 
      document.querySelectorAll(this.dataset.cat).forEach((card) =>{
        card.style.display="block";
      })
      document.getElementById("best-image").style.marginLeft="200px"
  })
})
// End best Seller JS
// ==========================================
// Start  Add To Cart Section 
let openShopingCart = document.querySelector(".cart");
let body = document.querySelector("body");

openShopingCart.addEventListener("click",()=>{
  body.classList.toggle("activation");
})

let productsList= [] 

 // Function to handle adding a card to the cart
 function addToCart(button) {
  const cardDiv = button.closest('.card');

  // Extract the specific values from the card
  const name = cardDiv.querySelector('.card-text').textContent;
  const pictureSrc = cardDiv.querySelector('.card-img-top').src;
  const price = parseFloat(cardDiv.querySelector('.sar-price span').textContent);

  let product = 
    {
      name,
      pictureSrc,
      price}
  productsList.push(product)
  // Create cart item elements
  const cartItem = document.createElement('li');
  productsList.forEach(function(product) {
    cartItem.innerHTML = `
    <ul class="listcards d-flex justify-content-between gap-3 px-5" style="list-style: none; color: black;">
    <li style="font-size: 12px; flex:2;">${product.name}</li>
        <li style="flex:2"><img src="${product.pictureSrc}" alt="Product Image" style="width: 60px; height: auto;"></li>
        <li style="flex:1"> ${product.price.toFixed(2)}</li>
    </ul>
`;
});
    // increase the quantity of cart by one every time 
  const quantityElement = document.getElementById('quantity');
  const currentQuantity = parseInt(quantityElement.textContent);// to change it into number
  quantityElement.textContent = currentQuantity + 1; // add one every time i add to cart 

  // calculate the total price of the element in the cart 
  const totalPriceElement = document.querySelector('.total');
  const currentTotal = parseFloat(totalPriceElement.textContent);
  const newTotal = currentTotal + price;
  totalPriceElement.textContent = newTotal.toFixed(2)+" SAR";

  // Append the cart item to the cart section
  const cartItemsList = document.querySelector('.cart-items');
  cartItemsList.appendChild(cartItem);
}
// End  Add To Cart Section 

