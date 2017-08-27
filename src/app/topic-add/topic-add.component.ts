import { Component, OnInit } from '@angular/core';
import { CnodeService } from '../services/cnode.service';

@Component({
  selector: 'app-topic-add',
  templateUrl: './topic-add.component.html',
  styleUrls: ['./topic-add.component.css']
})
export class TopicAddComponent implements OnInit {

  topic = {
    title: '',
    content: '',
    tab: ''
  };

  constructor(private cnodeApi: CnodeService) { }

  ngOnInit() {
  }

  handleSubmit() {
    const { title, content, tab } = this.topic;
    if (!title || !content || !tab) {
      return;
    }
    this.cnodeApi.newTopic(this.topic).subscribe(res => {
      if (res.success) {
        alert('create success! topic_id: ' + res.topic_id);
      }
    })
  }

}
