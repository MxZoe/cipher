function getSentence(){
  const sentence = prompt("Enter a sentence: ");
  return sentence;
}

function capitalize(sentence){
  const senLength = sentence.length;
  const newSentence = sentence.charAt(0).toUpperCase() + 
                      sentence.slice(1,senLength -2) + 
                      sentence.charAt(senLength-1).toUpperCase();
  return newSentence;

}
function printSentence(sentence){
  console.log(sentence);
}
printSentence(capitalize(getSentence()));