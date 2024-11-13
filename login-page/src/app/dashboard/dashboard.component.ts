import { ChangeDetectorRef, Component, HostListener, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  gridSize = 0;
  cells: number[] = []; 
  selectedCells: Set<number> = new Set();
  isCtrlPressed = false;  
  isShiftPressed = false;
  username :string= ' ';  
  role: string = '';  
  constructor(private zone: NgZone, private cd: ChangeDetectorRef) {}

  ngOnInit() {
      this.username = localStorage.getItem('username') || 'Përdorues i panjohur';
      this.role = localStorage.getItem('role') || 'Roli i panjohur';
      this.cd.detectChanges();
  }

  generateGrid() {
    this.cells = Array(this.gridSize * this.gridSize).fill(0);
    this.selectedCells.clear();
  } 

  selectCell(index: number, event: MouseEvent) {
    if (this.isShiftPressed) {
      const rowStart = Math.floor(index / this.gridSize) * this.gridSize;
      for (let i = rowStart; i < rowStart + this.gridSize; i++) {
        this.selectedCells.add(i);
      }
    } else if (this.isCtrlPressed) {
      const column = index % this.gridSize;
      for (let i = column; i < this.cells.length; i += this.gridSize) {
        this.selectedCells.add(i);
      }
    } else {
      if (this.selectedCells.has(index)) {
        this.selectedCells.delete(index);
      } else {
        this.selectedCells.add(index);
      }
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Control') {
      this.isCtrlPressed = true;
    }
    if (event.key === 'Shift') {
      this.isShiftPressed = true;
    }
  }
  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'Control') {
      this.isCtrlPressed = false;
    }
    if (event.key === 'Shift') {
      this.isShiftPressed = false;
    }
  }
}

