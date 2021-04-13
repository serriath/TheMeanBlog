import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from '../../models/post.model';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-list-posts',
    templateUrl: './list-posts.component.html',
    styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit, OnDestroy {

    private unsubscribe$ = new Subject();

    posts: Post[] = [];

    constructor(private _postsService: PostsService) { }

    ngOnInit(): void {
        this._postsService
            .getPosts()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(posts => this.posts = posts);
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

}

