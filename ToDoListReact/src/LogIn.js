// דף התחברות - Login.js
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // כאן יש להוסיף לוגיקת התחברות - לשלוח את פרטי המשתמש לשרת
      console.log('שם משתמש:', username);
      console.log('סיסמה:', password);
  
      // לאחר ההתחברות, ניתן להעביר את המשתמש לדף אחר כגון דף פרופיל או דף ראשי
      // window.location.href = '/profile';
    });
  });
  