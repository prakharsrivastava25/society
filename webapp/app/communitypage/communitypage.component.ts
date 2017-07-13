import { Component } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";



@Component({
  templateUrl: './communitypage.component.html',
  styleUrls: ['./communitypage.component.css']
})


export class CommunityPageComponent {
 tiles = [
    {title: `COMMUNITYPAGE`, text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {title: 'others', text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {title: 'new', text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {title: 'reason', text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
{title: 'checking', text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {title: 'others', text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {title: 'new', text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {title: 'reason', text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
 {title: 'checking', text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {title: 'new', text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {title: 'reason', text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},

  ];
}

