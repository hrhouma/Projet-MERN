// Remplacez `<votre_token>` par le token généré précédemment
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiV2VkIE1heSAwMSAyMDI0IDE0OjE2OjU4IEdNVC0wNDAwIChoZXVyZSBhdmFuY8OpZSBkZSBs4oCZRXN0KSIsInVzZXJJZCI6MTIsImlhdCI6MTcxNDU4NzQxOH0.CifG2n3qzRnkOt9mARLJbuc4QpG0k4xHqOfHTmqK1mM';

// Remplacez par l'URL de votre serveur
const validateTokenURL = 'http://localhost:5000/user/validateToken';

// Assurez-vous d'utiliser la clé d'en-tête correcte (ici `gfg_token_header_key`)
const tokenHeaderKey = 'gfg_token_header_key';

// Fonction pour valider le token
async function validateToken() {
  try {
    const response = await fetch(validateTokenURL, {
      method: 'GET',
      headers: {
        [tokenHeaderKey]: `Bearer ${token}`
      }
    });

    if (response.ok) {
      const data = await response.text();
      console.log(data); // Imprimez le message de succès
    } else {
      console.error(`Erreur: ${response.status} - ${response.statusText}`);
      const errorText = await response.text();
      console.error(errorText); // Imprimez le message d'erreur
    }
  } catch (error) {
    console.error('Erreur de validation du token:', error.message);
  }
}

// Appeler la fonction pour valider le token
validateToken();