# AngularContactManager

UI Brains @ https://www.youtube.com/watch?v=xCkybV9mtk8

- have to run 'npm start' in the root folder and 'npm start' in the root/server folder to get the backend running

- ### Forms - Two Way Data (Form Input) Binding

  - Have to import `FormsModule` into `app.module.ts` and add to `imports`
  - `<input [(ngModel)]="contact.email" name="email" >`

.

          File: add-contact.component.html

          ...
          <input
            [(ngModel)]="contact.email"
            name="email"
            type="email"
            class="form-control"
            placeholder="Email"
          />

- ### Form Validation
- `<form ngNativeValidate (submit)="createSubmit()">`
- Putting `required='true'` on inputs isnt enough. Have to add `ngNativeValidate` property to form for browser validation

- ### Components

  - navbar
  - contact-manager
  - add-contact
  - edit-contact
  - view-contact
  - loading spinner

- ### CRUD

  - GET all contacts: -> GET http://localhost:9000/contacts
  - GET single contact: -> GET http://localhost:9000/contacts/${contactId}
  - Create a contact: -> POST http://localhost:9000/contacts
  - Update a contact: -> PUT http://localhost:9000/contacts/${contactId}
  - Delete a contact: -> DELETE http://localhost:9000/contacts/${contactId}

- ### Services

  - In React you use fetch or axios for getting data from APIs
  - But in **Angular** it is a built in module called **`HttpClientModule`** that must be imported in **`app.module.ts`**

    - // Services
    - **import { HttpClientModule } from '@angular/common/http';**
    - ### `contact.service.ts`

            File: contact.service.ts

                import { Injectable } from '@angular/core';
                import { HttpClient, HttpErrorResponse } from '@angular/common/http';
                import { IContact } from '../models/IContact';
                import { catchError, Observable, throwError } from 'rxjs';
                import { IGroup } from '../models/IGroup';

                @Injectable({
                  providedIn: 'root',
                })

                export class ContactService {

                  private serverURL: string = 'http://localhost:9000'; // json server url

                  constructor(private httpClient: HttpClient) {}

                  // API calls

                  // *********
                  // CONTACTS
                  // *********

                  // GET ALL CONTACTS
                  // returns an Observable of type <IContact []> array

                  public getAllContacts(): Observable<IContact[]> {

                    let dataURL: string = `${this.serverURL}/contacts`;

                    // call get and cast type <IContact[]> array
                    return this.httpClient
                      .get<IContact[]>(dataURL)
                      .pipe(catchError(this.handleError));
                  }
                  ...
                  ...

- ### Setup

  - #### Backend API

    - json server @ localhost:9000

      - create server folder
        - in terminal `npm init --yes` to create package.json
        - then `npm install json-server`
      - json server looks for a database called `db.json`

        - in `db.json` add script
          - "scripts": {
            "start": "json-server --watch db.json -p 9000"
            },
        - **Don't forget to add a `.gitignore` in server folder**

    - #### Frontend

      - npm install bootstrap
      - npm i @fortawesome/fontawesome-free
      - fontawesome cdn in html link

        - https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css

                  File: angular.json

                  ...
                  ...
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
