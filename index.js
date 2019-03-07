function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine>[]) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine, name){
  var line = []
  if (katzDeliLine>[]){
    for (var i = 0; i<katzDeliLine.length; i++){
      line.push(`${i}. ${name}`);
      return "The line is currently " + line;
      }
  }else{
    return "The line is currently empty.";
  }
}