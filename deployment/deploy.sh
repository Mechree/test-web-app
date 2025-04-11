#! /bin/bash
## Stop/ remove container
docker kill ar-web-app
docker remove ar-web-app

##once dead and removed, the image it references can be removed
docker image rm mechree/ceg-7320-02:ar-web-app

## Docker Pull Imagename
docker pull -a mechree/ceg-7320-02:latest

## run container and inject FIREBASE_API
docker run -d \ 
-p 3000:3000 \ 
--name ar-web-app \ 
--restart unless-stopped mechree/ceg-7320-02 