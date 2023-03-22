import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.css']
})

export class radioInputComponent {
  @Input() label: string;
  @Input() name: string;
  @Input() type: string;
  @Input() placeholder: string;
  @Input() required: boolean;
}
