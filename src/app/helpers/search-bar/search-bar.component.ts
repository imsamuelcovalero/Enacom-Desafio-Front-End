/* File: src/app/home/home.component.ts */
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() searchTerm = new EventEmitter<string>();

  currentTerm = '';

  search(term: string): void {
    this.currentTerm = term;
    this.searchTerm.emit(this.currentTerm);
  }
}