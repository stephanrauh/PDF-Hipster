import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PdfhipsterSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  imports: [
	  PdfhipsterSharedModule,
	  RouterModule.forChild([HOME_ROUTE]),
	  NgxExtendedPdfViewerModule
  ],
  declarations: [HomeComponent]
})
export class PdfhipsterHomeModule {}
