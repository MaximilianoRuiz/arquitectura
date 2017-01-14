import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  			<h1>Hello {{name}}</h1>
  			<h2>{{min}}:{{seg}}</h2>
  			<p>
  				<button (click)="tooglePause()">
  					{{buttonLabel}}
  				</button>
  			</p>
  			<login-component></login-component>
  			`,
})

export class AppComponent  {
	name: string;
	min: number;
	seg: number;
	isPaused: boolean;
	buttonLabel: string;

	constructor(){
		this.name = 'Angular';
		this.resetTimer();
		setInterval(() => this.tick(), 1000);
	}

	private resetTimer(): void {
		this.min = 24;
		this.seg = 59;
		this.buttonLabel = "Empezar";
		this.tooglePause();
	}

	private tick(): void {
		if(!this.isPaused) {
			this.buttonLabel = "Detener";
			if(--this.seg < 0){
			this.seg = 59;
				if(--this.min < 0){
					this.resetTimer();
				}
			}
		}
	}

	private tooglePause(): void {
		this.isPaused = !this.isPaused;
		if(this.min < 24 || this.seg < 59) {
			this.buttonLabel = this.isPaused ? "Reanudar" : "Pausar";
		}
	}
}
