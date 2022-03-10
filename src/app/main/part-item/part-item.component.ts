import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Part } from '../../models/parts.models'

@Component({
  selector: 'app-part-item',
  templateUrl: './part-item.component.html',
  styleUrls: ['./part-item.component.scss']
})
export class PartItemComponent {

  @Input () parts!: Part;
  @Input() position!: number;

  @Output() partClicked: EventEmitter<Part> = new EventEmitter<Part>();

  onClick(): void{
    this.partClicked.emit(this.parts);
  }

}
