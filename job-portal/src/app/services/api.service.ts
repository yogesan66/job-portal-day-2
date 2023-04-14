import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private firestore:AngularFirestore
  ) { }
  uId:any;
  sendFeedback(data:any){
    this.firestore.collection('/generalUsers/').doc('common').collection('/feedback').add(data)
        .then(() => {
          console.log('Data added successfully!');
          data.id = this.firestore.createId();
          this.uId = data.id
      
        })
        .catch((error) => {
          console.error(error);
        });
  }


  getNotificationData(){
    return this.firestore.collection('/generalUsers/').doc('common').collection('/feedback').snapshotChanges()

  }
}
