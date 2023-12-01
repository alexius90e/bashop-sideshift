
const launchHeader  = document.querySelector(".header_launch");
const walletExitButton = document.querySelector(".header__wallet-code-exit");
const walletCode = document.querySelector(".header__wallet-code");
const walletConnectButton = document.querySelector(
  ".header__wallet-connect-button"
);

walletConnectButton.addEventListener("click", () => {
  walletConnectButton.classList.remove("active");
  walletCode.classList.add("active");
});

walletExitButton.addEventListener("click", () => {
  walletCode.classList.remove("active");
  walletConnectButton.classList.add("active");
});
