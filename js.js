/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a white background when you click on one of them*/


// Click function that calls the class .hello and changes background color when clicked
$(".hello").click(function(){
    $(this).attr("class","turnWhite");
});


changeHW();



/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */
//two functions that when mouse hovers over the text it changes fontsize to 20px
function changeHW() {
    $("h1").on("mouseover", function () {
        $(this).addClass("fontSize");
    })
    $("h1").on('mouseout', function(){
        $("h1").removeClass("fontSize")
    })


}

clickedDot();

/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */

function clickedDot(){
    $(".hello:first").on("click", function f() {
        $(this).append(".");
    })
}