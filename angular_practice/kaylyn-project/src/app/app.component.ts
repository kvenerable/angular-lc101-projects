import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kaylyn Angular Project';
  name ='Kaylyn';
  itemList = ['kiwi','peaches', 'grapes', 'pineapple'];

  rectangle ={
    length: 5,
    width: 6,
    area: function (){
      return this.length* this.width;
    }
  }

}
