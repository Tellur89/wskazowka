function checkValue() {
  var ing1 = document.getElementById("input1").value;
  var ing2 = document.getElementById("input2").value;
  var ing3 = document.getElementById("input3").value;
  var ing4 = document.getElementById("input4").value;

  if (
    (ing1 == "gowno" || ing1 == "dupa" || ing1 == "fiut" || ing1 == "maslo") &&
    (ing2 == "gowno" || ing2 == "dupa" || ing2 == "fiut" || ing2 == "maslo") &&
    (ing3 == "gowno" || ing3 == "dupa" || ing3 == "fiut" || ing3 == "maslo") &&
    (ing4 == "gowno" || ing4 == "dupa" || ing4 == "fiut" || ing4 == "maslo")
  ) {
    document.getElementById("form").setAttribute("action", "wskazowka/wskazowka.html");
  } else {
    console.log("Error");
  }
}
