import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxDocumentScannerModule } from 'ngx-web-document-scanner';
import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  declarations: [AppComponent, TestComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDocumentScannerModule.forRoot({
      licenseKey: 'not present',
      resourcePath: 'assets/dynamic-web-twain',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
