import { Component, OnInit, inject } from '@angular/core';
import { User } from '../../models/user.class';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  birthDate: Date = new Date();
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>,private firestore: AngularFirestore) { 

  }

  ngOnInit(): void {
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
    this.loading = true;
    (async () => {
      try {
        const result = await this.firestore.collection('users').add(this.user.toJSON());
        console.log('Adding user finished', result);
      } catch (error) {
        console.error('Error adding user', error);
      }
      this.loading = false;
      this.dialogRef.close();
    })();
  }
}
