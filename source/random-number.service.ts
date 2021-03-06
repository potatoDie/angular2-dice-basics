import { Injectable } from '@angular/core';

@Injectable()
export class RandomNumberService {
	getNr(min: number, max: number): number {
		return Math.floor(Math.random() * (max + 1 - min)) + min;
	}
}