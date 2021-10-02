import { Component } from "@angular/core"; 

@Component({
    selector: "app-server", 
    templateUrl: "./server.component.html"
}) 

export class ServerComponent {
    secretText = "Tuna"; 

    onCreate() {
        this.secretText = ""; 
    }
}