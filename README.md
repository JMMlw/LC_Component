# Lightning Component Template

Ceci est un template de component lightning, créé dans le but de faire gagner du temps et d'appeler de façon plus propre les méthodes Apex.

## Installation

Il vous faudra créer un component lightning "Base" qui aura un helper mais pas de controller ni js ni apex et coller le code contenu dans le dossier Base de ce repo. Vous n'aurez besoin de faire cette étape qu'une fois par org.

## Utilisation

Chaque composants créés par la suite peut alors se calquer sur le modèle contenu dans le dossier "Component" de ce repo.

Il faudra juste modifier le nom et le nom du controller dans le Component a la ligne 1
```
<aura:component controller="Component_Controller" implements="flexipage:availableForAllPageTypes" access="global" extends="c:Base">
```

## License
feel free tu use.
