// Test Base Stats Component
import { ComponentFixture, TestBed } from '@angular/core/testing'; 
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core'; 

import { PossessionsComponent } from './possessions.component'; 

describe('Component: PossessionsComponent', () => {
	let comp: 		PossessionsComponent;
	let fixture:	ComponentFixture<PossessionsComponent>;
	let de:			DebugElement;
	let le: 		HTMLElement;
	
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ PossessionsComponent ], 
			// declare test component
		})
		
		fixture = TestBed.createComponent(PossessionsComponent); 
		
		comp = fixture.componentInstance;  // PossessionsComponent test instance
		
		/*
		// query for title <h1> by CSS element selector
		de = fixture.debugElement.query(By.css('h1')); 
		el = de.nativeElement; 
		
		*/
	})
});
