import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FooterComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}
