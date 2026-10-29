const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");
const motivate = document.querySelector("#motivate")
const quote = document.querySelector("#quote")
const messages = [
  "You are loved.", 
  "you are allowed to be a beginner for as long as you need", 
  "it is okay even if you don't understand. Keep trying.", 
  "you ask good questions, that is the whole skill.", 
  "keep asking, it builds you", 
  "you are someone's favourite person to sit next to", 
  "someone is going to love what you make with this", 
  "hot chocolate tastes better after a hard day. you've earned one", 
  "the thing you are buiding counts, even half finished", 
  "No matter how little you think it is. it is good, you are growing",
];
const quotes =[
    "Success is the sum of small efforts, repeated day in and day out.",
    "Believe in yourself and all that you are.",
    "Failure is the opportunity to begin again more intelligently.",
    "There is no substitute for hard work.",
    "It does not matter how slowly you go, as long as you do not stop.",
    "Believe you can and you’re halfway there."
]
button.addEventListener("click", () => {
  globe.classList.add("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);

  const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];
});
motivate.addEventListener("click", () => {
    const choose = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[choose];
})