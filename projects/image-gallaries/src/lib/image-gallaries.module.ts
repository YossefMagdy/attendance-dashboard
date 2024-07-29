import { NgModule } from '@angular/core';
import { ImageGallariesComponent } from './image-gallaries.component';
import { GalleryIndexComponent } from './gallery-index/gallery-index.component';
import { FileUploadModule } from 'primeng/fileupload';



@NgModule({
  declarations: [
    ImageGallariesComponent,
    GalleryIndexComponent
  ],
  imports: [
    FileUploadModule
  ],
  exports: [
    ImageGallariesComponent,


  ]
})
export class ImageGallariesModule { }
