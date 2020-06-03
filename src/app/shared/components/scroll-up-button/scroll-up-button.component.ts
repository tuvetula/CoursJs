import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-scroll-up-button',
  templateUrl: './scroll-up-button.component.html',
  styleUrls: ['./scroll-up-button.component.css']
})
export class ScrollUpButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("body").prepend('<a href="#" class="back-to-top">Back to Top</a>');
    let amountScrolled = 130;
    $(window).scroll(function () {
      if ($(window).scrollTop() > amountScrolled) {
        $("a.back-to-top").fadeIn("slow");
      } else {
        $("a.back-to-top").fadeOut("slow");
      }
    });
    $("a.back-to-top, a.simple-back-to-top").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        500
      );
      return false;
    });
  }
}
