import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private myData: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() { }

  setValue(data: any): void {
    this.myData.next(data);
  }
  getValue(): Observable<string> {
    return this.myData.asObservable();
  }
}
