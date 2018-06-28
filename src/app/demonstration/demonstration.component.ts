import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Palette } from '../palette';
import { PaletteService } from '../palette.service';
@Component({
  selector: 'app-demonstration',
  templateUrl: './demonstration.component.html',
  styleUrls: ['./demonstration.component.css']
})
export class DemonstrationComponent implements OnInit {

  palette: Palette[];
  id: number;

  getNum():void {
    this.id = +this.route.snapshot.paramMap.get('id');
  }
  setPalette():void {
    this.paletteService.getPalettes(this.id).subscribe(data => this.palette = data);
  }
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private paletteService: PaletteService
  ) { }
  ngOnInit() {
    this.getNum();
    this.setPalette();
  }

}
