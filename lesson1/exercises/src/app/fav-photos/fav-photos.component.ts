import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Gallery';

  
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Flove.html&psig=AOvVaw2GEzI2_BAvBcL2Eqd6TNgL&ust=1639705691354000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLC1j-yZ5_QCFQAAAAAdAAAAABAD';

  constructor() { }

  ngOnInit() {
  }

}