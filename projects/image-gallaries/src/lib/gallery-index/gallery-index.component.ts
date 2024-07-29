import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { environment } from 'src/environments/environment';
import { ADD_PRODUCTPHOTOS_QUERY } from '../../domain/services/categories.queries';
import { GenericService } from '../../domain/services/generic.service';
import { GraphQLService } from '../../domain/services/graphql.service';

@Component({
  selector: 'lib-gallery-index',
  templateUrl: './gallery-index.component.html',
  styleUrls: ['./gallery-index.component.css']
})
export class GalleryIndexComponent {

    GrUrl = environment.ApiEndPoint;
  imageName?: string;
  photos: any;
  obj: any;
  loading?: boolean;
  uploadedFiles: any[] = [];

  constructor(
    private genericService: GenericService,
    private graphService: GraphQLService,
    private http: HttpClient,
    public NZmodalService: NzModalService,
    private graphQuery: GraphQLService
  ) {}

  ngOnInit() {}
  productObject(product:any) {
    this.obj = product;
    this.photos = this.obj.products_photos;
  }

  onUpload(event:any, fileUpload:any) {
    for (let [index, file] of event.files.entries()) {
      const formData = new FormData();
      formData.append("query", ADD_PRODUCTPHOTOS_QUERY);
      formData.append(
        "variables",
        JSON.stringify({ photoKey: "photo", product_id: this.obj.id })
      );
      formData.append("photo", file);
  
    }
    fileUpload.clear();
  }
  route() {
    this.NZmodalService.closeAll();
  }
 
}


