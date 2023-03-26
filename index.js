let birth = prompt("Ваш рік народження?");
let age = " ";
let city = prompt("В якому місті ви проживаєте?");
let urCity = " ";
let sport = prompt("Ваш улюблений вид спорту?");
let urSport = " ";

birth === null || birth.trim() === "" || isNaN(+birth)
  ? (age = alert("Шкода, що Ви не захотіли ввести свій рік народження"))
  : (age = "Ваш вік: " + (2023 - birth));

if (city === null || city.trim() === "") {
  city = alert("Шкода, що Ви не захотіли ввести своє місто");
} else if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
  urCity = "Ти живеш у столиці " + city;
} else {
  urCity = "ти живеш у місті " + city;
}

if (sport === null || sport.trim() === "") {
  urSport ===
    alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту");
} else if (sport === "футбол") {
  urSport === "Круто! Хочеш стати Роналдо ? ";
} else if (sport === "теніс") {
  urSport === "Круто! Хочеш стати Світоліною ? ";
} else if (sport === "баскетбол") {
  urSport === "Круто! Хочеш стати Джорданом ?";
}
alert(age + "\n" + urCity + "\n" + urSport);
