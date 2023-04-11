import { Component } from '@angular/core';
import { TrendingService } from 'src/app/services/trending.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent {

  trendings:any;

  constructor(private service: TrendingService) {
    this.service.getTrending().subscribe((res)=>{
      this.trendings = res
    })
   }


}
