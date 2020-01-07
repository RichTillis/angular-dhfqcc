import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  users = [
    { name: "Rich", a: 1, b: 2, c: 3, d: 0 },
    { name: "Guille", a: 1, b: 2, c: 3, d: 0 },
    { name: "Tom", b: 2, c: 3, d: 0 },
    { name: "Jean", a: 1, c: 3, d: 0 },
    { name: "Sara", a: 1, b: 2, d: 0 },
    { name: "Mo", a: 1, b: 2, c: 3 },
    { name: "Simone", a: 1, b: 1, c: 2, d: 3 },
  ];
}
