import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  email = "m";
  password = "m";
  constructor(private router: Router) {}

  login() {
    const login = {
      email: this.email,
      password: this.password
    };
    const loginBase64 = btoa(JSON.stringify(login));
    // this.router.navigate(["token", loginBase64]);
    const redirect = `${window.location.origin}/token/${loginBase64}`;
    window.location.href = redirect;
  }
}
