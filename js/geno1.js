// here we go now

var ready = function(fn) {
  if (typeof fn !== 'function') return;
  if (document.readyState === 'complete') {
    return fn();
  }
  document.addEventListener('DOMContentLoaded', fn, false);
};

// now we start

var char = [
  'Jesse Foster', //Winter Soldier
  'Dakota Reynolds', //Iron Man
  'Zoe Davis', //Venom
  'Marcus Gunderson', //Thor
  'Flynn Garrett', //Scarlet Witch
  'Ahrel', //Loki
  'Melissa', //Wolverine
  'Jaime Barnes', //Winter Soldier
  'Winona Windsor', //Venom
  'Daniel Nation', //Doctor Strange
  'Nita Ohm', //Spider Man
  'Donni Dimitries', //Prowler
  'Lea', //Rufus
  'Noriko', //Loki
  'Enna', //Gamora
  'Z Quill', //Star Lord
  'Xavier Wolfe', //Venom
  'Victoria Austere', //Iron Man
  'Rowsan Raheb' //Deadpool
];

var role = [
  "the Winter Soldier",
  "Iron Man",
  "Venom",
  "Thor",
  "the Scarlet Witch",
  "Wolverine",
  "Doctor Strange",
  "Spider-Man",
  "the Prowler",
  "Rufus the cat",
  "Loki",
  "Gamora",
  "Star Lord",
  "Deadpool",
  "Captain Marvel",
  "Mystique",
  "Captain America"
];

var ranChar = {
  'char': char,
  'role': role
};

function random(arr) {
  return Math.floor((Math.random() * arr));
}

function randomString(strings) {
  var randA = random(strings.length);
  return strings[randA];
}

function newIdea1() {

  char = randomString(ranChar["char"]);
  document.getElementById('randomChar').innerHTML = char;

  role = randomString(ranChar["role"]);
  document.getElementById('randomRole').innerHTML = role;
}

function newIdea2() {

  char1 = randomString(ranChar["char"]);
  document.getElementById('char1').innerHTML = char1;

  char2 = randomString(ranChar["char"]);
  document.getElementById('char2').innerHTML = char2;

}

function openMore() {

  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  }
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }

}
