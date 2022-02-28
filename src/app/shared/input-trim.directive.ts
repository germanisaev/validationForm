import { Directive, HostListener, forwardRef } from "@angular/core";
import { DefaultValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

const TRIM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TrimValueDirective),
  multi: true
};

/**
 * The trim accessor for writing trimmed value and listening to changes that is
 * used by the {@link NgModel}, {@link FormControlDirective}, and
 * {@link FormControlName} directives.
 */
@Directive({
  selector: `
    input:not([type=checkbox]):not([type=radio]):not([type=password]):not([readonly]):not(.app-trim-ignore)[formControlName],
    input:not([type=checkbox]):not([type=radio]):not([type=password]):not([readonly]):not(.app-trim-ignore)[formControl],
    input:not([type=checkbox]):not([type=radio]):not([type=password]):not([readonly]):not(.app-trim-ignore)[ngModel],
    textarea:not([readonly]):not(.app-trim-ignore)[formControlName],
    textarea:not([readonly]):not(.app-trim-ignore)[formControl],
    textarea:not([readonly]):not(.app-trim-ignore)[ngModel],
    :not([readonly]):not(.app-trim-ignore)[ngDefaultControl],
    [appTrim]
  `,
  providers: [TRIM_VALUE_ACCESSOR]
})
export class TrimValueDirective extends DefaultValueAccessor {

  @HostListener("input", ["$event.target.value"])
  ngOnChange = (val: string): void => {
    this.onChange(val.trim());
  };

  @HostListener("blur", ["$event.target.value"])
  applyTrim(val: string): void {
    this.writeValue(val.trim());
  }

  public override writeValue(value: any): void {
    if (typeof value === "string") {
      value = value.trim();
    }

    super.writeValue(value);
  }

}

/* import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appTrim]'
})
export class TrimDirective {
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private ngModel: NgModel) { }

  @HostListener("blur")
  onBlur() {
    let value = this.ngModel.model;

    if(value) {
      value = value.trim();
      this.renderer.setProperty(
        this.elementRef.nativeElement, "value", value);
      this.renderer.setAttribute(
        this.elementRef.nativeElement, "value", value);
      this.ngModel.update.emit(value);
    } else {
      this.renderer.setProperty(
        this.elementRef.nativeElement, "value", null);
      this.renderer.setAttribute(
        this.elementRef.nativeElement, "value", '');
      this.ngModel.update.emit("");
    }
  }
} */