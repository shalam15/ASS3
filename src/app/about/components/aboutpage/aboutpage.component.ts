import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }
  goBack(): void {
    this.router.navigate(['/'])
}
}
