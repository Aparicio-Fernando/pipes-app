import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navBar.html',
})
export class NavBar {
  routes = routes.map(route =>({
    title: route.title ?? '',
    path: route.path ?? ''
  }))
}
