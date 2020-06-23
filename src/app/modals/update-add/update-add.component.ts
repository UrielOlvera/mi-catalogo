import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/app/models';

@Component({
  selector: 'app-update-add',
  templateUrl: './update-add.component.html',
  styleUrls: ['./update-add.component.css']
})
export class UpdateAddComponent implements OnInit {
  // Agregar/Editar
  action: string;
  auto: Automovil = {} as Automovil;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.activeModal.close(this.auto);
  }

}
  