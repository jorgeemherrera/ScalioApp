import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { AccountService } from './account-service';
import { HttpClientModule } from '@angular/common/http';
describe('AccountService', () => {
    let accountService: AccountService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AccountService],
        });

        httpMock = getTestBed().get(HttpTestingController);
        accountService = getTestBed().inject(AccountService);

    });
    interface Users {
        avatar: string;
        login: string;
        type: string;
    }
    it('it is created', () => {
        expect(accountService).toBeTruthy();
    });
    it('should be able to retrieve posts from the API via GET', () => {
        const dummyPosts: Users[] = [{
            avatar: 'https://avatars.githubusercontent.com/u/19397980?v=4',
            login: 'test_1',
            type: 'type_1'
        }, {
            avatar: 'https://avatars.githubusercontent.com/u/19397980?v=4',
            login: 'test_2',
            type: 'type_2'
        }];
        accountService.getAccount('test').subscribe(posts => {
            expect(posts.length).toBe(2);
            expect(posts).toEqual(dummyPosts);
        });
    });
});