import { Component } from '@angular/core';
import {MatTooltip} from '@angular/material/tooltip';
import {MatButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatTooltip, MatButtonModule, MatIconModule, MatDividerModule, MatButton], // Add MatIconModule to imports
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
