import { Component, OnInit } from '@angular/core';

import { NgxDocumentScannerService } from 'ngx-web-document-scanner';

@Component({
  selector: 'app-test-component',
  template: `
    <div id="container">
      <div id="dwtcontrolContainer"></div>
    </div>

    <ngx-scanner-capture
      [useLocalService]="true"
      [containerId]="'dwtcontrolContainer'"
      [width]="'600px'"
      [height]="'600px'"
    ></ngx-scanner-capture>
  `,
})
export class TestComponentComponent implements OnInit {
  constructor(private DocumentScannerService: NgxDocumentScannerService) {}

  ngOnInit(): void {}
}
