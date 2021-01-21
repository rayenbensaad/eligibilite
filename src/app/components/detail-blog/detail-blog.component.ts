import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.css']
})
export class DetailBlogComponent implements OnInit {

  currentArticle = null;
  message = '';

  constructor(
    private articleService: BlogService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
      this.message = '';
      this.getTutorial(this.route.snapshot.paramMap.get('id'));
    }
  
    getTutorial(id) {
      this.articleService.get(id)
        .subscribe(
          data => {
            this.currentArticle = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }

}
