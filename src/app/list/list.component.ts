import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from '../Servicios/autos.service';
import { DetailsComponent } from '../modals/details/details.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[];
  autoSelected: Automovil;
  page=1;
  pageSize=5;
  collectionSize;

  closeResult = '';
  constructor(private modalService: NgbModal, private autoService: AutosService){ }

  ngOnInit(): void {
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
      this.collectionSize = response.data.length;
    })
  }

  onSelect(auto: Automovil){
    const modalRef = this.modalService.open(DetailsComponent, { centered: true });
    modalRef.componentInstance.autoSelected = auto;

    modalRef.result.then(
      (auto) => {
        this.autoService.getAuto_ID(auto).subscribe(
          response=>console.log(response)
        );
      },
      (reason)=>{
        console.log(reason)
      }
    )
  }

}
