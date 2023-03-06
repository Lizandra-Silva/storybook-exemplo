import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() backgroundColor: 'blue' | 'red' | 'green' = 'blue';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() label: string = 'Button';
  @Input() id: string = 'default_id';

  constructor() {}
}
