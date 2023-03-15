import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.css'],
})
export class LoginInputComponent {
  @Input() inputType: 'email' | 'password' | null;
  @Input() ajustePlaceholder: string;
}
