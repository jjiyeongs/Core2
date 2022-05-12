var bgcolors = ["rgb(173, 198, 209)", "#B481BB", "#3A8FB7", "#1560BD", "#6D2E5B", "#8B81C3", "#51A8DD", "#006284", "#B5495B", "#EB7A77", "#C1693C", "#9ACD32", "#81C7D4", "#86C166", "#F05E1C", "#BFDAE5", "#33CC00", "#0C0C0C", "#FEDFE1", "#EEA9A9", "#E87A90", "#096148", "#5DAC81", "#EEED09", "#FFB11B", "#899BA9"]
var letter = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var bgimg = ["rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)", "rgb(173, 198, 209)"];

document.onkeydown = function (e) {
  console.log("key down", event);
  document.querySelectorAll(".colors").forEach(a => {
    a.style.display = "none";
  })
  document.body.style.backgroundColor = "#000000";
  cursor.style.display = "block";
  var randomIndex = Math.floor(Math.random() * bgcolors.length);
  if (e.key == " ") { return };
  cursor.style.display = "none";
  document.body.style.backgroundColor = bgcolors[e.keyCode - 65];
  document.body.style.backgroundImage = bgimg[randomIndex];
  if (e.key == "Enter") { 
    document.getElementById(letter[randomIndex]).style.display = "block";
    document.body.style.backgroundColor = bgcolors[randomIndex];
  }
  else {
    document.getElementById(e.key).style.display = "block";
  }
}