#!/usr/bin/env bash

# ng build all
ng build @videogular/core
ng build @videogular/controls
ng build @videogular/buffering

# publish all
cd "$(cd "$(dirname "$1")"; pwd -P)/$(basename "$1")" + '/dist/videogular/core'
npm publish
cd "$(cd "$(dirname "$1")"; pwd -P)/$(basename "$1")" + '/dist/videogular/controls'
npm publish
cd "$(cd "$(dirname "$1")"; pwd -P)/$(basename "$1")" + '/dist/videogular/buffering'
npm publish
