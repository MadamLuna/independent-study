// Test Character Details Component
import { ComponentFixture, TestBed } from '@angular/core/testing'; 
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core'; 

import { CharacterDetailsComponent } from './character-details.component'; 

describe('Component: CharacterDetailsComponent', () => {
	let comp: 		CharacterDetailsComponent;
	let fixture:	ComponentFixture<CharacterDetailsComponent>;
	let de:			DebugElement;
	let le: 		HTMLElement;
	
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ CharacterDetailsComponent ], 
			// declare test component
		})
		
		fixture = TestBed.createComponent(CharacterDetailsComponent); 
		
		comp = fixture.componentInstance;  // CharacterDetailsComponent test instance
		
		/*
		// query for title <h1> by CSS element selector
		de = fixture.debugElement.query(By.css('h1')); 
		el = de.nativeElement; 
		
		*/
	})
});
