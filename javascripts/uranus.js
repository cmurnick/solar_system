"use strict";

function outputUranus(domElement) {
  var planetString= '';
  console.log(domElement);

  planetString += `<ul>`;
  planetString +=	`<li><h3>Uranus</h3><li>`;
  planetString += 	`<li>500</li>`;
  planetString += 	`<li>4,000,000 lb</li>`;
  planetString += 	`<li>huge</li>`;
  planetString += 	`<li>56,000,000 sq miles</li>`;
  planetString += 	`<li>nitrogen</li>`;
  planetString += 	`<li>3 sattelites</li>`;
  planetString += 	`<li>apollo probe</li>`;
  planetString += `</ul>`;
  

    domElement.innerHTML += planetString;


}

module.exports = outputUranus;