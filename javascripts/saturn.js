"use strict";

function outputSaturn(domElement) {
  var planetString= '';
  console.log(domElement);

  planetString += `<ul>`;
  planetString +=	`<li><h3>Saturn</h3><li>`;
  planetString += 	`<li>1800</li>`;
  planetString += 	`<li>4,000,000 lb</li>`;
  planetString += 	`<li>huge</li>`;
  planetString += 	`<li>56,000,000 sq miles</li>`;
  planetString += 	`<li>hydrogen</li>`;
  planetString += 	`<li>3 sattelites</li>`;
  planetString += 	`<li>apollo probe</li>`;
  planetString += `</ul>`;
  

    domElement.innerHTML += planetString;


}

module.exports = outputSaturn;