import Popup from "./Popup.js";
export default class DonationsPopup extends Popup {
  constructor(popupSelector, formSubmit) {
    super({ popupSelector });
    this._donationForm = this._popupElement.querySelector(".donation-form");
    this._formSubmit = formSubmit;
    this._submitButton = this._popupElement.querySelector(
      ".donation-form__submit-button"
    );
  }

  _getInputValues() {
    const inputValues = {};
    const inputElements = this._form.querySelectorAll(".donation-form__input");
    inputElements.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }
  close() {
    this._donationForm.reset();
    super.close();
  }
  setEventListeners() {
    this._donationForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._formSubmit(inputValues);
    });
    super.setEventListeners();
  }
}
