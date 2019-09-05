import { Component } from '@angular/core';

@Component({
  selector: 'the-table',
  templateUrl: './table.component.html'
})
export class TableComponent {

  public isChecked = true;
  public userComment: string = "Just some placehlder text";

  toggleCheckbox(e) {
    if (!this.isChecked) {
      if(confirm("Clicking OK will erase your comment, are you sure?")){
        this.isChecked = !this.isChecked;
        this.userComment = "Just some placehlder text";
      } else {
        e.preventDefault();
      }
      return
    }
    this.isChecked = !this.isChecked
  }
}