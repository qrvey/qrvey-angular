import {Component} from '@angular/core';
import {importScript} from './shared/load-scripts';

@Component({
  selector: 'app-root',
  template: '<qrvey-end-user settings="config"></qrvey-end-user>'
})
export class AppComponent {
  constructor() {
    importScript('//421850935145sandboxqrveywidgets.s3.amazonaws.com/widgets-launcher/app.js');

    (window as any).config = {
      domain: 'https://sandbox.qrveyapp.com',
      appid: 'H2UuWJeIp',
      apikey: 'TlyeWkQ5tH4m05r3WXUqc9ILayESPlhd6hJaCut0',
    };
  }
}
