// IMPORTS
import DonationCard from "../components/DonationCard.js";
import Section from "../components/Section.js";

import Donations from "../components/Donations.js";
import "../pages/index.css";

import Api from "../components/Api.js";
import Charities from "../components/Charities.js";
import CharityCard from "../components/CharityCard.js";

import DonationsPopup from "../components/DonationsPopup.js";
import { coderInfo } from "../utils/constants.js";

const donateButton = document.querySelector(".donate__button");

//API instantiation
const api = new Api({
  baseUrl: "https://partners.every.org/v0.2/",
  apiKey: "pk_live_51295acbffe33d27ac313b33feb97d63",
});

//Charity Form

const charityForm = new Charities(".charities", handleCharityFormSubmit);
charityForm.setEventListeners();

function handleCharityFormSubmit(data) {
  api
    .getInfo(data)
    .then((res) => {
      createCharityCard(res.nonprofits[2]);
      charityCardList.renderItems(res.nonprofits);
    })
    .catch(console.error);
}

function createCharityCard(data) {
  const charityCard = new CharityCard(data, "#charity-card-template");
  return charityCard.generateCard();
}

const charityCardList = new Section(createCharityCard, "#charities-container");

// CLASS INSTANTATION
const createDonationCard = (cardData) => {
  const newCard = new DonationCard(cardData, "#donation-card__template");
  return newCard.createCard();
};
const donationRenderer = (inputData) => {
  console.log(inputData);
  sectionDonations.addItem(inputData);
};
const donationsPopup = new DonationsPopup(donationRenderer, ".donation__popup");
const sectionDonations = new Section(createDonationCard, ".donations__gallery");

// FUNCTIONS
function donateButtonHandler() {
  donationsPopup.open();
}

// CLASS METHOD CALLS
donationsPopup.setEventListeners();

// EVENT LISTENERS
donateButton.addEventListener("click", donateButtonHandler);
