import { NgModule }             from '@angular/core';

import { BrowserModule }            from '@angular/platform-browser';
import { HttpModule }               from '@angular/http';

import { AuthService }              from './auth.service';
import { UsersService }             from './users.service';

import { UserListComponent }    from './user-list.component';

@NgModule({
    imports: [ 

    ],
    declarations: [ 
        UserListComponent 
    ],
    exports: [ 
        UserListComponent 
    ],
    providers: [
        AuthService,
        UsersService
    ]
})
export class UserAdminModule {}
