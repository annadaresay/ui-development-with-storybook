import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import ButtonComponent from './components/button/button.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, TaskComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
