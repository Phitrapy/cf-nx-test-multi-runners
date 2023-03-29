#!/bin/bash

# 0. Créer un projet sonarcloud
# 1. Installer https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.7.0.2747-linux.zip
# 2. Ajouter le dossier bin au PATH
# 3. Valoriser SONAR_TOKEN avec le token fourni par sonarcloud

# Suivre le guide d'installation manuel pour plus d'infos


sonar-scanner \
  -Dsonar.organization=phitrapy \
  -Dsonar.projectKey=phitrapy_cf-nx-test-multi-runners_lib1 \
  -Dsonar.sources=libs/lib1 \
  -Dsonar.host.url=https://sonarcloud.io \
