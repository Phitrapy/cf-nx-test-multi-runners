# CfNxTestMultiRunners

Ce projet a pour ut de démontrer qu'il est possible de lancer plusieurs target `test` utilisant différents tests runners au sein d'un même monorepo, en une seule commande.

La structure qui nous intéresse réside dans le dossier `libs`

- lib1 est une librairie qui utilise le framework de test jest
- lib2 est une librairie qui utilise le frameork de test karma + jasmine

Ces deux librairies ont été générées à partir des generateurs nx par défaut, à l'aide du flag `--unitTestRunners=<test-runner>`

## Quick Start & Documentation

```bash
yarn test
```

```bash
nx run-many --target=test --all
```
