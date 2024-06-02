// JavaScript

// Funktionen zum Behalten des Status der Prio-Buttons
function toggleButtonState(buttonId) {
    const button = document.getElementById(buttonId);
    const buttons = document.querySelectorAll('.prio-button');
    
    buttons.forEach(btn => {
        if (btn.id !== buttonId) {
            btn.classList.remove('active');
            btn.style.backgroundColor = '';
        }
    });

    const isActive = button.classList.toggle('active');

    if (isActive) {
        switch (buttonId) {
            case 'urgent':
                button.style.backgroundColor = '#FF4910';
                break;
            case 'medium':
                button.style.backgroundColor = '#FFA500';
                break;
            case 'low':
                button.style.backgroundColor = '#7AE229';
                break;
            default:
                break;
        }
    } else {
        button.style.backgroundColor = '';
    }
}
