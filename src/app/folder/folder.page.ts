import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-folder",
  templateUrl: "./folder.page.html",
  styleUrls: ["./folder.page.scss"]
})
export class FolderPage implements OnInit {
  public folder: string;
  private clickCount = 0;
  private lastClickTime = 0;
  private CLICK_THRESHOLD = 1500;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get("id");
  }

  tripleTap() {
      const now = Date.now();
      this.clickCount++;
      if (this.clickCount === 3) {
          setTimeout(() => {
              if (this.clickCount === 3) {
                  console.log("triple tap")
              }
          },1000);

      } else if (this.clickCount > 3) {
          this.clickCount = 0;
      }

      this.lastClickTime = now;

      setTimeout(() => {
          if (Math.abs(Date.now() - this.lastClickTime) >= this.CLICK_THRESHOLD) {
              this.clickCount = 0;
          }
      },2000);
  }
}
