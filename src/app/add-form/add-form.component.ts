import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.sass']
})
export class AddFormComponent implements OnInit {

  constructor(private addForm: FormBuilder,public _contactsService:ContactsService,private router:Router) { }

  ngOnInit(): void {
  }
  addContact = this.addForm.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    landline: ['',],
    website: [''],
    address: [''],
  })

  onSubmit() {
    if (this.addContact.value.name === '' || this.addContact.value.email === '' || this.addContact.value.mobile === '') {
      window.alert('Fill all required fields')
    }
    else {
      this._contactsService.contacts.push(this.addContact.value)
      this._contactsService.selectedContact=(this._contactsService.contacts.length)-1;
      this.router.navigate(['/'])
    }
  }
}
