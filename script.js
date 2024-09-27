document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const validEmail = 'user@example.com';
    const validPassword = 'password123';
    
 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    
    const messageBox = document.getElementById('messageBox');
    const messageImage = document.getElementById('messageImage');
    const messageText = document.getElementById('messageText');
    
    if (email === validEmail && password === validPassword) {
        
        messageImage.src = 'smiley.webp'; 
        messageText.textContent = 'Login successful!';
    } else {
        messageImage.src = 'wrong.jpg'; 
        messageText.textContent = 'Invalid email or password.';
    }
    
    
    messageBox.classList.remove('hidden');
});
