document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-button');
    const welcomeScreen = document.getElementById('welcome-screen');
    const formScreen = document.getElementById('form-screen');

    if (startButton && welcomeScreen && formScreen) {
        startButton.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Animación de desvanecimiento suave
            welcomeScreen.style.opacity = '0';
            setTimeout(() => {
                welcomeScreen.style.display = 'none';
                formScreen.style.opacity = '0';
                formScreen.style.display = 'block';
                setTimeout(() => {
                    formScreen.style.opacity = '1';
                }, 50);
            }, 300);
        });
    }
});