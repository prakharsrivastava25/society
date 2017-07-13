import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/material';

@Component({
  selector: 'calvin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

navigation = [
    { link: 'dashboard', label: 'Dashboard' },
    { link: 'trending', label: 'Trending Communities' },
    { link: 'topics', label: 'Common Topics' },
    { link: 'populartools', label: 'Popular Tools' },
    { link: 'search', label: 'Search(temporary)'},
    { link: 'community page', label: 'communitypage'},
  ];
}
