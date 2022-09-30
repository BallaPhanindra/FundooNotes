import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  token: any;
  receiveData: any;
  constructor(private http: HttpService) {
    this.token = localStorage.getItem('token')
}
AddNotes(data: any) {
  console.log(data,this.token);
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+this.token 
    })
  }
  return this.http.postService("https://localhost:44300/Note/AddNote", data, true, header)
}

getNoteList(){
  
  
  let headers = {
    headers: new HttpHeaders({

      'Content-type': 'application/json',
      'Authorization': "Bearer "+this.token
    })
  }
  return this.http.getService("https://localhost:44300/Note/GetAllNote", true, headers)
}

updateNotes(dat: any) {
  console.log(dat,this.token);
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+this.token
    })
  }
  return this.http.putService(`https://localhost:44300/Note/UpdateNote/${dat.NoteId}`, dat,true, header)
}

getTrashNote(){
  this.token= localStorage.getItem('token')
  console.log(this.token);
  console.log("inside getnote service");

  let headers = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer "+this.token
    })
  }
  return this.http.getService(`https://localhost:44300/Note/TrashNote/${3}`,true,headers)
}

}
