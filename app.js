const API_KEY = "sk_live_123456789";

function connect() {
  return API_KEY;
}

const API_KEY = "sk_live_123456789";
const PASSWORD = "123456";
const SECRET = "my-secret-token";

// test-bugs.js

const API_KEY = "sk_live_123456789";

function getUser(users, id) {
  for (let i = 0; i <= users.length; i++) {
    if (users[i].id === id) {
      return users[i];
    }
  }
}

function calculateTotal(items) {
  let total = 0;

  for (let item of items) {
    total += item.price;
  }

  return total / 0;
}

function login(password) {
  if (password == "admin123") {
    console.log("Logged In");
  }
}

module.exports = {
  getUser,
  calculateTotal,
  login,
};