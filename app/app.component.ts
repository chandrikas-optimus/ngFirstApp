import {Component} from 'angular2/core';
@Component ({
    selector : 'pm-app',
    template : `<div>{{title}}</div>`

})
export class AppComponent {
    title : string = 'WELCOME';
}