import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'novator';
  items = 1;

  onSubmit() {
    const mansory = document.getElementsByClassName('mansory')[0];
    for (let i = 0; i < this.items; i++) {
      mansory.insertAdjacentHTML('beforeend', '<div class="item" style="height: ' + (Math.floor(Math.random() * (400 - 200)) + 200) + 'px"></div>');
    }
  }
}
