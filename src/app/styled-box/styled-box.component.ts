import { Component } from '@angular/core';

@Component({
  selector: 'app-styled-box',
  templateUrl: './styled-box.component.html',
  styleUrl: './styled-box.component.css'
})
export class StyledBoxComponent {
  public boxColor: string;
  public boxSize: string;


  constructor() {
    this.boxColor = 'red',
    this.boxSize = '100px'
  }

  // Method to reset the styles
  resetStyles(): void {
    this.boxColor = 'red';
    this.boxSize = '100px'
  }

}
