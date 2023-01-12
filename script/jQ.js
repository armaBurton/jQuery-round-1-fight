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
// $(window).on("load", () => {
//   $("#btn").on("dblclick", () => {
//     $("#img1").css("width", "500px");
//   });
// });
//*****************
//EFFECTS
// $(window).on("load", () => {
//   $("#btn1").on("click", () => {
//     $("#img1").fadeOut(2000);
//   });

//   $("#btn2").on("click", () => {
//     $("#img1").fadeIn(2000);
//   });

//   $("#btn3").on("click", () => {
//     $("#img1").fadeToggle(2000);
//   });
// });
// $(window).on("load", () => {
//   $("#btn").on("click", () => {
//     $("#img").animate(
//       {
//         left: "150px",
//         opacity: "1",
//         height: "400px",
//         width: "400px",
//       },
//       2000,
//       () =>
//         $("#img").animate(
//           {
//             left: 0,
//             opacity: "0.4",
//             height: "250px",
//             width: "250px",
//           },
//           2000
//         )
//     );
//   });
// });

// const changeBack = () => {
//   $("#img").animate(
//     {
//       left: 0,
//       opacity: "0.4",
//       height: "250px",
//       width: "250px",
//     },
//     2000
//   );
// };

$(window).on("load", () => {
  // $(".div1").on("click", () => {
  //   const x = $(".p1").html();
  //   $("#span1").text(x);
  // });
  // $(".div1").on("click", () => {
  //   console.log($(".p1").html());
  //   console.log($(".p1").text());
  // });
  // $("#btn1").on("click", () => {
  //   $(".p1").attr("id", "idp2");
  // });
  // $(".p1").on("click", () => {
  //   console.log(`|| $('.p1').attr('id')) >`, $(".p1").attr("id"));
  // });
  const getRGBColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
  };

  $("#btn1").on("click", () => {
    $(".div1").css("background-color", getRGBColor());
  });
  $(".div1").on("click", () => {
    console.log($(".div1").css("background-color"));
  });
});
