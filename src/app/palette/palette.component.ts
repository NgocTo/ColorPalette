import { Component, OnInit } from '@angular/core';
import { Palette } from '../palette';
import { PaletteService } from '../palette.service';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {

  palettes: Palette[];

  setOffices(): void {
    this.paletteService.getPalettes().subscribe(data => this.palettes = data);
  }
  constructor(
    private paletteService: PaletteService
  ) { }

  ngOnInit() {
    this.setOffices();
  }

}
