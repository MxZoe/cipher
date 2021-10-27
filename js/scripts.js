//get a sentence from a prompt
function getSentence(){
  const sentence = prompt("Enter a sentence: ");
  return sentence;
}

//capitalize the first and last characters from a parameter
function capitalize(sentence){
  const senLength = sentence.length;
  const newSentence = sentence.charAt(0).toUpperCase() + 
                      sentence.slice(1,senLength -2) + 
                      sentence.charAt(senLength-1).toUpperCase();
  return newSentence;
}

//switch the first and last characters of a parameter
function reverseFirstLast(sentence){
  const senLength = sentence.length;
  const firstChar = sentence.charAt(0);
  const lastChar = sentence.charAt(senLength - 1);

  swapped = lastChar + sentence.slice(1, senLength-2) + firstChar;

  return swapped;
}


//print parameter to console
function printSentence(sentence){
  console.log(sentence);
}

const capitalizedSentence = (capitalize(getSentence()))
const switchedSentence = reverseFirstLast(capitalizedSentence);
printSentence(switchedSentence);