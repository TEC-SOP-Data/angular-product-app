import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private timeout: any;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.resetTimer();
  }

  @HostListener('document:mousemove')
  @HostListener('document:keypress')
  @HostListener('document:click')
  @HostListener('document:scroll')
  resetTimer() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.router.navigate(['/']); // Gå til forsiden
    }, 10000); // 300000 ms = 5 minutter

  }
}
