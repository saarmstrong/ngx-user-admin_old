import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap';
import { UsersService } from './users.service';
import { User } from './user.model';
export declare class UserListComponent implements OnInit {
    private route;
    private router;
    confirmDeleteModal: ModalDirective;
    private usersService;
    wait: any;
    private users$;
    private total$;
    users: User[];
    total: number;
    currentPage: number;
    pagesize: number;
    pages: number[];
    sortCol: string;
    sortDir: string;
    error: any;
    selectedUser: any;
    constructor(usersService: UsersService, route: ActivatedRoute, router: Router);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private _getUsers();
    private _listUpdated();
    getPageCount(): number;
    private _setPagination();
    clickPage(idx: any): void;
    clickNext(): void;
    clickPrev(): void;
    sort(col: any): void;
    clickDelete(idx: any): void;
    cancelDelete(): void;
    confirmDelete(idx: any): void;
    private _handleResponse(res);
}
