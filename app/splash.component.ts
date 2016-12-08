import { Component } from '@angular/core';

@Component({
  moduleId: module.id.replace("/dist/","/"),
  selector: 'splash',
  templateUrl: 'app/templates/splash.component.html'
})

export class SplashComponent {
  title = "BATTLEFLEET PERSEUS"
}
