import {Component} from '@angular/core';
import {ServersService} from '../../servers.service';
import {Server} from '../../_models/server';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'servers-create',
    templateUrl: './create.html',
})

export class Create {

  server = new Server();

  constructor(
    private _serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
  	//console.log(this._serversService.getAll());
	}

	onSubmit() {
		this._serversService.create(this.server)
    	.subscribe(
        data => {
            this.router.navigateByUrl('/pages/servers');
        },
        error => {
            console.log(error);
        });
	}

}
