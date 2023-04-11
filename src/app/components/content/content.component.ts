import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from 'src/app/services/trending.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  content: any;

  constructor(
    private service: TrendingService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((res) => {
      console.log(res.get('id'))
      this.service.getContentById(res.get('id')).subscribe((res) => {
        this.content = res;
      })
    })
  }
}
