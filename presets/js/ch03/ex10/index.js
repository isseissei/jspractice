const person = {
    name: "John",
    age: 30,
    address: Ibaraki
  };

  
  let keyArray = Object.keys(person);
  
  for(let i=0;i<keyArray.length;i++){
    console.log(keyArray[i]+person[keyArray[i]]);
  };