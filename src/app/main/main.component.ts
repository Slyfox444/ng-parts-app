import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Part } from "../models/parts.models";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit{

    parts!: Part[];
    mostWantedPart!: Part;

    constructor(){
        console.log('constructor');
    }


   ngOnInit(): void{
       console.log('ngOnInit');

        this.parts = [
            {
                id: 1,
                partName: 'Front bumper',
                manifacturer: 'BMW'
                
            },
            {
                id: 2,
                partName: 'Rear bumper',
                manifacturer: 'BMW'
            },
            {
                id: 3,
                partName: 'thresholds',
                manifacturer: 'BMW'
            }
        ];

        this.parts = this.parts.sort((a, b) => {
            if (a.partName < b.partName) {
                return -1;
            }

            if (a.partName > b.partName) {
                return 1;
            }
            return 0;
        });
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit');
      }
    
      onMarkAsWanted(part: Part): void {
        this.mostWantedPart = part;
      }
    
}