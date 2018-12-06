import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import{HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Post } from './models/post.models';
import { post } from 'selenium-webdriver/http';

describe('DataService', () => {

  let service:DataService;
  let httpMock:HttpTestingController;
  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers:[DataService]
    }).compileComponents();

    service=TestBed.get(DataService);
    httpMock=TestBed.get(HttpTestingController);
  }));

  afterEach(() => {
    httpMock.verify();
  })
  it('should retrive posts from the API via GET', () => {
    const dummyPosts:Post[]=[
    {userId:'1',id:1,body:'Hello world',title:'Testing Angular'},
    {userId:'2',id:2,body:'Hello world',title:'Testing Angular 2'},
    ];
service.getPosts().subscribe(post =>{
  expect(post.length).toBe(2);
  expect(post).toEqual(dummyPosts);
});
    const request=httpMock.expectOne(`${service.ROOT_URL}/posts`);

    expect(request.request.method).toBe('GET');
    request.flush(dummyPosts);

  });


});