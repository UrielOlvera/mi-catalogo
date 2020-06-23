import { Component, OnInit } from '@angular/core';

import { Automovil } from '../models';
import { AutosService } from '../Servicios/autos.service';
import { UpdateAddComponent } from '../modals/update-add/update-add.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteComponent } from '../modals/delete/delete.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  //p: number = 1;
  page = 1;
  pageSize = 10;
  collectionSize;
  autos: Automovil[];
  displayProgresBar: boolean;
  searchText;

  constructor(private autoService: AutosService, private modalService: NgbModal) { }
  
  ngOnInit(): void {
    this.displayProgresBar = true;
    this.autoService.getAutos().subscribe((response)=>{
      this.displayProgresBar = false;
      this.autos = response.data;
      this.collectionSize = response.data.length;
    })
  }

  openModalEditar(auto: Automovil){
    const modalRef = this.modalService.open(UpdateAddComponent, { centered: true });
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.action = 'Editar';

    modalRef.result.then(
      (auto) => {
        this.autoService.updateAutos(auto).subscribe( response => {
          this.ngOnInit();
          console.log(response)
        });
      },
      (reason) => {
        console.log(reason)
      }
    )
  }
  openModalAdd(){
    const modalRef = this.modalService.open(UpdateAddComponent, { centered: true });
    modalRef.componentInstance.action = 'Agregar';

    modalRef.result.then(
      (auto: Automovil) => {
        this.autoService.addAuto(auto).subscribe( response => {
          console.log(response)
          this.ngOnInit();
        });
      },
      (reason) => {
        console.log(reason)
      }
    );
  }

  openModalConfirmarEliminar(auto: Automovil){
    const modalRef = this.modalService.open(DeleteComponent, { centered: true });
    modalRef.componentInstance.auto = auto;
    modalRef.result.then(
      (autoTemp) => {
        this.autoService.deleteAuto(autoTemp).subscribe(response => {
          this.ngOnInit();
          console.log("Auto eliminado")
          console.log(response)
        })
      },
      (reason) => {
        console.log(reason)
      }
    );
  }

}

