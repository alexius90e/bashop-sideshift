const launchHeader = document.querySelector(".header_launch");
const walletExitButton = document.querySelector(".header__wallet-code-exit");
const walletCode = document.querySelector(".header__wallet-code");
const walletConnectButton = document.querySelector(".header__wallet-connect-button");

walletConnectButton.addEventListener("click", () => {
  walletConnectButton.classList.remove("active");
  walletCode.classList.add("active");
});

walletExitButton.addEventListener("click", () => {
  walletCode.classList.remove("active");
  walletConnectButton.classList.add("active");
});

const launchStreet = document.querySelector(".launch-street");
const launchAtm = document.querySelector(".launch-atm");
const launchStacking = document.querySelector(".launch-stacking");

const launchSections = [launchStreet, launchAtm, launchStacking];

const bankBody = document.querySelector(".launch-street__building_bank img");
const launchAtmButton = document.querySelector(".launch-atm__button");

bankBody.addEventListener("click", () => {
  hideLaunchSections();
  launchAtm.classList.add("active");
  launchHeader.classList.remove("active");
});

launchAtmButton.addEventListener("click", () => {
  hideLaunchSections();
  launchStacking.classList.add("active");
  launchHeader.classList.remove("active");
});

const stackingButtonClose = document.querySelector(".launch-stacking__content-button_close");
const stackingButtonBack = document.querySelector(".launch-stacking__content-button_back");
const stackingButtonApprove = document.querySelector(".launch-stacking__approve-button_approve");
const stackingButtonStaking = document.querySelector(".launch-stacking__approve-button_staking");

const launchStackingButtons = document.querySelector(".launch-stacking__buttons");
const launchStackingApprove = document.querySelector(".launch-stacking__approve");

stackingButtonClose.addEventListener("click", () => {
  hideLaunchSections();
  launchStreet.classList.add("active");
  stackingButtonApprove.classList.add("active");
  stackingButtonStaking.classList.remove("active");
  launchHeader.classList.add("active");
});

stackingButtonBack.addEventListener("click", () => {
  stackingButtonClose.classList.add("active");
  stackingButtonBack.classList.remove("active");
  launchStackingButtons.classList.add("active");
  launchStackingApprove.classList.remove("active");
  stackingButtonApprove.classList.add("active");
  stackingButtonStaking.classList.remove("active");
});

launchStackingButtons.addEventListener("click", (event) => {
  const isButton = event.target.classList.contains("launch-stacking__stack-button");
  if (isButton) {
    launchStackingButtons.classList.remove("active");
    launchStackingApprove.classList.add("active");
    stackingButtonClose.classList.remove("active");
    stackingButtonBack.classList.add("active");
  }
});

stackingButtonApprove.addEventListener("click", () => {
  stackingButtonApprove.classList.remove("active");
  stackingButtonStaking.classList.add("active");
});

function hideLaunchSections() {
  launchSections.forEach((section) => section.classList.remove("active"));
}
