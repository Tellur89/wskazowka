function checkValue() {
  var ing1 = document.getElementById("input1").value;
  var ing2 = document.getElementById("input2").value;
  var ing3 = document.getElementById("input3").value;

  if (
    (ing1 == "syrop waniliowy" || ing1 == "sok z cytryny" || ing1 == "wodka") &&
    (ing2 == "syrop waniliowy" || ing2 == "sok z cytryny" || ing2 == "wodka") &&
    (ing3 == "syrop waniliowy" || ing3 == "sok z cytryny" || ing3 == "wodka")
  ) {
    document
      .getElementById("form")
      .setAttribute(
        "action",
        "https://tellur89.github.io/wskazowka/wskazowka.html"
      );
  } else {
    alert(
      "Spróbuj jeszcze raz. Pamiętaj, nie używaj polskich znaków i pisz z małej litery"
    );
  }
}
