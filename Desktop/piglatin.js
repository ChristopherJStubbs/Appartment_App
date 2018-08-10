//pig latin generator

// input string

var string = prompt("This is our PIG-CARD Latin Generator. Enter what you want to translate:").toLowerCase()

// create empty array to push in the new elements
var newStr = []

// split into an array

function splitStr(str) {
  var x = str.split(" ")
  return x
}
var words = splitStr(string);
// if words starts with vowel add "way"
var vowels = ["a", "e", "i", "o", "u"]


//find the index of the first vowel occurence
for(let i = 0; i < words.length; i++) {
  if(vowels.includes(words[i][0])) {
    newStr.push(words[i]+"picard")
    // if word starts with const move the frst consecutive const to the end of the word and add "ay"
  } else if (words[i].startsWith("qu")){
      var y = words[i].slice(0, 2)
      var leftOver = words[i].replace(y, "")
      newStr.push(leftOver + y + "icard")
  } else if (words[i].startsWith("squ")){
      var z = words[i].slice(0, 3)
      var leftOver = words[i].replace(z, "")
      newStr.push(leftOver + z + "icard")
  } else {
    var cons = words[i].split("a")
    cons = cons[0].split("e")
    cons = cons[0].split("i")
    cons = cons[0].split("o")
    cons = cons[0].split("u")
    cons = cons[0]
    var leftOver = words[i].replace(cons, "")
    newStr.push(leftOver+cons+"icard")
//isolate the a string that stops before the first occurence
  }
}

// If there's comma, period, question mark and exclamation mark move it to the end of the word
var finalStr=[]
for (i=0;i<newStr.length;i++){
  if (newStr[i].includes(",")) {
    var comma=newStr[i].replace(",","")

    finalStr.push(comma+",")

  } else if (newStr[i].includes(".")){
    var period= newStr[i].replace(".","")
    finalStr.push(period+".")

  } else if (newStr[i].includes("!")){
    var exclamation= newStr[i].replace("!","")
    finalStr.push(exclamation+"!")

  } else if (newStr[i].includes("?")){
    var questionMark= newStr[i].replace("?","")
    finalStr.push(questionMark+"?")

  } else {
    finalStr.push(newStr[i])
  }
}

// console.log(finalStr.join(" "))

var joinedString = finalStr.join(" ")
var firstCapString = joinedString.charAt(0).toUpperCase() + joinedString.substr(1);
console.log(firstCapString);

// create scenario for exceptions

// join elements back into a string


// output string
