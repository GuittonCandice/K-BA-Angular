import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Server } from './_models/index';

@Injectable()
export class ServersService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('http://localhost:4040/api/servers', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('http://localhost:4040/api/servers/' + id, this.jwt()).map((response: Response) => response.json());
    }

    refresh(id: string) {
        return this.http.get('http://localhost:4040/api/servers/refresh/' + id, this.jwt()).map((response: Response) => response.json());
    }

    version(id: string) {
        return this.http.get('http://localhost:4040/api/servers/version/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(server: Server) {
        return this.http.post('http://localhost:4040/api/servers', server, this.jwt()).map((response: Response) => response.json());
    }

    update(server: Server) {
        return this.http.put('http://localhost:4040/api/servers/' + server._id, server, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/servers/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}