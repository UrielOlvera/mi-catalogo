import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VistasComponent } from './vistas/vistas.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateAddComponent } from './modals/update-add/update-add.component';
import { DeleteComponent } from './modals/delete/delete.component';
import { DetailsComponent } from './modals/details/details.component';
import { ForbiddenNameDirective } from './directives/forbidden-name.directive';
import { FormatoModelosPipe } from './pipes/formato-modelos.pipe';
import { LogComponent } from './log/log.component';



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
    ForbiddenNameDirective,
    FormatoModelosPipe,
    LogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UpdateAddComponent, DeleteComponent]
})
export class AppModule { }
