import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product.interface';
import { ProductService } from '../services/productService';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {

  private svc = inject(ProductService);

  // signals
  displayedProducts = signal<Product[]>([]);
  searchQuery       = signal('');

  // add form
  showAddForm   = false;
  addSuccess    = false;
  newProduct: Product = this.emptyProduct();

  // search by ID
  searchId: number | null = null;
  foundProduct: Product | null = null;
  editProduct: Product | null  = null;
  updateSuccess = false;

  // session
  isLoggedIn = false;

  ngOnInit(): void {
    this.displayedProducts.set(this.svc.getProducts());
    this.isLoggedIn = this.svc.isAuthenticated();
  }

  // ── Search ───────────────────────────────────────────
  onSearch(e: Event): void {
    const q = (e.target as HTMLInputElement).value;
    this.searchQuery.set(q);
    this.displayedProducts.set(
      q.trim() === '' ? this.svc.getProducts() : this.svc.search(q)
    );
  }

  // ── Get by ID ────────────────────────────────────────
  searchProduct(): void {
    if (this.searchId === null) return;
    this.foundProduct = this.svc.getProductById(this.searchId) ?? null;
    if (this.foundProduct) {
      this.editProduct = { ...this.foundProduct };
    }
  }

  // ── Add ──────────────────────────────────────────────
  toggleAddForm(): void { this.showAddForm = !this.showAddForm; }

  saveNewProduct(): void {
    this.newProduct.id = Date.now();
    this.svc.addProduct({ ...this.newProduct });
    this.displayedProducts.set(this.svc.getProducts());
    this.newProduct = this.emptyProduct();
    this.showAddForm = false;
    this.addSuccess = true;
    setTimeout(() => this.addSuccess = false, 3000);
  }

  // ── Update ───────────────────────────────────────────
  saveUpdate(): void {
    if (!this.editProduct) return;
    this.svc.updateProduct(this.editProduct);
    this.displayedProducts.set(this.svc.getProducts());
    this.updateSuccess = true;
    setTimeout(() => this.updateSuccess = false, 3000);
  }

  // ── Delete ───────────────────────────────────────────
  deleteProduct(id: number): void {
    if (!confirm('Delete this product?')) return;
    this.svc.deleteProduct(id);
    this.displayedProducts.set(this.svc.getProducts());
  }

  // ── Session ──────────────────────────────────────────
  login():  void { this.svc.login();  this.isLoggedIn = true;  }
  logout(): void { this.svc.logout(); this.isLoggedIn = false; }

  private emptyProduct(): Product {
    return { id: 0, name: '', category: '', price: 0, stock: 0,
             status: 'Available', brand: '', rating: 0, discount: 0, description: '' };
  }
}