import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CnodeService } from '../services/cnode.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  private topic_data = {};

  constructor(private route: ActivatedRoute, private cnodeApi: CnodeService) { }

  ngOnInit() {
    const topic_id = this.route.snapshot.params["id"];
    // const keyword = this.route.snapshot.queryParams["id"];
    // this.route.params.subscribe(res => console.log(res));
    // this.route.queryParams.subscribe(res => console.log(res));
    this.cnodeApi.getTopic(topic_id).subscribe(res => {
      this.topic_data = res;
    }, err => {
      this.topic_data = {
        content: JSON.parse(err._body).error_msg
      }
    });
  }

}
