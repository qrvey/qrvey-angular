<div align="center">
	<img alt="Qrvey Logo" src="https://s3.amazonaws.com/cdn.qrvey.com/images/qrvey-logo.svg" width="200" />
</div>

# Using Qrvey in Angular :phone:

Qrvey is a Web Component-based analytics platform, using multiples technologies such as [stenciljs](https://github.com/ionic-team/stencil), [Angular](https://github.com/angular/angular) and [Vue.js](https://github.com/vuejs/vue).

In this repository we are giving instructions to use the **qrvey-end-user** component in Angular 11.

## Table of contents

* [Installation](#installation)
* [Creating End User Component](#creating-end-user-component)
* [Using End User](#using-end-user)
* [Demo](#demo)
* [Troubleshooting](#troubleshooting)

## Installation

Use a script tag linked to a CDN copy of your Qrvey loader distribution, for example:

    // index.html
    <script src="//421850935145sandboxqrveywidgets.s3.amazonaws.com/widgets-launcher/app.js" type="text/javascript">

Or you can load the script dynamically, in this example we are going to use this function:

	const importScript = (url) => {  
      document.body.appendChild(Object.assign(document.createElement('script'), {  
	      type: 'text/javascript',  
	      src: url  
      }));}
	
	importScript("//421850935145sandboxqrveywidgets.s3.amazonaws.com/widgets-launcher/app.js");

Add **CUSTOM_ELEMENTS_SCHEMA** in the module that will use the component

    // app.module.ts
    import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
    @NgModule({
      ...
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })

## Using End User

Now you are ready to use the **qrvey-end-user** element. It was designed to work with a string property called **settings**, and a variable in **window** which name should be the exact value of the **settings** property.
The final step is the setup of a valid configuration object. For more details about **qrvey-end-user** configuration object, read [official docs](https://partners.qrvey.com/documentation/).

    // app.component.ts
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

## Demo

In the root directory, run:

    ng serve

Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

![Preview End User Demo](https://s3.amazonaws.com/cdn.qrvey.com/images/preview-end-user.png)

## Troubleshooting
If you are experiencing issues with **qrvey-end-user** element in your Angular app, please contact Qrvey team.
