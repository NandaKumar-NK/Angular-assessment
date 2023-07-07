import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule,FormGroup}from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';
import{HttpClientModule} from '@angular/common/http'
import { UrlShortenComponent } from './url-shorten/url-shorten.component';
import { MortgageCalculatorComponent } from './mortgage-calculator/mortgage-calculator.component';
@NgModule({
  declarations: [
    AppComponent,
    TemperatureConverterComponent,
    UrlShortenComponent,
    MortgageCalculatorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
