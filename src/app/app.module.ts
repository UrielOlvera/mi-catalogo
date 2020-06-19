import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VistasComponent } from './vistas/vistas.component';
import { ListComponent } from './list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { UpdateAddComponent } from './modals/update-add/update-add.component';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './modals/delete/delete.component';
import { DetailsComponent } from './modals/details/details.component';
import { AddComponent } from './modals/add/add.component';
import { UpdateComponent } from './modals/update/update.component';
import { ForbiddenNameDirective } from './directives/forbidden-name.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistasComponent,
    ListComponent,
    TableComponent,
    PageNotFoundComponent,
    UpdateAddComponent,
    DeleteComponent,
    DetailsComponent,
    AddComponent,
    UpdateComponent,
    ForbiddenNameDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UpdateAddComponent, DeleteComponent]
})
export class AppModule { }
