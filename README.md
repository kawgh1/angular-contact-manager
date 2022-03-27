# AngularContactManager

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
                    Add these
                    *********************************************************
                    "node_modules/@fortawesome/fontawesome-free/css/all.css",
                    "node_modules/bootstrap/dist/css/boostrap.css",
                    **********************************************************
                    "src/styles.css"
                    ],
                    "scripts": []
                },
