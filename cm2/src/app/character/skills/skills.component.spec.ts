// Test Base Stats Component
import { ComponentFixture, TestBed } from '@angular/core/testing'; 
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core'; 

import { SkillsComponent } from './skills.component'; 

describe('Component: SkillsComponent', () => {
	let comp: 		SkillsComponent;
	let fixture:	ComponentFixture<SkillsComponent>;
	let de:			DebugElement;
	let le: 		HTMLElement;
	
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ SkillsComponent ], 
			// declare test component
		})
		
		fixture = TestBed.createComponent(SkillsComponent); 
		
		comp = fixture.componentInstance;  // SkillsComponent test instance
		
		/*
		// query for title <h1> by CSS element selector
		de = fixture.debugElement.query(By.css('h1')); 
		el = de.nativeElement; 
		
		*/
	})
});
