import { Component } from '@angular/core';
import { importScripts } from './shared/load-scripts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'qrvey-angular';

  constructor(){
    // Step 3. Store widget config in windows object. This is the string located in the settings object of the widget ...settings="config"... 
    (window as any).config = {
      apikey: "DOCUMENTATION_DEMO_API_KEY",
      domain: "https://sandbox.qrveyapp.com", 
      app_id: "H2UuWJeIp",
      userid: "ZreovaM",
      // pageid: "MIiDVNmXN"
    }

    // Step 2.2. Using load js script files script. 
    importScripts(['//421850935145sandboxqrveywidgets.s3.amazonaws.com/widgets-launcher/app.js']);    
  }

}
