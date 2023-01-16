'use strict';

/**
 * Variable
 */
const card = document.querySelector(".cardFlip-content");

/**
 *
 * Function for flipping cards
 */
const flipped = () => card.classList.toggle("is-flipped");

card.addEventListener("click", flipped);
