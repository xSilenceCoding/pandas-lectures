import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  lecturesNavbar = document.getElementById("fc-lectures-navbar");

  ngOnInit(): void {
    //TOP NAVIGATION
    window.onscroll = function () {
      scrollFunction();

      function scrollFunction() {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          document.getElementById("myTopnav").style.width = "100%";
          document.getElementById("myTopnav").style.backgroundColor =
            "rgba(27, 18, 18, 1)";
          document.getElementById("header").style.position = "fixed";
          document.getElementById("header").style.top = "0%";
        } else {
          document.getElementById("myTopnav").style.width = "80%";
          document.getElementById("myTopnav").style.backgroundColor =
            "rgba(1, 1, 1, 0.6)";
          document.getElementById("header").style.position = "fixed";
          document.getElementById("header").style.top = "2rem";
        }
      }
    };
  }

  navBar() {
    var x = document.getElementById("myTopnav");
    const lecturesNavbar = document.getElementById("fc-lectures-navbar");

    if (x.className === "topnav") {
      x.className += " responsive";
      lecturesNavbar.setAttribute("style", "display:none");
    } else {
      x.className = "topnav";
      lecturesNavbar.setAttribute("style", "display:block");
    }
  }

  closeNavAfterNavigation() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
}
