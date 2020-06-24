import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/app/models';
import { AutosService } from 'src/app/Servicios/autos.service';

@Component({
  selector: 'app-update-add',
  templateUrl: './update-add.component.html',
  styleUrls: ['./update-add.component.css']
})
export class UpdateAddComponent implements OnInit {
  // Agregar/Editar
  action: string;
  auto: Automovil = {} as Automovil;
  desde;
  hasta;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {

  }

  onSubmit(){
    //this.auto.modelos = this.generateModelsArray();
    this.activeModal.close(this.auto);
  }

  generateModelsArray(){
    let array: number[] = [];
    let i = this.desde;
    while(i <= this.hasta){
      array.push(i);
      i++;
    }
    if(this.desde < this.hasta){
      console.log("Correcto!")
    }else{
      console.log("Error!");
    }
    this.auto.modelos = array;
  }
  
  //fn para evaluar modelos
  

}
  