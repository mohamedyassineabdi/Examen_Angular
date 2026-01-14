import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  standalone: true,
  selector: 'app-wishlist-panel',
  templateUrl: './wishlist-panel.html',
  styleUrls: ['./wishlist-panel.css'],
  imports: [CommonModule, RouterModule]
})
export class WishlistPanel {
  constructor(public wishlist: WishlistService) {}

  close() { this.wishlist.closePanel(); }
}
