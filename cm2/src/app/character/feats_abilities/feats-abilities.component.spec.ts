// Test Base Stats Component
import { ComponentFixture, TestBed } from '@angular/core/testing'; 
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core'; 

import { FeatsAbilitiesComponent } from './feats-abilities.component'; 

describe('Component: FeatsAbilitiesCompone', () => {
	let comp: 		FeatsAbilitiesComponent;
	let fixture:	ComponentFixture<FeatsAbilitiesComponent>;
	let de:			DebugElement;
	let le: 		HTMLElement;
	
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ FeatsAbilitiesComponent ], 
			// declare test component
		})
		
		fixture = TestBed.createComponent(FeatsAbilitiesComponent); 
		
		comp = fixture.componentInstance;  // FeatsAbilitiesComponent test instance
		
		/*
		// query for title <h1> by CSS element selector
		de = fixture.debugElement.query(By.css('h1')); 
		el = de.nativeElement; 
		
		*/
	})
});
