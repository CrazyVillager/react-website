#!/bin/bash
cd ~/react-website
git pull
npm run build
sudo rm -rf /var/www/html/*
sudo cp -r build/* /var/www/html/
