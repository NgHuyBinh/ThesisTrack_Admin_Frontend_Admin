import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/Services/auth/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  // styleUrls: ['./topbar.component.css']
  styleUrls: ['../../../src/assets/css_admin/sb-admin-2.css'],
})
export class TopbarComponent implements OnInit{
    constructor(private authService: AuthService, private router: Router) {}
    ngOnInit(): void {
      if (!localStorage.getItem('accessToken')) {
        this.router.navigate(['/login']);
      }
      console.log(localStorage.getItem('accessToken'));
    }
    handleLogout() {
      this.authService.logout();
      this.router.navigate(['/login']);
    }

    
}
