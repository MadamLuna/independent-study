// Test Base Stats Component
import { ComponentFixture, TestBed } from '@angular/core/testing'; 
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core'; 

import { SpellsComponent } from './spells.component'; 

describe('Component: SpellsComponent', () => {
	let comp: 		SpellsComponent;
	let fixture:	ComponentFixture<SpellsComponent>;
	let de:			DebugElement;
	let le: 		HTMLElement;
	
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ SpellsComponent ], 
			// declare test component
		})
		
		fixture = TestBed.createComponent(SpellsComponent); 
		
		comp = fixture.componentInstance;  // SpellsComponent test instance
		
		/*
		// query for title <h1> by CSS element selector
		de = fixture.debugElement.query(By.css('h1')); 
		el = de.nativeElement; 
		
		*/
	})
});
