import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'novator';

  onSubmit(e) {
    e.preventDefault();
    const mansory = document.getElementsByClassName('mansory')[0];
    console.log(mansory);
    for (let i = 0; i < e.target.items.value; i++) {
      mansory.insertAdjacentHTML('beforeend', '<div class="item" style="height: ' + (Math.floor(Math.random() * (400 - 200)) + 200) + 'px"></div>');
    }
  }
}
