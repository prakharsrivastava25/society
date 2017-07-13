import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrendingComponent } from './trending/trending.component';
import { SearchComponent } from './search/search.component';
import { PopularToolsComponent } from './populartools/populartools.component';
import { TopicsComponent } from './topics/topics.component';
import { Routes, RouterModule } from '@angular/router';
import { CommunityPageComponent } from './communitypage/communitypage.component';

const routes: Routes = [{
          path: '',
          redirectTo: '/dashboard',
          pathMatch: 'full'
          },
          {
              path: 'dashboard',
              component: DashboardComponent
          },
          {
          		path: 'search',
          		component: SearchComponent
          },
          {
              path: 'trending',
              component: TrendingComponent
          },
          {
              path: 'topics',
              component: TopicsComponent
          },
          {
              path: 'populartools',
              component: PopularToolsComponent
          },
                    {
              path: 'communitypage',
              component: CommunityPageComponent
          },
          { path: '**', redirectTo: '/dashboard' }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
