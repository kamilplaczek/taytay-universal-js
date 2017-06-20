import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-picture-list',
  templateUrl: 'picture-list.component.html',
  styleUrls: ['picture-list.component.scss']
})
export class PictureListComponent {
  @Input() pics: Observable<Array<any>>;
}
