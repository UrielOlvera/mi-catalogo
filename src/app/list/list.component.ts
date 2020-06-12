import { Component, OnInit } from '@angular/core';
import { AUTOMOVILES } from '../data';
import { Automovil } from '../models';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[];
  autoSelected: Automovil;

  closeResult = '';
  constructor(private modalService: NgbModal){ }

  ngOnInit(): void {
    this.autos=AUTOMOVILES;
  }

  onSelect(auto: Automovil, modal){
    this.autoSelected=auto;
    this.modalService.open(modal);
  }
}
