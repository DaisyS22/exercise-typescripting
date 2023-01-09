//NUMBER 1
class City {
  cityName: string;
  country: string;
  population: number;
  constructor(cityName: string, country: string, population: number) {
    this.cityName = cityName;
    this.country = country;
    this.population = population;
  }
}

const cities: City[] = JSON.parse(localStorage.getItem("cities") || "[]");

function addCity(city: City) {
  cities.push(city);
  localStorage.setItem("cities", JSON.stringify(cities));
}

function renderList(cityList: City[] = cities) {
  const list = document.getElementById("list") as HTMLElement;
  list.innerHTML = "";
  for (const city of cityList) {
    const li = document.createElement("li");
    li.textContent = `${city.cityName}, ${city.country}, ${city.population}`;
    list.appendChild(li);
  }
}

const addForm = document.getElementById("addForm") as HTMLElement;
addForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  const cityName = (document.getElementById("cityName") as HTMLInputElement)
    .value;
  const country = (document.getElementById("country") as HTMLInputElement)
    .value;
  const population = (document.getElementById("population") as HTMLInputElement)
    .valueAsNumber;
  addCity(new City(cityName, country, population));
  renderList(cities);
});

const searchInput = document.getElementById("searchInput") as HTMLInputElement;
searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();
  const filteredCities = cities.filter((city) => {
    return (
      city.cityName.toLowerCase().includes(searchValue) ||
      city.country.toLowerCase().includes(searchValue)
    );
  });
  renderList(filteredCities);
});

//NUMBER 2
var array1: any[] = [1, 1, 1, 2, 2, 2, 3, 3, 3];

export const isbnTester = () => {
  if (array1.length != 10) {
    console.log("False");
  } else {
    let i = 0;
    let quotient = 0;
    while (i < array1.length - 2) {
      quotient += array1[i] * (i + 1);
      i++;
    }
    if ((array1[array1.length - 1] = "X")) {
      quotient += 10 * 10;
    } else {
      quotient += array1.length - 1 * 10;
    }
    if (quotient % 11 == 0) {
      console.log("True");
    } else {
      console.log("False");
    }
  }
};

isbnTester();

//NUMBER 3
function vowelLetter(ch: string) {
  if (
    ch != "a" &&
    ch != "e" &&
    ch != "i" &&
    ch != "o" &&
    ch != "u" &&
    ch != "A" &&
    ch != "E" &&
    ch != "I" &&
    ch != "O" &&
    ch != "U"
  ) {
    return false;
  }
  return true;
}

function replaceAlphabets(s: string[]) {
  var newArray: string[] = [];
  for (var i = 0; i < s.length; i++) {
    let nextLetter = String.fromCharCode(s[i].charCodeAt(0) + 1);
    if (s[i] == "z" || s[i] == "Z") {
      newArray.push("A");
    } else if (vowelLetter(s[i]) == false) {
      if (vowelLetter(nextLetter) == true) {
        newArray.push(nextLetter.toUpperCase());
      } else if (vowelLetter(nextLetter) == false) {
        if (/^[a-zA-Z]+$/.test(s[i])) {
          newArray.push(nextLetter.toLowerCase());
        } else {
          newArray.push(s[i]);
        }
      }
    } else if (vowelLetter(s[i]) == true) {
      newArray.push(nextLetter);
    }
  }
  return newArray.join("");
}

var s = "Cat30".split("");
console.log(replaceAlphabets(s));

function pushZerosToEnd(moveZeros: any, n: number) {
  var count: number = 0;
  for (let i = 0; i < n; i++) {
    if (moveZeros[i].toString() != "0") {
      moveZeros[count++] = moveZeros[i];
    }
  }
  while (count < n) {
    moveZeros[count++] = 0;
  }
}

var moveZeros = new Array();
moveZeros = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
var n: number = moveZeros.length;
pushZerosToEnd(moveZeros, n);
for (let i = 0; i < n; i++) console.log(moveZeros[i] + " ");
