import { Component } from '@angular/core';
import { TrendingService } from 'src/app/services/trending.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  trendings:any;

  constructor(private _service: TrendingService) {
    this._service.getTrending().subscribe((res)=>{
      this.trendings = res
    })
   }
}
