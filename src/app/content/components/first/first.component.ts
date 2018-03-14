import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Post } from "../../models/post";
import { HttpErrorResponse } from "@angular/common/http";
import { JsonPlaceholderService } from "../../services/json-placeholder/json-placeholder.service";
import { PagerService } from "../../services/pager/pager.service";
import { DataManipulationService } from "../../services/data-manipulation/data-manipulation.service";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.scss"]
})
export class FirstComponent implements OnInit {
  @ViewChild("changePageSize") pageSize: ElementRef;
  private posts: Array<Post>;
  private displayedPosts: Array<Post>;
  private filteredArray: Array<Post>;
  private userIds: Array<Number>;
  private pager: any = {};
  private error: HttpErrorResponse;

  constructor(
    private jsonPlaceholderService: JsonPlaceholderService,
    private pagerService: PagerService,
    private dataManipulationService: DataManipulationService
  ) {}

  ngOnInit() {
    this.jsonPlaceholderService.getPosts().subscribe(
      data => {
        this.posts = data;
      },
      (err: HttpErrorResponse) => {
        this.error = err;
      },
      () => {
        this.setPage(1, this.posts);
        this.getUserIds();
      }
    );
  }
  setPage(page: number, items?: Array<Post>) {
    const currArray: Array<Post> = items
      ? items
      : this.filteredArray ? this.filteredArray : this.posts;

    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.pagerService.getPager(currArray.length, page);
    this.displayedPosts = currArray.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }
  setPageSize() {
    this.pagerService.setPageSize(Number(this.pageSize.nativeElement.value));
    this.setPage(1);
  }
  
  getUserIds() {
    this.userIds = Array.from(new Set(this.posts.map(item => item.userId)));
  }

  filterbyUser(value: String) {
    this.filteredArray = this.dataManipulationService.filterbyUser(
      value,
      this.posts
    );
    if (!this.filteredArray) {
      this.setPage(1, this.posts);
      return;
    }
    this.setPage(1, this.filteredArray);
  }

  sortBy(value: string) {
    if (this.filteredArray) {
      this.filteredArray= this.dataManipulationService.sortBy(value, this.filteredArray);
    } else {
      this.posts= this.dataManipulationService.sortBy(value, this.posts);
    }
    this.setPage(1);
  }
}
