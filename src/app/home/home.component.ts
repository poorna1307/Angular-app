import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public contactsList:any=[];
  public name: string = "";
  public email: string = "";
  public mobile: number = 0;
  public landline: number = 0;
  public website: string = "";
  public address: string = "";
  constructor(public _contactsService:ContactsService, private router: Router) {}
  ngOnInit(): void {
    this.contactsList=this._contactsService.getContacts();
    if(this.contactsList.length>0){
    this.showContactDetails(this._contactsService.selectedContact);
    }
  }
  showContactDetails(i:number){
    let contact = this.contactsList[i];
    this.name = contact.name  
    this.email = contact.email
    this.mobile = contact.mobile
    this.landline = contact.landline
    this.website = contact.website
    this.address = contact.address
    this._contactsService.selectedContact=i
  }
  onDelete(){
    this._contactsService.contacts.splice(this._contactsService.selectedContact, 1);
    if(this._contactsService.contacts.length>0){
    if(this._contactsService.selectedContact!==0){
    this._contactsService.selectedContact-=1
    this.showContactDetails(this._contactsService.selectedContact)}
    if(this._contactsService.selectedContact===0){
      this.showContactDetails(this._contactsService.selectedContact)}
    }  
    }
  onEdit(){
    this.router.navigate(['/edit'])
  }
}
