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

// var local = [
//   "War Dogs",
//   "The Sanctum",
//   "Windsor's Gym",
//   "The Raft",
//   "the LA Super Collider",
//   "the New York Super Collider",
//   "the New Mexico Super Collider",
//   "the New York Subway",
//   "Central Park",
//   "Times Square",
//   "Hell's Kitchen",
//   "SHIELD HQ"
// ];

var activity = [
  "have a fight",
  "hang out",
  "have a talk",
  "go to a party",
  "go on patrol",
  // "glitch",
  "go on a shopping trip",
  "go on vacation to",
  "go on a stakeout",
  "have a babysitting adventure",
  "have to solve a problem",
  "have to find their way home",
  "have to evade the enemy",
  "have to escape a disaster",
  "have to hide from the enemy",
  "fight the enemy",
  "play a prank on someone",
  "take a trip",
  "work on solving a mystery",
  "try to figure out how to solve a problem",
  "talk about life in general and how things are going",
  "have a philosophical discussion",
  "have a weird conversation",
  "talk about a shared life experience",
  "talk about their interests",
  "have a scientific discussion",
  "have a drink",
  "talk about a shared interest",
  "tell jokes to each other",
  "share personal stories",
  "spar with each other",
  "wait for something to happen",
  "clean up a mess cause by someone else",
  "have coffee together",
  "have lunch together",
  "have dinner together",
  "have dessert together",
  "have drinks together",
  "go on a walk in the park",
  "go outdoors together",
  "take a walk",
  "are stuck inside"
];

var universe = [
  "Alpha",
  "Beta",
  "Omega"
];

var prompt = {
  // 'local': local,
  'activity': activity,
  'universe': universe
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

function newPrompt1() {

  chara1 = randomString(ranChar['char']);
  document.getElementById('chara1').innerHTML = chara1;

  chara2 = randomString(ranChar['char']);
  document.getElementById('chara2').innerHTML = chara2;

  activity = randomString(prompt["activity"]);
  document.getElementById('prompt').innerHTML = activity;

  universe = randomString(prompt["universe"]);
  document.getElementById('universe').innerHTML = universe;

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
