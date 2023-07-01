import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { PlaylistsComponent } from './playlists.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    PlaylistsComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    PlaylistsRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzIconModule
  ]
})
export class PlaylistsModule { }