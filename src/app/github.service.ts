import { Injectable } from '@angular/core';
import {map }  from 'rxjs/operators'
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class GithubService {
  
  username:string;
  // updateUsername: any;
  

  constructor(private http: HttpClient){ 
    console.log("Github service is running...")
    this.username = 'catekui'
  }

  getUser(){
    return this.http.get('https://api.github.com/users/'+this.username)
    .pipe(map (results => results))
  }
  getRepos(){
    return this.http.get('https://api.github.com/users/'+this.username+'/repos')
    .pipe(map (results => results))
  }

  updateUsername(username:string){
    this.username = username

  }
}
