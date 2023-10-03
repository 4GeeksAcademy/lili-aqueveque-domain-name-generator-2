/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Arrays can have different length but short for the sake of practicality
  let pronoun = ["our", "your"];
  let adj = ["blue", "mighty", "infinite"];
  let noun = ["cat", "dragon", "hobbit"];
  // Choose random extension for each domain
  let extensions = [".com", ".net", ".us", ".io", ".cl", ".org"]; // length = 6, lastIndex = 5

  // Function to generate domain names
  function generateDomains(arr1, arr2, arr3, arr4) {
    let domains = [];
    // Three-dimensional for loop
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        for (let k = 0; k < arr3.length; k++) {
          // Generate domain names and push them to the domains array
          domains.push(
            `${arr1[i] +
              arr2[j] +
              arr3[k] +
              arr4[Math.floor(Math.random() * 6)]}`
          );
        }
      }
    }
    return domains;
  }
  // Get the element with id "domain"
  var domainElement = document.getElementById("domain");

  //The generated domain names are stored in the generatedDomains variable.
  var generatedDomains = generateDomains(pronoun, adj, noun, extensions);

  //Join the elements of the generatedDomains array into a string where each domain name is separated by <br> tags.
  domainElement.innerHTML = generatedDomains.join("<br>");
};
