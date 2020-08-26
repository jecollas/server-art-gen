// here we go
var ready = function (fn) {
  if (typeof fn !== 'function') return
  if (document.readyState === 'complete') {
    return fn()
  }
  document.addEventListener('DOMContentLoaded', fn, false)
}

// geno1 js, from gen2, gen3, and prompt1 javascript

var char = [
  'Jesse Foster', // Winter Soldier
  'Dakota Reynolds', // Iron Man
  'Zoe Davis', // Venom
  'Tien Freyason', // Loki
  'Melissa Price', // Wolverine
  'Jaime Barnes', // Winter Soldier
  'Enna', // Gamora
  'Z Quill', // Star Lord
  'Xavier Wolfe', // Venom
  'Jacobi Sawyer' // Winter Soldier
]

var role = [
  'the Winter Soldier',
  'Iron Man',
  'Venom',
  'Wolverine',
  'Spider-Man',
  'Loki',
  'Gamora',
  'Star Lord',
  'Deadpool',
  'Captain Marvel',
  'Captain America'
]

var activity = [
  'have a fight',
  'hang out',
  'have a talk',
  'go to a party',
  'go on patrol',
  'go on a shopping trip',
  'go on vacation',
  'go on a stakeout',
  'have a babysitting adventure',
  'have to solve a problem',
  'have to find their way home',
  'have to evade the enemy',
  'have to escape a disaster',
  'have to hide from an enemy',
  'fight the enemy',
  'play a prank on someone',
  'take a trip',
  'work on solving a mystery',
  'try to figure out how to solve a problem',
  'talk about life in general and how things are going',
  'have a philosophical discussion',
  'have a weird conversation',
  'talk about a shared life experience',
  'talk about their interests',
  'have a scientific discussion',
  'have a drink',
  'talk about a shared interest',
  'tell jokes to each other',
  'share personal stories',
  'spar with each other',
  'wait for something to happen',
  'clean up a mess caused by someone else',
  'have coffee together',
  'have lunch together',
  'have dinner together',
  'have dessert together',
  'have drinks together',
  'go on a walk in the park',
  'go outdoors together',
  'take a walk',
  'are stuck inside'
]

var universe = [
  'Alpha',
  'Beta',
  'Omega'
]

// from geno4 js

var phrases = [
  'sitting and enjoying a good book',
  'cooking a meal',
  'watching a scary movie',
  'watching TV',
  'having a lazy day',
  'baking cookies',
  'cooking a meal',
  'relaxing under a tree',
  'attending ComicCon',
  'playing a musical instrument',
  'taking a nap',
  "playing with a rubik's cube",
  'telling standup comedy',
  'trying something new',
  'getting scared by something silly',
  'as a ghost',
  'as a pirate',
  'as a mermaid',
  'as a centaur',
  'as a cervitaur',
  'as a fairy',
  'as a villain',
  'as a hero',
  'as a nature spirit',
  'as a water spirit',
  'as a deity',
  'as a medieval knight',
  'as a dragon',
  'as a water elemental',
  'as a fire elemental',
  'as an earth elemental',
  'as an air elemental',
  'as a monster',
  'as a werewolf',
  'as a child',
  'as a parent',
  'as a lawyer',
  'as a model',
  'as a photographer',
  'as a doctor',
  'as a vampire',
  'as a robot',
  'as a criminal',
  'as their polar opposite',
  'as the embodiment of spring',
  'as the embodiment of summer',
  'as the embodiment of autumn',
  'as the embodiment of winter',
  'as a constellation',
  'as a naga',
  'as a scientist',
  'as their ideal self',
  'as your ideal self',
  'as a biker',
  'as a farmer',
  'as a natural disaster',
  'as a professional athlete',
  'as a professional singer',
  'as a professional dancer',
  'as a professional chef',
  'as a noir detective',
  'as a femme fatale',
  'as a dryad',
  'as a witch',
  'as the embodiment of the sun',
  'as the embodiment of the moon',
  'as the embodiment of the stars',
  'as an Infinity Warp fusion',
  'as a waterbender',
  'as a firebender',
  'as an earthbender',
  'as an airbender',
  'as a DC character',
  'as a pokémon trainer',
  'as a pokémon',
  'as a symbiote',
  'as the protagonist of your favorite movie',
  'as the protagonist of your favorite TV show',
  'as the protagonist of your favorite book series',
  'as your favorite (or second favorite) fictional character',
  'as your favorite vine',
  'as a DnD character',
  'as a Crystal Gem',
  'as your icon',
  'as the embodiment of the Space Stone',
  'as the embodiment of the Power Stone',
  'as the embodiment of the Reality Stone',
  'as the embodiment of the Soul Stone',
  'as the embodiment of the Time Stone',
  'as the embodiment of the Mind Stone',
  'as a demigod from the Percy Jackson series',
  'as a character from your favorite musical',
  'as a Jedi Knight',
  'as a Homestuck troll',
  'as your favorite hero',
  'as your favorite villain',
  'as a Disney Princess',
  'as a Greek god',
  'as a Roman god',
  'as an Egyptian god',
  'as a Hindu god',
  "in another person's drawing style",
  'in lingerie',
  'in the outfit of their main antagonist',
  'in a coffee shop AU',
  'in fancy clothes',
  'in their pajamas',
  'in a swimsuit',
  'in a photograph',
  'in a tuxedo',
  'in a Hogwarts uniform',
  'in a no-powers AU',
  'in the universe of your favorite movie',
  'in the universe of your favorite TV show',
  'in the universe of your favorite book series',
  'in a Hawaiian shirt',
  'in a dance costume',
  'in an improbable situation',
  "in an outfit from the 1920's",
  'in an outfit traditional to their culture or religion',
  'in the color palette of their pride flag',
  'in the outfit of your favorite fictional character',
  'in a precarious situation',
  'in a clubbing outfit',
  'in their Homestuck God Tier outfit',
  "with another character's color palette",
  'with their hair and eye color swapped',
  'with their hair and eye color inverted',
  'with a soulmark',
  'with wings',
  'with cat ears and a tail',
  'with a bow and arrow',
  'with a sword',
  'with an axe',
  'with a lightsaber',
  'with a cat',
  'with a dog',
  'with a pet',
  "wearing their significant other's clothes",
  'wearing armor',
  'wearing your clothes',
  "wearing what you're wearing right now",
  'wearing a Halloween costume',
  'wearing an ugly holiday sweater',
  'wearing an ugly Christmas sweater',
  'wearing an ugly Hanukkah sweater',
  'wearing an outfit from the MET Gala',
  'wearing an outfit from Game of Thrones',
  "wearing a couples' costume with their significant other",
  'wearing a suit',
  'wearing a ballgown',
  'wearing an evening gown',
  'wearing a cocktail dress',
  'wearing high heels',
  'wearing your favorite outfit',
  'wearing a Disney Princess dress',
  'at an aquarium',
  'at the zoo',
  'at work',
  'at a carnival',
  'on a date with another character',
  'on a museum date',
  'on an aquarium date',
  'on a swingset',
  'on a carnival date',
  'role swapped with their significant other',
  'after they’ve lost a fight',
  'and their significant other in the roles of another couple',
  'and their significant other as starcrossed lovers',
  'and their significant other in a nerd/jock AU',
  'and their significant other in a goth/prep AU',
  'and their significant other as Hades and Persephone',
  'kissing their significant other',
  'kissing another character on the forehead',
  'kissing another character on the cheek',
  'getting kissed on the forehead',
  'getting kissed on the cheek',
  "kissing another character's hand",
  'getting kissed on the hand',
  'getting a hug',
  'giving a hug',
  'fighting another character',
  'celebrating Kwanzaa',
  'celebrating Diwali',
  'getting a kiss under the mistletoe',
  'celebrating Hanukkah',
  'celebrating Christmas',
  "celebrating New Year's Eve",
  'having dinner with their significant other',
  "realizing that they're in love",
  'falling in love',
  "celebrating Valentine's Day",
  'celebrating Halloween',
  'hanging out with you',
  'giving you a hug',
  'using words instead of lines',
  'using the lyrics of your favorite song as inspiration',
  "using the lyrics to whatever song you're listening to as inspiration",
  'using your favorite time of day as inspiration',
  'using only your favorite color',
  'riding a skateboard',
  'riding a bicycle',
  'going swimming',
  'surfing',
  'dancing ballet',
  'dancing hip-hop',
  'doing martial arts',
  'doing gymnastics',
  'riding a dragon',
  'riding a horse',
  'riding a motorcycle',
  'punching a Nazi',
  'challenging an inanimate object to a fight',
  'trying to build IKEA furniture',
  'crying over a loved one',
  'crying over a television show',
  'crying tears of joy',
  'watching the sun set',
  'relaxing on a pool float',
  'trying to flirt',
  'using a bad pickup line',
  'crying',
  'screaming',
  'watching the sunrise',
  'watching the sunset',
  "having an 'oh shit' moment",
  'having a sick day'
]

