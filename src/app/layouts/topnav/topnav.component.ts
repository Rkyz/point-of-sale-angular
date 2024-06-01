import { Component, Input, booleanAttribute } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionCartOutline, ionSearch } from '@ng-icons/ionicons';

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.scss',
  providers: [provideIcons({ionSearch, ionCartOutline})]
})
export class TopnavComponent {
  @Input() onToggle: any;

}
