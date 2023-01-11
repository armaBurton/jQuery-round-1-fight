// const func1 = () => {
//**************
//SELECTORS
//$(element name).action()
//document.getElementByTagName(element name)
// $("div").css("background-color", "orange");
// $(".p1").css("font-style", "italic");
// $("div").css("margin-bottom", "10px");
// $("#div1, #div2").css("background-color", "green");
// $("li:even").css("background-color", "yellow");
// $("div p:last").fadeToggle();
// $("p:first").css("background-color", "pink");
// $("li:nth-child(2), li:nth-child(5)").fadeToggle();
// $("li").filter(":nth-child(2), :nth-child(5)").fadeToggle();
//************
//EVENTS
$(window).on("load", () => {
  $("#btn").on("dblclick", () => {
    $("#img1").css("width", "500px");
  });
});
