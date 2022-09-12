import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  @Input() contactObj: any = {
    id: '',
    name: '',
    email: '',
    mobile: '',
    landline: '',
    website: '',
    address: ''
  }

  @Input() formType: string = '';

  ContactForm = this.addForm.group({
    name: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    mobile: ["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    landline: ["",],
    website: [""],
    address: [""],
  });

  constructor(private addForm: FormBuilder,public _contactsService:ContactsService,private router:Router) { }

  ngOnInit(): void {
    this.ContactForm.patchValue(this.contactObj);
  }

  onSubmit() {
    if (this.formType == 'Edit') {
      this._contactsService.contacts[this._contactsService.selectedContact] = this.ContactForm.value;
    }
    else {
      this._contactsService.contacts.push(this.ContactForm.value);
      this._contactsService.selectedContact = this._contactsService.contacts.length - 1;
    }
    this.router.navigate(['/']);
  }
}