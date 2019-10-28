import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(public auth: AuthService, public router: Router) {
  }

  manage() {
    this.router.navigate(['manage']);
  }
}
