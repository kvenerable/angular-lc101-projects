import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments  ={'Mars soil sample', 'Planr growth habitat', 'Human bone density'}
  constructor() { }

  ngOnInit() {
  }

}
