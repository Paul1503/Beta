import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BienvenidaPage } from './bienvenida.page';

describe('BienvenidaPage', () => {
  let component: BienvenidaPage;
  let fixture: ComponentFixture<BienvenidaPage>;

<<<<<<< HEAD
  beforeEach((() => {
=======
  beforeEach(async(() => {
>>>>>>> ed8ff63867f57c9729694ba612af13facf2215ce
    fixture = TestBed.createComponent(BienvenidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
