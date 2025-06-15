const valor = document.getElementById("valor");
const botao_5 = document.getElementById("botao-doacao-5");
const botao_10 = document.getElementById("botao-doacao-10");
const botao_25 = document.getElementById("botao-doacao-25");
const botao_50 = document.getElementById("botao-doacao-50");
const botao_75 = document.getElementById("botao-doacao-75");
const botao_100 = document.getElementById("botao-doacao-100");

valor.value = 50;

botao_5.addEventListener("click", function() {
    valor.value = 5;
});

botao_10.addEventListener("click", function() {
    valor.value = 10;
});

botao_25.addEventListener("click", function() {
    valor.value = 25;
});

botao_50.addEventListener("click", function() {
    valor.value = 50;
});

botao_75.addEventListener("click", function() {
    valor.value = 75;
});

botao_100.addEventListener("click", function() {
    valor.value = 100;
});