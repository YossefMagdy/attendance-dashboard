import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';





@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit 
{

  @Input('notificationsData') notificationsData : any;
  @Output() toggle_notification_window_event = new EventEmitter();


  constructor(
    private cookie_s: CookieService
  ) { }

  ngOnInit(): void 
  {


  }


  close_window()
  {
    this.toggle_notification_window_event.emit('');
  }




}
