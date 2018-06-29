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

  paletteSearch: Palette = new Palette();

  findPalette(paletteQuery: Palette): void {
    this.paletteService.getPalettes(paletteQuery.id).subscribe(data => this.palettes = data);
  }
  setPalettes(): void {
    this.paletteService.getPalettes().subscribe(data => this.palettes = data);
  }
  constructor(
    private paletteService: PaletteService
  ) { }

  ngOnInit() {
    this.setPalettes();
  }

}
