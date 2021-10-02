import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
    .online {
      color: white; 
    }
  `]
})
export class ServersComponent implements OnInit { 
    allowNewServer: boolean = false; 
    createServer: string = "No server was created!"; 
    serverName: string = "Server 5050"; 
    username: string = "rayenmehrez77"; 
    serverId: number = 10; 
    serverStatus: string = "offline"; 

    constructor() {
      this.serverStatus = Math.random() > 0.5 ? "online" : "offline"; 
    } 

    onCreateServer() {
      this.createServer = "Server was created ! Name is " + this.serverName;
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value; 
    }

    allowClicked() {
       if(this.username !== "") {
         return false; 
       } 
       return true 
    }

    reset() {
      this.username = ""; 
    }

    getServerStatus() {
      return this.serverStatus;
    }

    getColor() {
      return this.serverStatus === "online" ? "green" : "red"; 
    }

    ngOnInit() {

    }
}
