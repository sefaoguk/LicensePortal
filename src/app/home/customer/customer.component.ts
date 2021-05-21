import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataServiceService } from 'src/app/data-service.service';
import { DeleteComponent } from './delete/delete.component';
import { AddComponent } from './Dialog/add/add.component';
import { EditComponent } from './edit/edit.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {


  constructor(private dataService: DataServiceService, private matDialog: MatDialog) {

  }

  displayedColumns = ["Name","Surname","Phone"]
  columnsToDisplay: string[] = [...this.displayedColumns, 'actions', ' '];
  data = this.dataService.customers;



  ngOnInit(): void {
   console.log(this.data);

  }

  addCustomer(){
    const addDialog = new MatDialogConfig();
    this.matDialog.open(AddComponent, addDialog)

  }

  editCustomer(event:any){
    const addDialog = new MatDialogConfig();
    addDialog.data = event
    this.matDialog.open(EditComponent, addDialog)

  }

  deleteCustomer(event:any){    
    const addDialog = new MatDialogConfig();
    addDialog.data = event
    this.matDialog.open(DeleteComponent, addDialog)

  }

}
