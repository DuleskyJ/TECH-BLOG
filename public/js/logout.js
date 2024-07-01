const logoutButton = document.querySelector('#logout');

if (logoutButton) {
  logoutButton.addEventListener('click', async () => {
    console.log('Logout button clicked'); // Debugging log
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log('Logout successful'); // Debugging log
      document.location.replace('/');
    } else {
      console.error('Logout failed:', response.statusText); // Debugging log
      alert(response.statusText);
    }
  });
} else {
  console.error('Logout button not found'); // Debugging log
}