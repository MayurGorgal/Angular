import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 
  //to write inline code write it in backcot
  template: `
               <div style="text-align:center">
                 <h1>
                     Marvellous Infosystems
                 </h1>
                 <h2>
                     Educating For Better Tomorrow
                 </h2>
              </div> 
              
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
