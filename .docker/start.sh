#!/bin/bash

if [ ! -d "node_modules" ] || [ ! -f "yarn.lock" ]; then
  yarn install
fi

yarn prisma generate

yarn prisma migrate dev --name init

yarn dev