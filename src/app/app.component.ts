//Importing the Component decorator from the Angular core library to define the AppComponent class as an Angular component
import { Component } from '@angular/core';

//Defining the AppComponent class as an Angular component using the @Component decorator. The @Component decorator takes an object as an argument that specifies the metadata for the component, such as the selector, template URL, and style URLs.
@Component({
  //The selector is the name of the HTML tag that will be used to represent this component in the HTML template. In this case, we are using 'app-root' as the selector, which means that we can use the <app-root> tag in our HTML template to include this component.
  selector: 'app-root',

  //The templateUrl specifies the path to the HTML template file for this component. The HTML template defines the structure and layout of the component's view. In this case, we are using './app.component.html' as the template URL, which means that the HTML template for this component is located in the same directory as the app.component.ts file and is named app.component.html.
  templateUrl: './app.component.html',

  //The styleUrls specifies the path to the CSS file(s) for this component. The CSS file(s) define the styles for the component's view. In this case, we are using './app.component.css' as the style URL, which means that the CSS file for this component is located in the same directory as the app.component.ts file and is named app.component.css.
  styleUrls: ['./app.component.css']
})

//Defining the AppComponent class, which is the root component of the application. The AppComponent class contains a title property that is initialized to 'appointment-app'. This title property can be used in the HTML template to display the title of the application.
export class AppComponent {
  //The title property is initialized to 'appointment-app'. This title can be used in the HTML template to display the title of the application.
  title = 'appointment-app';
}
