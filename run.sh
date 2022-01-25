#!/bin/bash

docker build -t website:latest

docker run -d \
    --restart unless-stopped \
    -p 8934:3000 \
    website:latest \