import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'intro-storybook-angular-template';

  onClick(_event: unknown) {
    alert('Button was clicked!');
  }
}
