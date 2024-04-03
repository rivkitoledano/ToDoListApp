// דף הרשמה - Register.js
document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');
  
    registerForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // כאן יש להוסיף לוגיקת הרשמה - לשלוח את פרטי המשתמש לשרת
      console.log('שם משתמש:', username);
      console.log('סיסמה:', password);
  
      // לאחר ההרשמה, ניתן להעביר את המשתמש לדף אחר כגון דף פרופיל או דף ראשי
      // window.location.href = '/profile';
    });
  });
  