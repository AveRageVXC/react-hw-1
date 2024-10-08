// Создаем объект пользователя в стиле CamelCase
var user = {
    userId: 1,
    userName: "JohnDoe",
    details: {
        isActive: true,
        accountSettings: {
            twoFactorAuth: true
        }
    }
};
console.log('CamelCase user:', user);
// Создаем объект userProfile с вложенной структурой
var userProfile = {
    firstName: "Alice",
    contact: {
        email: "alice@example.com"
    }
};
console.log('Picked profile:', userProfile);
