import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnChanges {

  @Input() address!: FormGroup;
  @Input() submitted!: boolean;
  constructor(private fb: FormBuilder) { }

  get f() {
    return this.address.controls;
  }
  /* get city() {
    return this.address["city"]
  }

  get street() {
    return this.address["street"]
  } */

  ngOnInit(): void {
    console.log(this.address.value);
    /* this.details = this.fb.group({
      firstName: this.details.controls['firstName'].value,
      lastName: this.details.controls['lastName'].value
    }) */
  }

  ngOnChanges(changes: SimpleChanges): void {
      
  }

}
