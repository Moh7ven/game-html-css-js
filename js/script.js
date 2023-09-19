let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let square = parseInt(e.target.children[0].value);
  let minute = parseInt(e.target.children[1].value);
  let button = parseInt(e.target.children[2]);
  let error = "";

  if (square < 4 || square > 200) {
    error = "le nombre de case doit être compris entre 4 et 200.";
  } else if (square % 2 !== 0) {
    error = "Vous devez entrez un nombre multiple de 2.";
  } else if (minute < 1 || minute > 5) {
    error == "Veuillez entrer un nombre compris entre 1 et 5.";
  }

  if (error) {
    button.textContent = error;
    button.style.backgroundColor = "red";
    button.disabled = true;

    setTimeout(()=>{
        button.disabled = false;
        button.textContent = "submit";
        button.style.backgroundColor = "#279EFF";
    },3000)
  }

  console.log(square, minute);
});
