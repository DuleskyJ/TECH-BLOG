document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
  
    signupForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const formData = new FormData(signupForm);
      const formDataJson = JSON.stringify(Object.fromEntries(formData.entries()));
  
      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: formDataJson
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
  
        window.location.replace('/dashboard');
      } catch (error) {
        console.error('Error:', error);

      }
    });
  });
  