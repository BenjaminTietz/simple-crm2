import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  user:User = new User();  // variable user is of type User (: User in this case its any) and is a new instance of User class
  
  allUsers:any = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) {

   }

  ngOnInit(): void {
    this.firestore
    .collection('users')
    .valueChanges({ idField: 'id'})
    .subscribe((changes: any) => {
      console.log('Recived changes from database:', changes);
      this.allUsers = changes;
    });
  }


  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

}
