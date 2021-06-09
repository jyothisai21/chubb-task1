import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 @Input ('title') title=""
 @Input ('price') price=""
 @Input ('users') users=""
 @Input ('storage') storage=""
 @Input ('subdomain') subdomain=""
 @Input ('c1') c1=""
 @Input ('c2') c2=""
 @Input ('c3') c3=""
 @Input ('c4') c4=""
 @Input ('check1') check1=""
 @Input ('check2') check2=""
 @Input ('check3') check3=""
 @Input ('check4') check4=""
 @Input ('check5') check5=""
  constructor() { }

  ngOnInit() {
  }

}
