import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private dialogRef: MatDialog,  @Inject(MAT_DIALOG_DATA) public data: any) { }

  customerForm = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    surname: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
  });


  ngOnInit(): void {
  }

  close(){
    this.dialogRef.closeAll();
  }


}
