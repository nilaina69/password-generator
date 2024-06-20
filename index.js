  // Les caractères disponibles pour le mot de passe
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const passwordLength = 15;

  function generatePassword() {
      let password = [];
      for (let i = 0; i < passwordLength; i++) {
          let randomIndex = Math.floor(Math.random() * characters.length);
          password.push(characters[randomIndex]);
      }
      return password.join('');
  }

  function displayPasswords() {
      let password1 = generatePassword();
      let password2 = generatePassword();

      let genereArea1 = document.getElementById("genere-areas1");
      let genereArea2 = document.getElementById("genere-areas2");

      genereArea1.textContent = password1;
      genereArea2.textContent = password2;
  }
  //displayPasswords()//TEMPORAIRE 

  // Générer et afficher les mots de passe lorsque le script est exécuté
  