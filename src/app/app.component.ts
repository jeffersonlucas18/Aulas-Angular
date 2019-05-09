import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  luke = { name: 'luke', isjedi: true, templo: 'curoscan' }
  han = { name: 'han solo', isjedi: false}
  leia = { name: 'leia', isjedi:false}
}
