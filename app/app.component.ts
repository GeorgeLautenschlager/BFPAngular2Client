import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

@Component({
  moduleId: module.id.replace("/dist/","/"),
  selector: 'app-root',
  templateUrl: 'app/templates/app.component.html'
})

export class AppComponent {
  
}
