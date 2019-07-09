import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {
  @Input() user;
  



  constructor(private router: Router) {  }
  
  ngOnInit() {
    
  }

  gotoUser(id: number) : void{
    console.log(id);
    this.router.navigate(['/user', id])

    }

}
