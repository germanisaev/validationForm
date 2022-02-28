import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectService } from './shared/subject.service';
import { ItemComponent } from './item/item.component';
import { TrimValueDirective } from './shared/input-trim.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './item/details/details.component';



@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    TrimValueDirective,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
