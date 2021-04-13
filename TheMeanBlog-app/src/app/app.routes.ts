import { Routes } from "@angular/router";
import { CreatePostComponent } from "./components/create-post/create-post.component";
import { ListPostsComponent } from "./components/list-posts/list-posts.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

export const AppRoutes: Routes = [
    {
        path: 'posts',
        component: ListPostsComponent
    }, {
        path: 'posts/create',
        component: CreatePostComponent,
    }, {
        path: '',
        redirectTo: '/posts',
        pathMatch: 'full'
    }, {
        path: '**',
        component: PageNotFoundComponent
    }
];