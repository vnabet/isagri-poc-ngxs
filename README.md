# isagri-poc-ngxs

Solution Angular intégrant une solution de gestion d'états (state management pattern - Redux)

Dans ce projet, le poc est réalisé avec la librairie [NGXS](https://www.ngxs.io/)

## Rappel sur le pattern state management

Le principe de base est le **store**. C'est un espace de stockage et de gestion de l'état global (les données) de l'application.
Ce **store** stocke donc des **states** immutable qui sont modifiés par des fonctions 'pures' appellées **reducers**.
Ces réducers sont appelés grace à des **actions** qui seront déclenchées par nos composants ou nos services.

L'avantage de ce pattern est que ces états sont partagés par toute l'application. Ainsi un état consommé et mis à jour, par exemple, par un service A, appelé par un composant A, sera automatiquement mis à jour pour tout autre composant qui affichera cet état.

L'autre point important est qu'on est dans un principe de séparation du stockage, de la modification et de la restitution des données de l'application. On a une boite noire, qui contient l'état (des données) de notre application et avec laquelle on communique via des actions.

Bien sûr, ce genre de comportement de stockage d'état est réalisable simplement via un service et RxJS, mais dès que l'on complexifie l'application, notamment pour des besoin de tests et de debugage (visibilité de l'état d'une application à un instant T dans les outils de débuggage, remonter l'historique des états...), il devient interessant d'utiliser des librairies dédiées à ce pattern.

## Les librairies compatibles avec Angular

Les 2 plus utilisées sont:

- [NGRX](https://ngrx.io/)
- [NGXS](https://www.ngxs.io/)

La première est la plus exhaustive mais aussi la plus complexe à prendre en main.
Le design pattern étant déjà compliqué à appréhender, j'ai une préférence pour la seconde qui est plus simple à utiliser et surtout, elle utilise des features d'angular que l'on utilise déjà largement (décorateurs typescript ou de l'injection de dépendances)

On utilisera donc cette dernière dans cette démo.
