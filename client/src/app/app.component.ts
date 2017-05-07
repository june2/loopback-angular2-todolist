import { Component, OnInit } from '@angular/core';
import { TodoApi } from '../app/shared/sdk/services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  //todo list array
  private list: any = [];

  //create item form
  private form: any = {};

  constructor(private todoApi: TodoApi){ }

  ngOnInit(){
    this.get();
  }

  /**
  * @method get
  * @description get todo list
  **/
  get(): void {
    this.todoApi.find().subscribe(
      (res: any) => {
        this.list = res;
      },
      (err: any)  => {
        console.error(err);
      }
    )
  }


  /**
  * @method create
  * @description create todo item
  **/
  create(): void {
    this.todoApi.create(this.form).subscribe(
      (res: any) => {
        this.list.push(res);
      },
      (err: any)  => {
        console.error(err);
      }
    )
  }

  /**
  * @method delete
  * @description delete todo item
  **/
  delete(id:string, index:number): void {
    this.todoApi.deleteById(id).subscribe(
      (res: any) => {
        this.list.splice(index, 1);
      },
      (err: any)  => {
        console.error(err);
      }
    )
  }


}
