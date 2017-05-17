import{ Component } from 'angular2/core';
import{ StudentFormComponent } from "./student-form-component";

@Component(
  {
    selector: "my-app",
    template: "<student-form></student-form>",
    directives: [StudentFormComponent]
  }
)
export class AppComponent {
}
