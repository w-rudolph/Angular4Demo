import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as qs from 'querystring';
import { CNODE_API_TOKEN } from '../consts/cnode_token';

import {
  ALL_TOPICS,
  GET_TOPIC,
  GET_USER_ACOUNT,
  COLLECT_TOPIC,
  GET_USERNAME,
  NEW_TOPIC
} from '../apis/cnode-api';

@Injectable()
export class CnodeService {

  constructor(private http: Http) { }

  getTopics(filter): Observable<any[]> {
    return this.http.get(ALL_TOPICS + '?' + qs.stringify(filter)).map(res => res.json().data || []);
  }

  getTopic(topic_id: string): Observable<any> {
    return this.http.get(GET_TOPIC.replace(':topic_id', topic_id)).map(res => res.json().data || {});
  }

  getAcountInfo(): Observable<any> {
    return this.http.post(GET_USER_ACOUNT, { accesstoken: CNODE_API_TOKEN }).map(res => res.json());
  }

  getUserInfo(loginname: string) {
    return this.http.get(GET_USERNAME.replace(':loginname', loginname)).map(res => res.json());
  }

  newTopic({ title, content, tab }) {
    return this.http.post(NEW_TOPIC, {
      accesstoken: CNODE_API_TOKEN,
      title,
      content,
      tab
    }).map(res => res.json());
  }
}
