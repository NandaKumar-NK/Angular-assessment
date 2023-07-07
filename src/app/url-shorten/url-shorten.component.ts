import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm , FormsModule} from '@angular/forms';
import { NgModel } from '@angular/forms';
import { NgTinyUrlService } from 'ng-tiny-url';
@Component({
  selector: 'app-url-shorten',
  templateUrl: './url-shorten.component.html',
  styleUrls: ['./url-shorten.component.css']
})
export class UrlShortenComponent {
 
  title = 'angular-assessment';
  UrlShotener: UrlShotener = new UrlShotener;

  ngOnInit() {
    this.UrlShotener = { 
    url: ''
  };
}
  
  shortenedUrl = '';

  constructor(private tinyUrl: NgTinyUrlService) {}
  
  onSubmit(){
    this.tinyUrl.shorten(this.UrlShotener.url).subscribe(res => {
        
      this.shortenedUrl = res;
      console.log(res); 
    });
  }
}
export class UrlShotener{
  url = '';
}

  

