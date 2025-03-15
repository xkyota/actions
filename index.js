// 1. Зміна кольору фону при виборі радіокнопки
document.querySelectorAll('input[name="color"]').forEach((radio) => {
  radio.addEventListener("change", (event) => {
    document.body.style.backgroundColor = event.target.value;
  });
});

// 2. Підстановка тексту в span при вводі в input
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  nameOutput.textContent = event.target.value.trim() || "незнайомець";
});

// 3. Перевірка довжини введеного тексту в input
const validationInput = document.querySelector("#validation-input");
const requiredLength = Number(validationInput.dataset.length);

validationInput.addEventListener("blur", () => {
  if (validationInput.value.length === requiredLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});

// 4. Зміна розміру тексту при русі повзунка
const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  textSpan.style.fontSize = `${fontSizeControl.value}px`;
});
