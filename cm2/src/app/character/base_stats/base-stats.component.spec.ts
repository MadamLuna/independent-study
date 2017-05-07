// Test Base Stats Component
import { ComponentFixture, TestBed } from '@angular/core/testing'; 
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core'; 

import { BaseStatsComponent } from './base-stats.component'; 

describe('Component: BaseStatsComponent', () => {
	let comp: 		BaseStatsComponent;
	let fixture:	ComponentFixture<BaseStatsComponent>;
	let de:			DebugElement;
	let le: 		HTMLElement;
	
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ BaseStatsComponent ], 
			// declare test component
		})
		
		fixture = TestBed.createComponent(BaseStatsComponent); 
		
		comp = fixture.componentInstance;  // BaseStatsComponent test instance
		
		/*
		// query for title <h1> by CSS element selector
		de = fixture.debugElement.query(By.css('h1')); 
		el = de.nativeElement; 
		
		*/
	})
});
