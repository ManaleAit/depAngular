import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  conatctDoc:AngularFirestoreDocument<Contact>;
  contactsCollection:AngularFirestoreCollection<Contact>;
  contacts:Observable<Contact[]>;
  constructor(private afs:AngularFirestore) { 
    this.contactsCollection=this.afs.collection('contacts');
    this.contacts=this.contactsCollection.snapshotChanges().map(
      actions=>{return actions.map( a=>{
        const data = a.payload.doc.data() as Contact;
        const id=a.payload.doc.id;
        return {id,...data};
      
    } );
      } );
  }
  getContacts(){
    return this.contacts;
  }
  createContact(contact:Contact){
    this.contactsCollection.add(contact);
  }
  updateContact(contact:Contact){
    this.conatctDoc=this.contactsCollection.doc<Contact>(contact.id);
    this.conatctDoc.update(contact);
  }
  destroyContact(contact){
    this.conatctDoc=this.contactsCollection.doc<Contact>(contact.id);
    this.conatctDoc.delete();
  }
}
