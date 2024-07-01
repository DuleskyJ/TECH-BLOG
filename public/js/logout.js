document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.querySelector('#logout');

  if (logoutButton) {
    logoutButton.addEventListener('click', async () => {
      console.log('Logout button clicked');
      const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        console.log('Logout successful');
        document.location.replace('/');
      } else {
        console.error('Logout failed:', response.statusText);
        alert(response.statusText);
      }
    });
  } else {
    console.error('Logout button not found');
  }
});