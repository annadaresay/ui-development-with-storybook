import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() title: string = 'Lorem ipsum';
  @Input() description: string = 'Lorem ipsum';
  @Input() isUrgent: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
