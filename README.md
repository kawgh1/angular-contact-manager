# AngularContactManager

UI Brains @ https://www.youtube.com/watch?v=xCkybV9mtk8

- ### Components

  - navbar
  - contact-manager
  - add-contact
  - edit-contact
  - view-contact
  - loading spinner

- ### Setup

- json server

  - create server folder
    - in terminal `npm init --yes` to create package.json
    - then `npm install json-server`
  - json server looks for a database called `db.json`
    - in `db.json` add script
      - "scripts": {
        "start": "json-sever --watch db.json -p 9000"
        },
    - **Don't forget to add a `.gitignore` in server folder**

- npm install bootstrap
- npm i @fortawesome/fontawesome-free

        File: angular.json


        "projects": {
            "angular-contact-manager": {
            "projectType": "application",
            "schematics": {
                "@schematics/angular:application": {
                "strict": true
                }
            },
            "root": "",
            "sourceRoot": "src",
            "prefix": "app",
            "architect": {
                "build": {
                "builder": "@angular-devkit/build-angular:browser",
                "options": {
                    "outputPath": "dist/angular-contact-manager",
                    "index": "src/index.html",
                    "main": "src/main.ts",
                    "polyfills": "src/polyfills.ts",
                    "tsConfig": "tsconfig.app.json",
                    "assets": ["src/favicon.ico", "src/assets"],
                    "styles": [
                        *********************************************************
                        Add these 2
                        *********************************************************
                        "node_modules/@fortawesome/fontawesome-free/css/all.css",
                        "node_modules/bootstrap/dist/css/bootstrap.css",
                        **********************************************************
                        "src/styles.css"
                    ],
                    "scripts": [
                        *********************************************************
                        Add this
                        *********************************************************
                        "node_modules/bootstrap/dist/js/bootstrap.bundle.js",
                        **********************************************************
                    ]
                },
