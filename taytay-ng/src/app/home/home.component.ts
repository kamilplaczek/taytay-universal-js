import { Component, OnInit } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pics: Observable<Array<any>>;

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.pics = this.getPics();
  }

  private getPics(): Observable<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Client-ID 0447601918a7bb5');
    return this.http.get('https://api.imgur.com/3/gallery/r/taylorswift', {headers}).map(res => {
      const imgurResp = res.json();
      if (imgurResp.data) {
        return imgurResp.data
          .filter(pic => pic.link.indexOf('.jpg') > -1)
          .slice(0, 15)
          .map(pic => {
            return {id: pic.id, url: pic.link.replace('.jpg', 's.jpg')}
          });
      }
      return [];
    });
  }

}
