import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionHomeOutline, ionLogOutOutline, ionMailOutline, ionOpenOutline, ionPieChartOutline, ionSettingsOutline, ionStorefrontSharp } from '@ng-icons/ionicons';
import { bootstrapBell, bootstrapPercent } from '@ng-icons/bootstrap-icons';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppStatusService } from './app-status.service';


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [NgIconComponent, CommonModule, RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  providers: [provideIcons({ionStorefrontSharp, ionHomeOutline, bootstrapPercent, ionPieChartOutline,ionOpenOutline, ionMailOutline, bootstrapBell, ionSettingsOutline, ionLogOutOutline})]
})
export class SidenavComponent {
  constructor(private router: Router, public appStatusService: AppStatusService) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  onOpen(): void {
    this.appStatusService.toggleIsOpen();
  }
}
