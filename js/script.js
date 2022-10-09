const price = document.getElementById("price");
const discount = document.getElementById("discount");
const tip = document.getElementById("tip");
const submit = document.getElementById("submit");
const amount = document.getElementById("amount");
const dis = document.getElementById("dis");
const disValue = document.getElementById("dis-value");
const tipValue = document.getElementById("tip-value");

let priceDisplay;
let discountValue = 0;
let tipsValue = 0;
let priceValue = 0;
let discountAll;
let tipAll;
let result;
price.addEventListener("input", (e) => {
  priceValue = e.target.value;
  // priceDisplay = new Intl.NumberFormat("fa-Ir").format(e.target.value);
  amount.innerHTML =
    new Intl.NumberFormat("fa-Ir").format(priceValue) + "<span>&#65020</span>";
});
discount.addEventListener("input", (e) => {
  discountValue = Number(e.target.value);
  discountAll = (discountValue * priceValue) / 100;
  dis.innerHTML = new Intl.NumberFormat("fa-Ir").format(discountAll);
  disValue.innerHTML =
    new Intl.NumberFormat("fa-Ir").format(e.target.value) + "<span>&#37</span>";
});
tip.addEventListener("input", (e) => {
  tipsValue = Number(e.target.value);
  tipAll = (tipsValue * priceValue) / 100;
  tips.innerHTML = new Intl.NumberFormat("fa-Ir").format(tipAll);
  tipValue.innerHTML =
    new Intl.NumberFormat("fa-Ir").format(e.target.value) + "<span>&#37</span>";
});
submit.addEventListener("click", () => {
  result = priceValue - discountAll + tipAll;
  console.log(result);
  console.log(priceValue, "...", discountValue, "...", tipsValue);
  amount.innerHTML =
    new Intl.NumberFormat("fa-Ir").format(result) + "<span>&#65020</span>";
});
