import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  loading: boolean = true;
  album: any = {};
  empty: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute){
  }

  ngOnInit(): void {
    //Accessing the router state
    // const navigation = this.router.getCurrentNavigation();
    // if(navigation?.extras?.state){
    //   const albumId = navigation?.extras?.state['id'];
    //   this.album = navigation?.extras?.state['album'];

    //   //Todo: better condition
    //   this.empty = false;

    //   console.log(this.album);

    //   //Accessing query parameters
    //   this.activatedRoute.queryParams.subscribe(params => {
    //     const albumName = params['album']
    //   })
    // }
  }

}
