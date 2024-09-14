import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatTooltip, NgFor, DragDropModule, MatFormFieldModule, MatInputModule, DragDropModule, MatButtonModule, MatIconModule, MatDividerModule, MatButton], // Add MatIconModule to imports
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  ngOnInit() {
    this.getItems();
  }

  constructor(private http: HttpClient) { }
  items: any = [];
  Host = "http://localhost:4000"


  drop(event: CdkDragDrop<string[]>) {
    //save the dragged object data to a constant variable
    const draggedItemData = event.item.data;
    console.log(draggedItemData);
  }

  getItems() {
    this.http.get(this.Host).subscribe((data) => {
      this.items = data;
    });
  }

  updateItem(item: any) {
    this.http.put(this.Host + "/UpdateNote/" + item.id, item).subscribe((data) => {
      this.items = data;
    });
  }

  deleteItem(item: any) {
    this.http.delete(this.Host + "/DeleteNote/" + item.id).subscribe((data) => {
      this.items = data;
    }, error => {console.log(error)});
  }
}
