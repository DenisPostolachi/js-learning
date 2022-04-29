const username = "test";
const password = "test123";

const newUsername = "";
const newPassword = "";

if (username === newUsername && password === newPassword) {
    console.log("Привет")
}  else if (username === newUsername ) {
    console.log("Неправильный пароль")
} else if (password === newPassword) {
    console.log("Неправильный username")
}  else if (!newPassword && !newUsername) {
    alert("Ошибка Валидации")
}