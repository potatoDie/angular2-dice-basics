import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { DieComponent } from './die.component';

// Parent interacts with child via ViewChild
// so it can update its own property total, based on childs value

@Component({
  selector: 'my-app',
  template: `
  	<h1>Check this potatoDie die</h1>
  	<p>Number of rolls: {{ rollCount }}</p>
  	<p>Average: {{ rollCount ? total/rollCount : "-"}}</p>
  	<my-die></my-die>
  	<button (click)="roll()">Roll</button>
  `
})
export class AppComponent { 

	@ViewChild(DieComponent)
	private die: DieComponent;

	rollCount: number = 0;
	total: number = 0;

	roll(){
		this.die.roll();
		this.rollCount++;
		this.total += this.die.value;
	}
}
