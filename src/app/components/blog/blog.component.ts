import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articles: any;
  currentArticle = null;
  currentIndex = -1;
  subject = '';


  page = 1;
  count = 0;
  pageSize = 4;
  pageSizes = [4, 8, 12];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.retrieveArticles();
  }
  getRequestParams(page, pageSize): any {
    // tslint:disable-next-line:prefer-const
    let params = {};

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  handlePageChange(event): void {
    this.page = event;
    this.retrieveArticles();
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveArticles();
  }

  retrieveArticles() {
    this.blogService.getAll()
      .subscribe(
        data => {
          this.articles = data;
          //console.log(data);
        },
        error => {
          //console.log(error);
        });
  } 

}
