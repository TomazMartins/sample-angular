import{ Component } from "angular2/core";
import{ Student } from "./models/student";
import{ Course } from "./models/course";

@Component (
  {
    selector: "student-form",
    templateUrl: "app/views/form.html"
  }
)
export class StudentFormComponent {
  isSuccess:boolean;

  public student:Student;
  public courses:Course[];

  constructor() {
    this.courses = [
      new Course( "cpp", "C++" ),
      new Course( "java", "Java" ),
      new Course( "android", "Android" ),
      new Course( "rubyonrails", "Ruby On Rails" ),
      new Course( "angular2", "Angular 2" )
    ]

    isSuccess = false;
  }

  onSubmit() {
    this.isSuccess = true;
  }

  debug():string {
    return JSON.stringify( this.student );
  }
}
