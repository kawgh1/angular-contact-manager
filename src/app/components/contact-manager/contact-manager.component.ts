import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css'],
})
export class ContactManagerComponent implements OnInit {
  public loading: boolean = false;
  public contacts: IContact[] = [];
  public errorMessage: string | null = '';

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.loading = true;
    this.contactService.getAllContacts().subscribe(
      (data) => {
        this.contacts = data;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = error;
        this.loading = false;
      }
    );
  }

  public clickDeleteContact(contactId: string | undefined) {
    if (contactId) {
      // this only updates the back end, we have to call getContacts to refresh the Contacts data
      // so the deletion shows on the front end
      this.contactService.deleteContact(contactId).subscribe(
        (data) => {
          this.getAllContactsFromServer();
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }

  public getAllContactsFromServer() {
    this.loading = true;
    this.contactService.getAllContacts().subscribe(
      (data) => {
        this.contacts = data;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = error;
        this.loading = false;
      }
    );
  }
}
