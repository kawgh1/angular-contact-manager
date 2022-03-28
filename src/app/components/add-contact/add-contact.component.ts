import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/IContact';
import { IGroup } from 'src/app/models/IGroup';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  public loading: boolean = false;
  public contact: IContact = {} as IContact;
  public errorMessage: string | null = '';
  public groups: IGroup[] = [] as IGroup[];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getAllGroups().subscribe(
      (data) => {
        this.groups = data;
        console.log(this.groups);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}
