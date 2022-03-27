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

  // GET SINGLE CONTACT
  // returns an Observable of type <IContact>
  public getContact(contactId: string): Observable<IContact> {
    let dataURL: string = `${this.serverURL}/contacts/${contactId}`;
    // call get and cast type <IContact[]> array
    return this.httpClient
      .get<IContact>(dataURL)
      .pipe(catchError(this.handleError));
  }

  // CREATE CONTACT
  // returns an Observable of type <IContact>
  public createContact(contact: IContact): Observable<IContact> {
    let dataURL: string = `${this.serverURL}/contacts`;
    return this.httpClient
      .post<IContact>(dataURL, contact)
      .pipe(catchError(this.handleError));
  }

  // UPDATE CONTACT
  // returns an Observable of type <IContact>
  public updateContact(
    contact: IContact,
    contactId: string
  ): Observable<IContact> {
    let dataURL: string = `${this.serverURL}/contacts/${contactId}`;
    return this.httpClient
      .put<IContact>(dataURL, contact)
      .pipe(catchError(this.handleError));
  }

  // DELETE CONTACT
  // returns an Observable of type empty object { }
  public deleteContact(contactId: string): Observable<{}> {
    let dataURL: string = `${this.serverURL}/contacts/${contactId}`;
    return this.httpClient
      .delete<{}>(dataURL)
      .pipe(catchError(this.handleError));
  }

  // *******
  // GROUPS
  // *******

  // GET ALL GROUPS
  // returns an Observable of type <IGroup[]> array
  public getAllGroups(): Observable<IGroup[]> {
    let dataURL: string = `{this.serverURL}/groups`;
    return this.httpClient
      .get<IGroup[]>(dataURL)
      .pipe(catchError(this.handleError));
  }

  // GET SINGLE GROUP
  // return an Observable of type <IGroup>
  public getGroup(contact: IContact): Observable<IGroup> {
    let dataURL: string = `${this.serverURL}/groups/${contact.groupId}`;
    return this.httpClient
      .get<IGroup>(dataURL)
      .pipe(catchError(this.handleError));
  }

  // ERROR HANDLING
  // if something goes wrong from fetching data
  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      // client error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server error
      errorMessage = `Status: ${error.status} \n Message: ${error.message}`;
    }

    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
