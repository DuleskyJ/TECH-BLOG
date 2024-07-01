document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const username = document.querySelector('#username-login').value.trim();
      const password = document.querySelector('#password-login').value.trim();

      if (username && password) {
        try {
          const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
          });

          if (!response.ok) {
            throw new Error('Failed to log in.');
          }

          // Wait for the response to redirect or update UI
          const responseData = await response.json();
          if (responseData.logged_in) {
            location.reload(); // Refresh the page to update session state
          } else {
            throw new Error('Login failed.');
          }
        } catch (error) {
          console.error('Login error:', error.message);
          alert('Failed to log in. Please try again.');
        }
      }
    });
  }
});