import { ContactService } from './../../services/contact.service';
import { FormsModule } from '@angular/forms';
import { Contact } from './../../models/contact';
import { Component, OnInit, NgModule } from '@angular/core';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  statusContact:boolean = false;
  contact: Contact={
    name:'',
    telephone:0
  };
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  newContact(){
    this.contactService.createContact(this.contact);
    this.contact.name='';
    this.contact.telephone=0;
    this.statusContact=false;
  }
}
