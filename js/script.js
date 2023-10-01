let form = document.querySelector("form");

let mini = 0;
let squ = 0;

let info = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let square = parseInt(e.target.children[0].value);
  let minute = parseInt(e.target.children[1].value);
  let button = e.target.children[2];
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

    setTimeout(() => {
      button.disabled = false;
      button.textContent = "submit";
      button.style.backgroundColor = "#279EFF";
    }, 3000);
  } else {
    squ = square;
    mini = minute;

    genInfos(squ / 2);

    console.log(info);
  }

  console.log(square, minute);
});

function genColor() {
  let color = [
    "red",
    "blue",
    "yellow",
    "purple",
    "green",
    "lime",
    "skyblue",
    "grey",
    "orange",
    "pink",
  ];
  let index = Math.floor(Math.random() * color.length);
  console.log(index);
  return color[index];
}

function genInfos(nombre) {
  for (let i = 1; i <= nombre; i++) {
    info.push({
      nombre: i,
      color: genColor(),
    });
  }
}

function getDivider(nombre) {
  let divide = [];
  let output = [];
  for (let i = 2; i <= nombre - 1; i++) {
    if (nombre % i === 0) {
      let m1 = i;
      let m2 = nombre / i;
      if (!divide.includes(m1) && !divide.includes(m2)) {
        divide.push(m1, m2);
        let diff = m1 > m2 ? m1 - m2 : m2 - m1;
        output.push({ m1, m2, diff });
      }
    }
  }
  console.log(output);
  output.sort((a, b) => a.diff - b.diff);
  console.log(output);

  return output[0];
}

console.log(getDivider(12));
