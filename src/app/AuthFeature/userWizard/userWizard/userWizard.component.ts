import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { GenericService } from "src/core/services/generic/generic.service";
import { SuppliersService } from "src/core/services/suppliers/suppliers.service";
import { BranchesService } from "src/core/services/branches/branches.service";
import { Iinputs } from "src/core/shared/generic-filter/Interfaces/inputInterface";
import { GraphQLService } from "src/core/services/graph/graphql.service";
import {
  userWizar,
  userWizard_DATA_QUERY,
} from "../queries/userWizard.queries";

@Component({
  selector: "app-userWizard-index",
  templateUrl: "./userWizard.component.html",
  styleUrls: ["./userWizard.component.css"],
})
export class userWizardComponent implements OnInit {
  form: FormGroup;
  data: any;
  heads = ["#", "الاسم", "الاسم بالانجليزي", "اللون", "Action"];
  page: number = 1;
  limit: number = 10;
  loading: boolean;
  URL = environment.photoPath;
  canLoadMore: boolean = true;
  selectedImage: string;
  previewImage: boolean;
  hide = true;
  branches: any;
  resturant_id = JSON.parse(localStorage.getItem("user"))?.restaurants?.id;
  branchID: any;
  filterData: string = "";
  filterInputs: Iinputs[] = [
    {
      type: "date",
      name: "date_from",
      placeholder: "تاريخ من",
    },
    {
      type: "date",
      name: "date_to",
      placeholder: "تاريخ الى",
    },

    {
      type: "text",
      name: "name",
      placeholder: "الاسم",
    },
    {
      type: "text",
      name: "address",
      placeholder: "العنوان",
    },
    {
      type: "text",
      name: "phone",
      placeholder: "رقم الموبايل",
    },
  ];
  count: any = 0;

  constructor(private graphQLService: GraphQLService) {}

  ngOnInit() {
    this.get();
  }

  get() {
    this.graphQLService.query(userWizard_DATA_QUERY, {}).subscribe({
      next: (response: any) => {
        this.data = response.data.userWizard;
        for (let index = 0; index < this.data?.length; index++) {
          if (this.data[index].is_done) {
            this.count++;
          }
        }
        this.count = (this.count / this.data?.length) * 100;
       },
    });
  }
}
