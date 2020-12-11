import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  // buradaki loggingService'ı logging.component.html de kullanacağımız için public olarak inject ediyoruz. 
  constructor(public loggingService: LoggingService) { }

  ngOnInit() {
  }

}
