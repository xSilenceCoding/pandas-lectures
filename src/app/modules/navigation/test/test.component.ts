import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  setToggleContent() {
    const trigger = document.querySelector(".trigger a");
    const classadd = document.querySelector(".site");
    const maincontent = document.querySelector(".main-content");
    trigger.addEventListener("click", function () {
      classadd.classList.toggle("mininav");
      maincontent.classList.toggle("mini-main-content");
    });

    // const submenu1 = document.querySelector('.has-child1');
    // submenu1.addEventListener('click', function () {
    //   submenu1.classList.toggle('collapse');
    // });
  }

  // opens navigation if click on nested menu
  openNav() {
    const classadd = document.querySelector(".site");
    const maincontent = document.querySelector(".main-content");

    if (classadd.classList.contains("mininav")) {
      classadd.classList.toggle("mininav");
      maincontent.classList.toggle("mini-main-content");
    }
  }
}
