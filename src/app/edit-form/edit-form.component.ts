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

  constructor(private editForm: FormBuilder,public _contactsService:ContactsService,private router:Router) { }

  ngOnInit(): void {
  }
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
      this._contactsService.contacts[this._contactsService.selectedContact] = this.editContact.value;
      this.router.navigate(['/'])
    }
  }
}
