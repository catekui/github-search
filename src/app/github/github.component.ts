import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user: any;

  constructor(private _githubService:GithubService) { 
    this._githubService.getUser().subscribe((user: any) =>{
      this.user = user;
      console.log(this.user)
    })
  }

  ngOnInit(): void {
  }

}
