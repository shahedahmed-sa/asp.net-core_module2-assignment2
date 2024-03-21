document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var errorMsg = document.getElementById('errorMsg');

        if (!username || !password) {
            errorMsg.textContent = 'Please enter both username and password.';
            return;
        }
        
        alert('Login successful!');
        
    });
