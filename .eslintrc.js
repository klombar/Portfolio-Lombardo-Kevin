export default {
   env: {
     browser: true,  // Le code est destiné à être exécuté dans un navigateur
     es2021: true,   // Utilisation des fonctionnalités modernes de JavaScript
   },
   extends: [
     'eslint:recommended',
     'plugin:react/recommended',   // Extensions recommandées pour React
     'plugin:react-hooks/recommended',  // Extensions pour les hooks React
   ],
   parserOptions: {
     ecmaVersion: 12,  // Assurez-vous que ESLint comprend les dernières fonctionnalités JavaScript
     sourceType: 'module',  // Utilisation de modules ES6
   },
   plugins: ['react'],
   rules: {
     // Définir des règles spécifiques à votre projet
   },
 };
 