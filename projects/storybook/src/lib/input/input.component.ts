import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() placeholder: string = 'default placeholder';
  @Input() type: 'text' | 'password' | 'number' = 'text';
  @Input() label: string = 'default label';
  @Input() id: string = 'default_id';

  constructor() {}
}
