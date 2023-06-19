import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() searchTerm = new EventEmitter<string>();

  currentTerm = '';

  search(): void {
    this.searchTerm.emit(this.currentTerm);
  }
}