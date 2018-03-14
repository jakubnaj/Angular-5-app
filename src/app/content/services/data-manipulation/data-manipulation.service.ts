import { Injectable } from "@angular/core";

import { Post } from "../../models/post";

@Injectable()
export class DataManipulationService {
  constructor() {}

  filterbyUser(value: String, arr: Array<Post>): Array<Post> {
    if (value === "All") {
      return null;
    }
    return arr.filter(item => {
      return item.userId === Number(value);
    });
  }

  sortBy(value: string, arr: Array<Post>): Array<Post> {
    if (value === "asc") {
      return this.sortAsc(arr);
    } else {
      return this.sortDesc(arr);
    }
  }

  private sortAsc(arr: Array<Post>) {
    return arr.sort((a, b) => {
      return a.id - b.id;
    });
  }

  private sortDesc(arr: Array<Post>) {
    return arr.sort((a, b) => {
      return b.id - a.id;
    });
  }
}
