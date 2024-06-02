function toggleButtonState(buttonId) {
  const button = document.getElementById(buttonId);

  // Deaktiviere alle anderen Prio-Buttons
  const buttons = document.querySelectorAll(".prio-button");
  buttons.forEach((btn) => {
    if (btn.id !== buttonId) {
      btn.classList.remove("active");
      btn.style.backgroundColor = ""; // Zurücksetzen auf Standard-Hintergrundfarbe
    }
  });

  // Toggle den angeklickten Prio-Button
  const isActive = button.classList.toggle("active");

  // Setze die Hintergrundfarbe basierend auf dem angeklickten Zustand
  if (isActive) {
    switch (buttonId) {
      case "urgent":
        button.style.backgroundColor = "#FF8010"; // Orange
        break;
      case "medium":
        button.style.backgroundColor = "#FFD900"; // Gelb
        break;
      case "low":
        button.style.backgroundColor = "#29E267"; // Grün
        break;
      default:
        break;
    }
  } else {
    button.style.backgroundColor = ""; // Zurücksetzen auf Standard-Hintergrundfarbe
  }
}
