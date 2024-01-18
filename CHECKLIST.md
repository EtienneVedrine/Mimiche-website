# checklist 


## Initialisation du projet :

1/ Créer le projet + readme

2/ Créer index.js à la racine

3/ Initialiser le projet :
    # npm init -y
    # npm install 
        * Express
        * EJS
        * dotenv
        * pg
        * etc. (sequelize, nodemon etc)


4/ Créer le .gitignore (à la racine) :
    #   node_modules
    #   .env
    #   .vscode
    #   .idea
    #   .DS_Store (si on est sur Mac)

5/ Créer le .prettierignore (à la racine) :
    #   *.ejs



## Mise en route du server :

1/ Dans index.js (racine) :
    # on fait les 'require' ('dotenv', express etc)
    # On dit que l'app utilisera express
    # On indique qu'il y a un router (toujours en avant dernier)
    # On écoute le server
 
2/ On crée le fichier .env :
    *-*     BASE_URL=http://localhost
    *-*     PORT=5000
    
Attention : ne pas oublier de faire ausi le fichier '.env.example' avec :
    *-*     BASE_URL=http://localhost
    *-*     PORT=5000
    *-*     PG_URL=postgres://USERNAME:PASSWORD@localhost/DBNAME
    *-*     DIALECT=postgres



 ## On crée la structure du projet :

1/ Dossier app avec :
    * dossier 'controller' 
    * dossier 'models' ( avec un fichier .gitkeep )
    * dossier 'views'( avec un fichier .gitkeep )
    * dossier 'docs'

  Et le cas échéant :

    * dossier 'public' + 'css' etc



## On gère nos routes :

On crée le fichier 'router.js' dans 'app' :

    # On spécifie les infos du router :
        *-*     const { Router } = require('express');
        *-*     const router = Router();
    # On require nos controllers
    # On écrit nos routes
    # on oublie pas d'exporter le router à la dernière ligne
        *-*     module.exports = router;


 ## On crée notre premier controller :

    # On créé un appController.js
    # On fait une méthode pour tester la view 'index' qui doit send un mesage random
        *   const AppController = index(req, res) { res.send('un message au pif')}
    # On oublie pas d'exporter le controller 
        *   module.exports = appController;