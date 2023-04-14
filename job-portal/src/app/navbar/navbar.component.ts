import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{
  userEmailId:any;

  constructor(
    private apiService :ApiService
  ){}

  ngOnInit(): void {
    this.userEmailId =localStorage.getItem('emailId')
    console.log('from nav',this.userEmailId)
    this.get()
  }
  ngDoCheck(){

  }


  get(){
    this.apiService.getNotificationData().subscribe((res) =>{
      this.notification = res.map((e:any) =>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        console.log('the array data',data)
        return data
      })
    },err =>{
  
    })
  }
  notification :any = []


}
