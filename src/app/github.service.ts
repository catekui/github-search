import { Injectable } from '@angular/core';
import {map }  from 'rxjs/operators'
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GithubService {
  
  username:string;
  

  constructor(private http: HttpClient){ 
    console.log("Github service is running...")
    this.username = 'Catekui'
  }

  getUser(){
    return this.http.get('https://api.github.com/users'+this.username)
    .pipe(map ((results: any) => results))
  }
  getRepos(){
    return this.http.get('https://api.github.com/users'+this.username+'/repos')
    .pipe(map ((results: any) => results))
  }
}
