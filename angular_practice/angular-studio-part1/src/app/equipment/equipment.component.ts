import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment =['Habitat Dome', 'Drones', 'Food containers', 'Oxygen Tanks']

  constructor() { }

  ngOnInit() {
  }

}
