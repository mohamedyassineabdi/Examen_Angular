import { Component, Input } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  standalone: true,
  selector: 'app-head-bar',
  templateUrl: './head-bar.html',
  styleUrls: ['./head-bar.css']
})
export class HeadBar {
  @Input() title = "la bibliothèque de l’IHEC";
  constructor(private wishlist: WishlistService) {}

  toggleWishlist() { this.wishlist.togglePanel(); }
}
