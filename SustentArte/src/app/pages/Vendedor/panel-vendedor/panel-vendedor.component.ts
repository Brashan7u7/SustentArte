import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-panel-vendedor',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './panel-vendedor.component.html',
  styleUrl: './panel-vendedor.component.css'
})
export class PanelVendedorComponent {

}
