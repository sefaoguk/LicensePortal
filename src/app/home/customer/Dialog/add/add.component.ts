import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServiceService } from 'src/app/data-service.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  
  constructor(private dialogRef: MatDialog, private dataService:DataServiceService, @Inject(MAT_DIALOG_DATA) public data: DataServiceService) { }

  ngOnInit(): void {

  }

  customerForm = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    surname: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
  });

  close(){
    this.dialogRef.closeAll();
  }

  add(){

    const addCustomer = new MatDialogConfig();
    addCustomer.data = this.customerForm.getRawValue();
    this.dataService.customers.push(addCustomer.data);
    this.dialogRef.closeAll();
    console.log(this.dataService.customers);
    
  }

}
