// Arrays can have different length but short for the sake of practicality
let pronoun = ["our", "your"];
let adj = ["blue", "mighty", "infinite"];
let noun = ["cat", "dragon", "hobbit"];
// Choose random extension for each domain
let extensions = [".com", ".net", ".us", ".io", ".cl", ".org"]; // length = 6, lastIndex = 5

function generateDomains(arr1, arr2, arr3, arr4) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; k < arr3.length; k++) {
        // Print domains one by one
        console.log(
          `${arr1[i] +
            arr2[j] +
            arr3[k] +
            arr4[Math.floor(Math.random() * arr4.length)]}` //random number to choose index from extensions array
        );
      }
    }
  }
}

const domainNames = generateDomains(pronoun, adj, noun, extensions);

//Use node src/app.js to visualize in terminal