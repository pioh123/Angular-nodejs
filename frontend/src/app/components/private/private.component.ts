import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service'


@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  
  tasks = []
  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit(): void {
    this.tasksService.getPrivateTasks().subscribe(
      res => {
        console.log(res)
        this.tasks = res
      },
      err => console.log(err)
    )
  }
  
}
