import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent {
  constructor(public authService: AuthService) { }
}
