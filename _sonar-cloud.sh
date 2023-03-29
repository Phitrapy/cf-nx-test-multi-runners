#!/bin/bash

sonar-scanner \
  -Dsonar.organization=phitrapy \
  -Dsonar.projectKey=phitrapy_cf-nx-test-multi-runners_lib1 \
  -Dsonar.sources=libs/lib1 \
  -Dsonar.host.url=https://sonarcloud.io \