var ranChar = {
  char: char,
  role: role
}

var prompt = {
  activity: activity,
  universe: universe
}

function random (arr) {
  return Math.floor((Math.random() * arr))
}

function randomString (strings) {
  var randA = random(strings.length)
  return strings[randA]
}

function newIdea1 () {
  char = randomString(ranChar.char)
  document.getElementById('randomChar').innerHTML = char

  role = randomString(ranChar.role)
  document.getElementById('randomRole').innerHTML = role
}

function newIdea2 () {
  var char1 = randomString(ranChar.char)
  document.getElementById('char1').innerHTML = char1

  var char2 = randomString(ranChar.char)
  document.getElementById('char2').innerHTML = char2
}

function newPrompt1 () {
  var chara1 = randomString(ranChar.char)
  document.getElementById('chara1').innerHTML = chara1

  var chara2 = randomString(ranChar.char)
  document.getElementById('chara2').innerHTML = chara2

  var activity = randomString(prompt.activity)
  document.getElementById('prompt').innerHTML = activity

  var universe = randomString(prompt.universe)
  document.getElementById('universe').innerHTML = universe
}

function ideaClick () {
  var phrase = randomString(phrases)
  document.getElementById('noun').innerHTML = phrase
}

var mora = document.getElementsByClassName('mora')
var i

function openMora () {
  for (i = 0; i < mora.length; i++) {
    mora[i].addEventListener('click', function () {
      this.classList.toggle('active')
      var content = this.nextElementSibling
      if (content.style.display === 'block') {
        content.style.display = 'none'
      } else {
        content.style.display = 'block'
      }
    })
  }
}

// geno3 js, mostly image stuff I think

var modal = document.getElementById('fanartModalA')
function openModal () {
  document.getElementById('fanartModalA').style.display = 'block'
}

function closeModal () {
  document.getElementById('fanartModalA').style.display = 'none'
}

var slideIndex = 1
showSlides(slideIndex)

// // Next/previous controls
function plusSlides (n) {
  showSlides(slideIndex += n)
}

// Thumbnail image controls
function art (n) {
  showSlides(slideIndex = n)
}

function showSlides (n) {
  var i
  var slides = document.getElementsByClassName('artModal')

  var captionText = document.getElementById('captionA')
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[slideIndex - 1].style.display = 'block'
}

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
}
