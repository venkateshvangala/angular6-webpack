import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import * as _ from "underscore";
import { UserService } from "../../services/user.service";
const innerChildTmpl = require("./inner-child.template.html");

@Component({
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  private userService: any;
  private incentiveTypeSelectize = null;

  constructor(service: UserService) {
    this.userService = service;
  }

  ngOnInit() {
    this.userService.getUser().subscribe(
      user => {
        this.initIncentiveTypesDropDown();
        this.initIncentiveTypesTable();
      },
      error => {
        console.log(`error in getUser(): ${error}`);
      }
    );
  }

  initIncentiveTypesDropDown() {
    let selectizeOptions = {
      maxItems: 1,
      labelField: "name",
      valueField: "id",
      sortField: "name",
      openOnFocus: true,
      selectOnTab: false,
      searchField: ["name"],
      preload: true
    };
    this.incentiveTypeSelectize = $("#incentiveTypeId").selectize(
      selectizeOptions
    )[0].selectize;
    this.incentiveTypeSelectize.addOption(this.userService.user);
  }

  initIncentiveTypesTable() {
    var self = this;
    var table = $("#example").DataTable({
      paging: false,
      searching: false,
      order: [],
      responsive: true,
      info: false,
      data: this.userService.user,
      columns: [
        {
          className: "details-control",
          data: null,
          orderable: false,
          defaultContent: ""
        },
        { data: "name" },
        { data: "email" },
        { data: "phone" },
        { data: "website" },
        { data: "name" },
        { data: "email" },
        { data: "phone" },
        {
          data: "website",
          render: function(val, _, obj) {
            return `<button type="button" class="btn btn-outline-info">Apply</button>`;
          }
        }
      ]
    });
    $("#example tbody").on("click", "td.details-control", function() {
      var tr = $(this).closest("tr");
      var row = table.row(tr);
      if (row.child.isShown()) {
        row.child.hide();
        tr.removeClass("shown");
      } else {
        row.child(self.format(row.data())).show();
        tr.addClass("shown");
      }
    });
  }

  format(data) {
    const sampleData = [
      {
        period: "01/01/2017 to 31/03/2017",
        months: "3",
        eligiableArea: "70,000 Sq Ft",
        reqAmount: "Rs : 1400000/-",
        status: "approved",
        subStatus: "completed",
        pending: true
      },
      {
        period: "01/01/2017 to 31/03/2017",
        months: "3",
        eligiableArea: "70,000 Sq Ft",
        reqAmount: "Rs : 1400000/-",
        status: "inprogress",
        subStatus: "completed",
        pending: false
      }
    ]
    return _.template(innerChildTmpl)({ data: sampleData });
  }
}
