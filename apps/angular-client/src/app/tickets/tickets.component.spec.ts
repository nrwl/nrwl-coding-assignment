import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';

import { TicketsComponent } from './tickets.component';
import { ApiService } from '../api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TicketsComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
      declarations: [TicketsComponent],
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TicketsComponent);
    const component = fixture.componentInstance;
    const apiService = TestBed.inject(ApiService);
    jest.spyOn(apiService, 'tickets').mockImplementation(() => of([]));
    jest.spyOn(apiService, 'users').mockImplementation(() => of([]));
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
