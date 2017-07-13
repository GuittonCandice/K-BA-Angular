import {Component} from '@angular/core';
import {ServersService} from '../../servers.service';
import {Server} from '../../_models/server';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'servers-edit',
    templateUrl: './edit.html',
})

export class Edit {

  server = new Server();
  serverId:any;

  constructor(
    private _serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
  	//console.log(this._serversService.getAll());

    this.route.params.subscribe(params => {
      this.serverId = params['id'];
      this._serversService.getById(this.serverId)
        .subscribe(
          data => {
              this.server = data;
          },
          error => {
              console.log(error);
        });;
    });
	}

	onSubmit() {
		this._serversService.update(this.server)
    	.subscribe(
        data => {
            this.router.navigateByUrl('/pages/servers');
        },
        error => {
            console.log(error);
        });
	}

}
