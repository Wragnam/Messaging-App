import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserEntry } from "../models/user.model";
import { Subject } from "rxjs";


@Injectable({providedIn:"root"})
export class UserDataService{
    constructor(private http: HttpClient){}

    userEntries: UserEntry[] = [
        new UserEntry('1','Wrag','ww@gmail.com','testing','jhfjewlhflewh'),
        new UserEntry('12','Piet','pieter@gmail.com','testing','jhfjewlhflewh'),
        new UserEntry('1093809','Pompies','llll@gmail.com','testing','jhfjewlhflewh'),
        new UserEntry('1342','admin','admin@gmail.com','admin','jhfjewlhflewh'),

    ]
    userSubject = new Subject<UserEntry[]>();


//     //List all users
//     getAllUsers(): User[] {
//         this.http.get<{userEntries:User[]}>('http://localhost:4200/get-users').subscribe((jsonData)=>{
//             this.userEntries = jsonData.userEntries;
//             this.userSubject.next(this.userEntries);
//         });
//         return this.userEntries;
//     }

//     getUser(username: string){
        
//     }


    //Create new user
    createUser(userEntry: UserEntry){
       this.userEntries.push(userEntry);
       this.userSubject.next(this.userEntries);

    }

    //Update user
    updateUser(){
        
    }

//     //Delete user
//     deleteUser(username: string){
//         this.http.delete<{message: string}>(`http://localhost:4200/delete-user?id=${username}`).subscribe((jsonData)=>{
//             this.getAllUsers();
//     })
// }
    
}