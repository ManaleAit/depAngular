import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appangularwithrouter';
 /* courses:Observable<any[]>;
  constructor(private db:AngularFireDatabase){
    this.courses=db.list('courses').valueChanges();
  }
  add(data){
      this.db.list('courses').push(data.value);
      data.value="";
  }
  update(data){
this.db.list('courses').update(1,data);
  }*/
}
