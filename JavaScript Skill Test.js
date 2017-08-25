/*
JavaScript Skill Test

Paul Rail Solution - 8/24/2017
jQuery Solution
*/



//SHORTEST WITHOUT COMMENTS
$('.product-tile-srp__image').click(function() {
  if ($(this).next().is(':empty')) {
    alert("Hello World");
  }
  else {
    alert($(this).next().html());
  }
});

//LONGER WITH COMMENTS
//select all images, which have class="product-tile-srp__image"
//when clicked on frun this function:
$('.product-tile-srp__image').click(function() {

  //check if the price field is empty
  //the .next() is required because the price is written within the div next to and after the div containing the image (as opposed to within).
  if ($(this).next().is(':empty')) {
    //if so, alert "Hello World"
    alert("Hello World");
  }
  else {
    //if not, alert the content within the div next to it, which is the price
    alert($(this).next().html());
  }
});


/*
//Vanilla JavaScript but not fully functioning:
// The product images are: img.product-tile-srp__image
//selecting all from the page:
const products = document.querySelectorAll('.product-tile-srp__image');

//listening for a use 'click' on an image to iniate the function "notice"
products.forEach(activate => activate.addEventListener('click', notice));

//the function which activates the alert
function notice() {
  let message = "Hello World";

  //BONUS: modify alert message to be the product price if listed.
  //all product prices are: div.product-tile__price
  //change the alert message if there is a price
  //not solved but here is the track I was on:


  // let text = event.target.getElementsByClassName('product-tile__price');
  //   if (event.target.createTextRange) {
  //       let range = document.body.createTextRange();
  //       let message = range.moveToElementText(text);
  //   }
  //

  alert(message);
}
*/
