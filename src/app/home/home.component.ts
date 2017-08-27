import { Component, OnInit } from '@angular/core';
import { CnodeService } from '../services/cnode.service';

interface User {
  avatar_url: string,
  id: string,
  loginname: string,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data_list: Array<any> = [];
  filter = {
    tab: ''
  };
  user: User = {
    avatar_url: '',
    id: '',
    loginname: '',
  };

  constructor(private cnodeApi: CnodeService) { }

  ngOnInit() {
    this.getTopics();
    this.cnodeApi.getAcountInfo().subscribe(res => {
      this.user = res;
    })
  }
  getTopics() {
    this.cnodeApi.getTopics(this.filter).subscribe(res => {
      this.data_list = res;
    }, err => {
      console.log('err:' + err);
    });
  }

  handleTabChange() {
    this.getTopics();
  }
}
