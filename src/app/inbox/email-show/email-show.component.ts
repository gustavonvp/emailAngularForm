import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService,

    ) { }

  ngOnInit() {
    // console.log(this.route)
    this.route.params.subscribe(({id}) => {
      this.emailService.getEmail(id).subscribe(email => {
        console.log(email);
      })
    })
      // console.log(this.route.snapshot)
   
    // setInterval(() => {
    //   console.log(this.route.snapshot.params.id);
    // }, 1000)
  
  }

}
