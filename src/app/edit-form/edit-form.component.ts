import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.sass']
})
export class EditFormComponent implements OnInit {
  public name: string = "";
  public email: string = "";
  public mobile: number = 0;
  public landline: number = 0;
  public website: string = "";
  public address: string = "";
  constructor(private editForm: FormBuilder,public _contactsService:ContactsService,private router:Router) {
    let contact = this._contactsService.contacts[this._contactsService.selectedContact];
    this.name = contact.name  
    this.email = contact.email
    this.mobile = contact.mobile
    this.landline = contact.landline
    this.website = contact.website
    this.address = contact.address
  }

  ngOnInit(): void {
  }
  currentIndex:number=0
  editContact = this.editForm.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    landline: ['',],
    website: [''],
    address: [''],
  })
  onSubmit() {
    if (this.editContact.value.name === '' || this.editContact.value.email === '' || this.editContact.value.mobile === '') {
      window.alert('Fill all required fields')
    }
    else {
      this.currentIndex=this._contactsService.selectedContact;
      this._contactsService.contacts[this._contactsService.selectedContact] = this.editContact.value;
      this._contactsService.selectedContact=this.currentIndex;
      this.router.navigate(['/'])
    }
  }
}
