import { AngularFireModule } from 'angularfire2';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NavbarComponent } from './componenents/navbar/navbar.component';
import { ListContactComponent } from './componenents/list-contact/list-contact.component';
import { AddContactComponent } from './componenents/add-contact/add-contact.component';
import { ContactService } from './services/contact.service';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListContactComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    //AngularFireDatabaseModule,
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
