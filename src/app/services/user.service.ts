import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserEntry } from '../models/user.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserDataService {
  constructor(private http: HttpClient) {}

  private userEntries: Map<string, UserEntry> = new Map([
    [
      'ww@gmail.com',
      new UserEntry('Wrag', 'ww@gmail.com', 'testing', 'jhfjewlhflewh'),
    ],
    [
      'pieter@gmail.com',
      new UserEntry('Piet', 'pieter@gmail.com', 'testing', 'jhfjewlhflewh'),
    ],
    [
      'llll@gmail.com',
      new UserEntry('Pompies', 'llll@gmail.com', 'testing', 'jhfjewlhflewh'),
    ],
    [
      'admin@gmail.com',
      new UserEntry('admin', 'admin@gmail.com', 'admin', 'jhfjewlhflewh'),
    ],
  ]);


  public getUsers(): Map<string, UserEntry>{
    return this.userEntries
  }


  public getUser(email: string) {
    return this.userEntries.get(email);
  }

  //Create new user
  public createUser(userEntry: UserEntry): string {
    if (this.getUser(userEntry.getEmail()) != null) {
      return 'User Already Exists';
    }
    this.userEntries.set(userEntry.getEmail(), userEntry);
    return '';
  }

  //Update user
  public updateUser() {}

  //     //Delete user
  //     deleteUser(username: string){
  //         this.http.delete<{message: string}>(`http://localhost:4200/delete-user?id=${username}`).subscribe((jsonData)=>{
  //             this.getAllUsers();
  //     })
  // }
}
