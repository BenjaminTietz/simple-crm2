import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  constructor(public dialog: Matdialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

}