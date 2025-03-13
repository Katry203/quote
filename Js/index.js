var button = document.querySelector("button")
var quote = document.querySelector(".quote")
var Ather = document.querySelector(".Ather")

var quotes = ["“Be yourself; everyone else is already taken.” ",
  "“So many books, so little time.”",
  "“A room without books is like a body without a soul.”",
  "“You only live once, but if you do it right, once is enough.”"
]
var Athers = ["― Oscar Wilde",
  "― Frank Zappa",
  "― Marcus Tullius Cicero",
  "― Mae West"
]
function add_quotes() {
  var a = Math.floor(Math.random() * (2 + 1))
  quote.innerHTML = quotes[a];
  Ather.innerHTML = Athers[a];
}
// Math.floor(Math.random() * (N + 1)
button.addEventListener("click", function () {
  add_quotes()

}) 