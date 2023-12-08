// Fonction de validation du formulaire
function validateForm() {
    var firstName = document.getElementById('prenom');
    var lastName = document.getElementById('nom');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
  
    // Vérifier chaque champ
    checkField(firstName, 'First name can\'t be empty');
    checkField(lastName, 'Last name can\'t be empty');
    checkField(email, 'Email can\'t be empty');
    checkField(password, 'Password can\'t be empty');
  }
  
  // Gérer le changement de saisie dans un champ
  function handleInputChange(fieldName) {
    hideErrorMessage(fieldName);
  }
  
  // Vérifier le champ et afficher/masquer le message d'erreur
  function checkField(field, errorMessage) {
    if (field.value.trim() === '') {
      showErrorMessage(field, errorMessage);
    } else {
      hideErrorMessage(field);
    }
  }
  
  // Afficher le message d'erreur et styliser le champ avec une bordure rouge
  function showErrorMessage(field, message) {
    var errorMessageContainer = field.parentElement.querySelector('.error-message');
    errorMessageContainer.querySelector('.error-text').innerText = message;
    errorMessageContainer.style.display = 'flex';
    field.classList.add('error-border');
    errorMessageContainer.querySelector('.error-icon').style.display = 'inline'; 
  }
  
  // Masquer le message d'erreur et réinitialiser le style du champ
  function hideErrorMessage(field) {
    var errorMessageContainer = field.parentElement.querySelector('.error-message');
    errorMessageContainer.querySelector('.error-text').innerText = '';
    errorMessageContainer.style.display = 'none';
    field.classList.remove('error-border');
    errorMessageContainer.querySelector('.error-icon').style.display = 'none'; // Cache l'icône d'erreur
  }
  
  // Valider le formulaire avant de soumettre
  function validateAndSubmit() {
    validateForm(); // Exécutez d'abord la validation
    var errors = document.querySelectorAll('.error-message');
    if (!Array.from(errors).some(error => error.querySelector('.error-text').innerText !== '')) {
      // Si aucune erreur, soumettez le formulaire
      document.getElementById('signupForm').submit();
    }
  }
  