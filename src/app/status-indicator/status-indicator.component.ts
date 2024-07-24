import { Component } from '@angular/core';

@Component({
  selector: 'app-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrl: './status-indicator.component.css'
})
export class StatusIndicatorComponent {
  status: string = 'Offline'; // Initial status

  // Define the setStatus method
  setStatus(newStatus: string): void {
    this.status = newStatus;
  }

}
