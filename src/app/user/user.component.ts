import { Component, OnInit } from '@angular/core';
import { CnodeService } from '../services/cnode.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  userInfo = {
    avatar_url: '',
    githubUsername: '',
    loginname: '',
  };

  constructor(private cnodeApi: CnodeService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(res => {
      this.cnodeApi.getUserInfo(res["id"]).subscribe(userInfo => {
        this.userInfo = userInfo;
      })
    })
  }

}
