export function substring(str, indexStart, indexEnd) {
  if (indexEnd === undefined) {
    indexEnd = str.length;
  }
  if (indexStart < 0 ||isNaN(indexStart)) {
      indexStart =0;
  }
  if (indexEnd < 0 || isNaN(indexEnd)) {
      indexEnd =0;
  }
  if (indexEnd >str.length) {
    indexEnd = str.length;
  }
  if (indexStart >str.length) {
    indexStart = str.length;
  }
  if(indexStart>indexEnd){
    let k;
    k = indexStart;
    indexStart=indexEnd;
    indexEnd=k;
  };
  if (indexStart >str.length) {
    indexStart = str.length;
  }
  if (indexStart % 1 !== 0) {  
    indexStart = Math.floor(indexStart);
  }
  if (indexEnd % 1 !== 0) {  
    indexEnd = Math.floor(indexEnd);
  }
  let result = '';
  for (let i = indexStart; i < indexEnd && i < str.length; i++) {
      result += str[i];
  }
  return result;
}

export function slice(str, indexStart, indexEnd) {
  if (indexEnd === undefined) {
    indexEnd = str.length;
  }
  if (isNaN(indexStart)) {
      indexStart =0;
  }
  if (isNaN(indexEnd)) {
      indexEnd =0;
  }
  if (indexStart<0 && Math.abs(indexStart)<str.length) {
    indexStart = str.length+indexStart;
  }
  if (indexStart<0 && Math.abs(indexStart)>indexEnd) {
    indexStart = 0;
  }
  if (indexEnd<0) {
    indexEnd = Math.abs(str.length+indexEnd);
  }
  if (indexEnd >str.length) {
    indexEnd = str.length;
  }
  if (indexStart >str.length) {
    indexStart = str.length;
  }
  


  // if(indexStart>indexEnd){
  //   let k;
  //   k = indexStart;
  //   indexStart=indexEnd;
  //   indexEnd=k;
  // };
  if (indexStart >str.length) {
    indexStart = str.length;
  }
  if (indexStart % 1 !== 0) {  
    indexStart = Math.floor(indexStart);
  }
  if (indexEnd % 1 !== 0) {  
    indexEnd = Math.floor(indexEnd);
  }
  let result = '';
  for (let i = indexStart; i < indexEnd && i < str.length; i++) {
      result += str[i];
  }
  return result;
}

export function padStart(str, targetLength, padString) {
  if (str.length >= targetLength) {
    return str
  };
  const padLength = targetLength - str.length;
  let paddedString = '';
  if(padString==undefined){
    padString=" ";
  };
  while (paddedString.length < padLength) {
    paddedString += padString;
  }
  return paddedString.slice(0, padLength) + str;
}

export function trim(str) {
  let i = 0;
  let k = str.length - 1;
  while (str[i] === " ") {
    i += 1;
  }
  while (str[k] === " ") {
    k += -1;
  }
  return str.substring(i, k + 1);
}

