import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">{{titol}}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" routerLink="/users" routerLinkActive="active">Users </a>
        <a class="nav-item nav-link" routerLink="/contaminants" routerLinkActive="active">Contaminants</a>
        
      </div>
    </div>
  </nav>
    <router-outlet></router-outlet>
  `
})
export class routeComponent {
  titol = 'SIGE';
}