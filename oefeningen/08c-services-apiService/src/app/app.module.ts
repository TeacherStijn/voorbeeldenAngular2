// Angular Modules
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

// Custom Components
import {AppComponent} from './app.component';

// Import services
import {CityService} from "./shared/services/city.service";
import { ApiService } from './shared/services/api.service';

// Module declaration
@NgModule({
	imports     : [BrowserModule, HttpModule, FormsModule],
	declarations: [AppComponent],
	bootstrap   : [AppComponent],
	providers   : [CityService, ApiService] // DI voor service
})
export class AppModule {
}


