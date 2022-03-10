import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Part } from 'src/app/models/parts.models';

@Component({
  selector: 'app-part-td-form',
  templateUrl: './part-td-form.component.html',
  styleUrls: ['./part-td-form.component.scss']
})
export class PartTdFormComponent implements OnInit {

  @ViewChild("form") ngForm!: NgForm;

    part!: Part;

  constructor() {
    this.part = {
        id: 1,
        partName: "" ,
        manifacturer: "",
    };
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.ngForm);
  }

}
