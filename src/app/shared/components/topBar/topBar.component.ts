import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { selectCurrentUser } from 'src/app/auth/store/reducers';

@Component({
  selector: 'mc-top-bar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class TopBarComponent {
  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser),
  });

  constructor(private store: Store) {}
}
