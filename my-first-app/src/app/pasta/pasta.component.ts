import { Component } from '@angular/core';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.css']
})
export class PastaComponent {
 name=""
  onUpdateName(event){
    console.log(event)
    this.name=event.target.value
  }
}
