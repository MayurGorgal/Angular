import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
              <div style="text-align:center">
  
                         Marvellous Infosystem:
                         <input type="text">

              </div>
`,
  styles: [`
  input[type=text]
  {
     
    background-color:blue;
 }
 `]
})
export class AppComponent {
  title = 'app';
}
