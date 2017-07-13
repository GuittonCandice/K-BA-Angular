import {Component} from '@angular/core';
import {ServersService} from '../../servers.service';

@Component({
  selector: 'servers-dashboard',
  templateUrl: './dashboard.html',
})

export class Dashboard {

  servers:any;

  constructor(private _serversService: ServersService) {
  }

  // TODO angular-async-local-storage

  ngOnInit() {
    this._serversService.getAll()
    	.subscribe(
            data => {
                this.servers = data;
            },
            error => {
                console.log(error);
            });;
	}

  /*
   *  Check if server is up/down
  */
	refresh(server) {
    if (server.loading == undefined)
      server.loading = 1;
    else
		  server.loading += 1;
		this._serversService.refresh(server._id)
    	.subscribe(
            data => {
                //server = data;
                server.isOnline = data.isOnline;
                server.loading -= 1;
            },
            error => {
                console.log(error);
                server.loading -= 1;
            });
	}

  /*
   *  Check if all servers are up/down
  */
  refreshAll() {
    this.servers.forEach( server => {
      this.refresh(server);
    });
  }

  /*
   *  Check the server version number
  */
  version(server) {
    if (server.loading == undefined)
      server.loading = 1;
    else
      server.loading += 1;
    this._serversService.version(server._id)
      .subscribe(
            data => {
                if (data.version)
                  server.version = data.version;
                server.loading -= 1;
            },
            error => {
                console.log(error);
                server.loading -= 1;
            });
  }

  /*
   *  Check all servers version number
  */
  versionAll() {
    this.servers.forEach( server => {
      this.version(server);
    });
  }

}
