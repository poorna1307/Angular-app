import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.sass']
})
export class EditFormComponent implements OnInit {
contactObj: any={
    id: '',
    name: '',
    email: '',
    mobile: '',
    landline: '',
    website: '',
    address: ''
};
formType: string="Edit";
  constructor(private editForm: FormBuilder,public _contactsService:ContactsService,private router:Router) {
  }

  ngOnInit(): void {
    this.contactObj = this._contactsService.contacts[this._contactsService.selectedContact];
  }
}
