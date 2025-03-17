import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrl: './entity.component.scss',
  imports: [CommonModule, RouterOutlet],
})
export class EntityComponent {
  company$!: Observable<any>;
  suburb$!: Observable<any>;
  persona$!: Observable<any>;

  type$!: Observable<any>;

  constructor(private route: ActivatedRoute) {
    this.type$ = this.route.params.pipe(
      map((params) => Object.keys(params)),
      map((arr) => arr[0])
    );

    // this.company$ = this.type$.pipe(
    //   filter(type => type === 'company'),
    //   switchMap(() => this.service...)
    // );

    // this.suburb$ = this.type$.pipe(
    //   filter(type => type === 'suburb'),
    //   switchMap(() => this.service...)
    // );

    // this.persons$ = this.type$.pipe(
    //   filter(type => type === 'suburb'),
    //   switchMap(() => this.service...)
    // );
  }
}
