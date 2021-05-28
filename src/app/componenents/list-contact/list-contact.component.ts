import { Component, OnInit,NgModule } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {
  contacts;
  myContact:Contact;
  statusContact=false;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(contacts=>{
    this.contacts=contacts;
    console.log(this.contacts);
    })
  }

  updateCont(contact){
    this.contactService.updateContact(contact);
    this.statusContact=false;
  }
  editContact(contact){
      this.statusContact=true;
      this.myContact=contact;
  }
   
  deleteContact(contact){
    if(confirm('are you sure to delete this contact?')){
      this.contactService.destroyContact(contact);
    }
    else{
      this.statusContact=false;
    }
  }
  
}
