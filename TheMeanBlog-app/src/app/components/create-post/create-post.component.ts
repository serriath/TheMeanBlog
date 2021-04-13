import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit, OnDestroy {

    public post: Post = new Post();
    private unsubscribe$ = new Subject();

    constructor(
        private _postService: PostsService,
        private _router: Router) { }
   

    ngOnInit(): void {
    }

    createPost() {
        this._postService
            .createPost(this.post)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(post => {
                
                if (post) {
                    this._router.navigateByUrl('/posts');
                }
            },
            error => {
                console.log('an error occurred ', error);
            });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

}
