// Test Base Stats Component
import { ComponentFixture, TestBed } from '@angular/core/testing'; 
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core'; 

import { CharacterListComponent } from './character-list.component'; 

describe('Component: CharacterListComponent', () => {
	let comp: 		CharacterListComponent;
	let fixture:	ComponentFixture<CharacterListComponent>;
	let de:			DebugElement;
	let le: 		HTMLElement;
	
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ CharacterListComponent ], 
			// declare test component
		})
		
		fixture = TestBed.createComponent(CharacterListComponent); 
		
		comp = fixture.componentInstance;  // CharacterListComponent test instance
		
		/*
		// query for title <h1> by CSS element selector
		de = fixture.debugElement.query(By.css('h1')); 
		el = de.nativeElement; 
		
		*/
	})
});
