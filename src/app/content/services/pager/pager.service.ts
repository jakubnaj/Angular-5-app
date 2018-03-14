import { Injectable } from "@angular/core";

import { environment } from "../../../../environments/environment";

@Injectable()
export class PagerService {
  private pageSize: number;
  constructor() {
    this.pageSize = this.getPageSize();
  }
  getPager(totalItems: number, currentPage: number = 1) {
    const totalPages = Math.ceil(totalItems / this.pageSize);
    let startPage: number, endPage: number;

    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    const startIndex = (currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize - 1, totalItems - 1);

    const pages = Array.from(
      Array(endPage + 1 - startPage),
      (_, i) => startPage + i
    );

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: this.pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  getPageSize() {
    const pageSize = Number(localStorage.getItem("pageSize"));
    if (!pageSize) {
      return environment.defaultAmountofElements;
    }
    return pageSize;
  }

  setPageSize(value: number) {
    if (!value) {
      return;
    }
    localStorage.setItem("pageSize", String(value));
    this.pageSize = value;
  }
}
