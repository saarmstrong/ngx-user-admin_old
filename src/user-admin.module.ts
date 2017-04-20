import { NgModule }             from '@angular/core';

import { BrowserModule }            from '@angular/platform-browser';
import { HttpModule }               from '@angular/http';

import { RouterModule, Routes }     from '@angular/router';

import { AlertModule,
         ModalModule,
         TabsModule }               from 'ngx-bootstrap';

import { UsersService }             from './users.service';

import { UserListComponent }    from './user-list.component';

const loginRoutes: Routes = [
];

@NgModule({
    imports: [ 
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(loginRoutes),

        AlertModule,
        ModalModule,
        TabsModule
    ],
    declarations: [ 
        UserListComponent 
    ],
    exports: [ 
        UsersService,
        UserListComponent 
    ],
    providers: [
        UsersService
    ]
})
export class UserAdminModule {}
