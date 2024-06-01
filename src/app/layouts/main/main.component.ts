import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { TopnavComponent } from '../topnav/topnav.component';
import { RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionArrowForward, ionOpenOutline } from '@ng-icons/ionicons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SidenavComponent, TopnavComponent, RouterOutlet, NgIconComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  providers: [provideIcons({ionArrowForward, ionOpenOutline})],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainComponent {
  isHumburger: boolean = true

  onToggle() {
    this.isHumburger = !this.isHumburger
  }
}
