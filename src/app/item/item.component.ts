import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Observable, Subject, Subscription, take } from 'rxjs';
import { SubjectService } from '../shared/subject.service';
//import Validation from './utils/validation';

@Component({
  selector: 'app-item',
  //template: `<h4>{{icount$ | async}}</h4>`,
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  //icount$: Observable<string> = this._service.getValue().pipe(take(1));
  myForm!: FormGroup;
  icount$: Observable<string> = this._service.getValue();
  items: any;
  myDetails!: FormGroup;
  submitted = false;
  
  
  constructor(private _service: SubjectService, private fb: FormBuilder) {
    //this.items = this.getCount()
    /* this.myDetails = this.fb.group({
      firstName: 'german',
      lastName: 'isaev'
    }); */
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
      address: this.fb.group({
        city: ['', Validators.required],
        street: ['', Validators.required]
      })
    });
  }
  
  public getCount() {
    return `<h4>{{icount$ | async}}</h4>`;
  }

  get form(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  get name() {
    return this.form["name"]
  }

  get email() {
    return this.form["email"]
  }

  get message() {
    return this.form["message"]
  }

  get address(): FormGroup {
    return this.form["address"] as FormGroup
  }

  get city() {
    return this.form["address"].get('city');
  }

  get street() {
    return this.form["address"].get('street');
  }

  onSubmit(form: FormGroup) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));

    console.log('Valid?', form.valid); // true or false
    console.log(form.value);
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }

 /*  public geValuesAsPromise() : Promise<any> {
    let resolver = (subsription: Subscription, resolve: Function, result: any) => { resolve(result); subsription.unsubscribe(); };
    let rejecter = (subsription: Subscription, reject: Function, error: any) => { reject(error); subsription.unsubscribe(); };

    return new Promise((resolve, reject) => {
      let subscription = this._service.getValue().pipe(take(1)).subscribe(
        result => { resolver(subscription, resolve, result); }, 
        error => { rejecter(subscription, reject, error); }
      );
      let subscription = this._service.getValue().subscribe( 
        result => { resolver(subscription, resolve, result); }, 
        error => { rejecter(subscription, reject, error); }
        );
    });
  } */

}
