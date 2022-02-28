import { Component } from '@angular/core';
import { SubjectService } from './shared/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-subject';

  constructor(private _service: SubjectService) {
    this._service.setValue(2);
  }
}
