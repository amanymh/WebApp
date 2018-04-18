import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styles: []
})
export class ActionsComponent implements OnInit {

  constructor(private pdmService: PdmService) { }
  Actions

  ngOnInit() {
  }

  loadInfoPageActions(id: number){
    this.pdmService.loadStaffRecord('Staff/' +id + '/Personal/' + id)
    .subscribe(data => {this.Actions = data
    console.log(data)
    })
    }
    
    
}