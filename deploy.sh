#!/bin/bash

set -e

# Build the project
npm run build

# Remember the current branch
CURRENT_BRANCH=$(git branch --show-current)

# Switch to gh-pages branch
git switch gh-pages

# Copy new build files
cp -r dist/* .

# Add and commit changes
git add .
git commit -m "Deploy to gh-pages"

# Push to gh-pages branch
git push

# Switch back to original branch
git switch $CURRENT_BRANCH