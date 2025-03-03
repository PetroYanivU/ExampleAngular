import {Component} from '@angular/core';
import {UpPageComponent} from "./uppage/uppage.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MapComponent} from "./map/map.component";
import {GrafAComponent} from "./graf-a/graf-a.component";
import {GrafbComponent} from "./grafb/grafb.component";
import {GrafcComponent} from "./grafc/grafc.component";
import {StrafickGrafComponent} from "./strafick-graf/strafick-graf.component";
import {HttpClientModule} from "@angular/common/http";
import {GoogleGrafComponent} from "./google-graf/google-graf.component";
import {StrafickinfoComponent} from "./strafickinfo/strafickinfo.component";
import {SelAComponent} from "./sel-a/sel-a.component";
import {SelBComponent} from "./sel-b/sel-b.component";
import {SelCComponent} from "./sel-c/sel-c.component";
import {SelDComponent} from "./sel-d/sel-d.component";
import {SelEComponent} from "./sel-e/sel-e.component";
import {SelFComponent} from "./sel-f/sel-f.component";
import {ProfilComponent} from "./profil/profil.component";
import {TodoComponent} from "./todo/todo.component";
import {MessagComponent} from "./messag/messag.component";
import {DownpageComponent} from "./downpage/downpage.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {ApppageComponent} from "./apppage/apppage.component";
import {NgIf} from "@angular/common";


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    NgIf,
    UpPageComponent,
    SidebarComponent,
    MapComponent,
    GrafAComponent,
    GrafbComponent,
    GrafcComponent,
    StrafickGrafComponent,
    GoogleGrafComponent,
    StrafickinfoComponent,
    SelAComponent,
    SelBComponent,
    SelCComponent,
    SelDComponent,
    SelEComponent,
    SelFComponent,
    ProfilComponent,
    TodoComponent,
    MessagComponent,
    DownpageComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ApppageComponent,

  ]
})

export class AppComponent {
  title = 'appmodule';
  ngOnInit() {

  }
  constructor() {
   window.localStorage.setItem('authed','1')
  }

  showlink: boolean =true;

  UpdateShowLink(t:boolean){

    this.showlink = t;

  }

    protected readonly window = window;
}
