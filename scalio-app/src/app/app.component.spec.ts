import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { AccountService } from './services/account-service';
import * as Rx from 'rxjs';
import { delay } from "rxjs/operators";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        NgxPaginationModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [AccountService],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'scalio-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('scalio-app');
  })
  it('should call getAccount and get response as empty array', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;
    const accountService = fixture.debugElement.injector.get(AccountService);
    spyOn(accountService, "getAccount").and.callFake(() => {
      return Rx.of([]).pipe(delay(100));
    });
    component.getLoginAccount();
    tick(100);
    expect(component.account).toEqual([]);
  }));

  it('should show a sorted table', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    console.log('fixture', fixture)
    const compiled = fixture.debugElement.nativeElement;
    const login = compiled.querySelectorAll('#login');
    fixture.detectChanges();

    login[0].click();
    // after click on the first element, detect the changes to ensure sorting took place
    fixture.detectChanges();
    // your assertions, i.e. expect to see the first element being sorted in the table
/*     expect(component.SortData) */
}));
});
