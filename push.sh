#!/bin/bash
read -p "Commit description: " desc
git checkout master && \
git add -A && \
git commit -am "$desc" && \
git push origin master && \
git checkout gh-pages && \
git pull . master && \
git push origin gh-pages && \
git checkout master
