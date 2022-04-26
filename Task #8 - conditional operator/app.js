const username = "test";
const password = "test123";

const newUsername = "";
const newPassword = "";

if (username === newUsername && password === newPassword) {
    alert("Привет")
}  else if (username === newUsername ) {
    alert("Неправильный пароль")
} else if (password === newPassword) {
    alert("Неправильный username")
}  else if (!newPassword && !newUsername) {
    alert("Ошибка Валидации")
}