// Récupération des éléments HTML
const passwordLengthInput = document.getElementById('passwordLength');
const uppercaseLettersCheckbox = document.getElementById('uppercaseLetters');
const lowercaseLettersCheckbox = document.getElementById('lowercaseLetters');
const numbersCheckbox = document.getElementById('numbers');
const specialCharactersCheckbox = document.getElementById('specialCharacters');
const generatePasswordButton = document.getElementById('generatePasswordButton');
const passwordInput = document.getElementById('password');

// Fonction pour générer un mot de passe aléatoire
function generatePassword() {
  const passwordLength = passwordLengthInput.value;
  const useUppercaseLetters = uppercaseLettersCheckbox.checked;
  const useLowercaseLetters = lowercaseLettersCheckbox.checked;
  const useNumbers = numbersCheckbox.checked;
  const useSpecialCharacters = specialCharactersCheckbox.checked;
  const characters = [];
  let password = '';
  
  // Ajout des caractères sélectionnés dans le tableau characters
  if (useUppercaseLetters) {
    for (let i = 65; i <= 90; i++) {
      characters.push(String.fromCharCode(i));
    }
  }
  if (useLowercaseLetters) {
    for (let i = 97; i <= 122; i++) {
      characters.push(String.fromCharCode(i));
    }
  }
  if (useNumbers) {
    for (let i = 48; i <= 57; i++) {
      characters.push(String.fromCharCode(i));
    }
  }
  if (useSpecialCharacters) {
    for (let i = 33; i <= 47; i++) {
      characters.push(String.fromCharCode(i));
    }
    for (let i = 58; i <= 64; i++) {
      characters.push(String.fromCharCode(i));
    }
    for (let i = 91; i <= 96; i++) {
      characters.push(String.fromCharCode(i));
      }
      for (let i = 123; i <= 126; i++) {
        characters.push(String.fromCharCode(i));
      }
    }
  
    // Génération du mot de passe aléatoire
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  
    // Affichage du mot de passe généré
    passwordInput.value = password;
  }
  
  // Activation/Désactivation du bouton Générer mot de passe
  function checkCriteria() {
    const atLeastOneCriterionChecked =
      uppercaseLettersCheckbox.checked ||
      lowercaseLettersCheckbox.checked ||
      numbersCheckbox.checked ||
      specialCharactersCheckbox.checked;
    generatePasswordButton.disabled = !atLeastOneCriterionChecked;
  }
  
  // Ajout d'un événement pour surveiller les changements dans les critères de sélection
  uppercaseLettersCheckbox.addEventListener('change', checkCriteria);
  lowercaseLettersCheckbox.addEventListener('change', checkCriteria);
  numbersCheckbox.addEventListener('change', checkCriteria);
  specialCharactersCheckbox.addEventListener('change', checkCriteria);
  
  // Ajout d'un événement pour générer un nouveau mot de passe lorsqu'on clique sur le bouton
  generatePasswordButton.addEventListener('click', generatePassword);
  
  // Ajout d'un événement pour copier le mot de passe généré lorsqu'on survole le champ de texte
  passwordInput.addEventListener('mouseover', () => {
    passwordInput.setAttribute('title', 'Copier le mot de passe');
    passwordInput.setAttribute('data-bs-toggle', 'tooltip');
    passwordInput.setAttribute('data-bs-placement', 'right');
    passwordInput.setAttribute('data-bs-trigger', 'click');
    passwordInput.addEventListener('click', () => {
      passwordInput.select();
      document.execCommand('copy');
      const tooltip = bootstrap.Tooltip.getInstance(passwordInput);
      tooltip.hide();
    });
  });
  