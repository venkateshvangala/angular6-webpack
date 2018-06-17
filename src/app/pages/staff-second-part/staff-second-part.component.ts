import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./staff-second-part.component.html"
})
export class StaffSecondPartComponent implements OnInit {

  private dropDowns: any = null;
  private secondDropDown: any = null;
  private morethanyearDropdown: any = null;

  ngOnInit() {
    console.log("Init message component.");
    this.inItDropDowns();
  }

  inItDropDowns() {
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
    this.dropDowns = $("#category").selectize(
      selectizeOptions
    )[0].selectize;
    this.dropDowns.addOption([
      { id: "1", name: "one"}, { id: "2", name: "two"}, { id: "3", name: "three"}
    ]);
    this.secondDropDown = $("#secondDropDown").selectize(
      selectizeOptions
    )[0].selectize;
    this.secondDropDown.addOption([
      { id: "1", name: "one"}, { id: "2", name: "two"}, { id: "3", name: "three"}
    ]);

    this.morethanyearDropdown = $("#morethanyear").selectize(
      selectizeOptions
    )[0].selectize;
    this.morethanyearDropdown.addOption([
      { id: "1", name: "one"}, { id: "2", name: "two"}, { id: "3", name: "three"}
    ]);
  }
}
