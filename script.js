
for (i = 1; i <= 7; i++){
    console.log(i);
  }

  
  console.log('====================================');
  
  
  for (c = 5; c <= 25; c += 4){
    console.log(c);
  }
  
  console.log('====================================');
  

  const wizards = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley"
  ];
  

  for (w of wizards){
    console.log(w);
  }
  
  console.log('====================================');
  

  let harryPotterMovies = 0;
  

  while (harryPotterMovies <= 7){

    harryPotterMovies++;
  }
  
  // 4c
  console.log(harryPotterMovies); // 8
  


  const hogwartsHouses = [
    "Gryffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin"
  ];
  

  for (houses of hogwartsHouses){
    for (char of houses){
      console.log(char);
    }
  }
  
  console.log('====================================');
  

  const quote = [
    "Yer",
    "A",
    "Wizard",
    "Harry"
  ];
  

  let quoteTwo = ``;
  for (char of quote){
    quoteTwo += char + ` `;
    // console.log(quoteTwo);
  }
  console.log(quoteTwo); 

  
  console.log('====================================');
  
  // 7
  for (i = 1; i <= 25; i++){
    if (i % 3 === 0 && i % 5 === 0){
      console.log("Expecto Patronum");
    } else if (i % 3 === 0) {
      console.log("Expecto");
    } else if (i % 5 === 0){
      console.log("Patronum");
    } else {
      console.log(i);
    }
  }