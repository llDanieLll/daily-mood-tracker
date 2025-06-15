function showMood() {
  const mood = document.getElementById('mood-select').value;
  const response = document.getElementById('response');

  switch (mood) {
    case "happy":
      response.innerText = "That's great! Keep smiling 😊";
      break;
    case "sad":
      response.innerText = "Sorry to hear that. Tomorrow is a new day 💛";
      break;
    case "tired":
      response.innerText = "Get some rest — you’ve earned it 💤";
      break;
    case "angry":
      response.innerText = "Take a breath. You’ve got this 💪";
      break;
    case "excited":
      response.innerText = "Woo! Ride that energy! 🚀";
      break;
    default:
      response.innerText = "Please select a mood first.";
  }
}
