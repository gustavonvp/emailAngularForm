import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {

  email: Email;

  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService,

    ) {
        // this.email = this.route.snapshot.data.email;
        this.email = route.snapshot.data.email;
        this.route.data.subscribe(({email}) => {
          this.email = email;
        })

     }

  ngOnInit() {
    // console.log(this.route)
    // this.route.params.subscribe(({id}) => {
    //   this.emailService.getEmail(id).subscribe(email => {
    //     console.log(email);
    //   })
    // })
      // console.log(this.route.snapshot)
   
    // setInterval(() => {
    //   console.log(this.route.snapshot.params.id);
    // }, 1000)
    
    this.route.params.
    pipe(
      switchMap(({id}) => {
        return this.emailService.getEmail(id);
      })
    )
    .subscribe(email => {
      this.email=email;
    })


  }

}
