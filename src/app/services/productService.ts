import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products = signal<Product[]>([
    { id: 1,  name: 'Elden Ring',            category: 'RPG',      price: 2499.00, stock: 30, status: 'Available',    brand: 'FromSoftware',   rating: 4.9, discount: 0,  description: 'Open-world action RPG with brutal combat and deep lore.' },
    { id: 2,  name: 'God of War Ragnarok',   category: 'Action',   price: 2999.00, stock: 20, status: 'Available',    brand: 'Santa Monica',   rating: 4.9, discount: 10, description: 'Epic Norse mythology adventure with Kratos and Atreus.' },
    { id: 3,  name: 'Cyberpunk 2077',        category: 'RPG',      price: 1999.00, stock: 0,  status: 'Out of Stock', brand: 'CD Projekt Red',  rating: 4.5, discount: 0,  description: 'Futuristic open-world RPG set in Night City.' },
    { id: 4,  name: 'Hogwarts Legacy',       category: 'Adventure',price: 2799.00, stock: 5,  status: 'Limited',      brand: 'Avalanche',      rating: 4.6, discount: 15, description: 'Explore the Wizarding World in this open-world RPG.' },
    { id: 5,  name: 'Spider-Man 2',          category: 'Action',   price: 3499.00, stock: 0,  status: 'Out of Stock', brand: 'Insomniac',      rating: 4.8, discount: 0,  description: 'Swing through New York as Peter Parker and Miles Morales.' },
    { id: 6,  name: 'Baldurs Gate 3',        category: 'RPG',      price: 2999.00, stock: 12, status: 'Available',    brand: 'Larian Studios', rating: 5.0, discount: 0,  description: 'Award-winning turn-based RPG with endless choices.' },
    { id: 7,  name: 'Starfield',             category: 'RPG',      price: 2499.00, stock: 3,  status: 'Limited',      brand: 'Bethesda',       rating: 4.1, discount: 20, description: 'Space exploration RPG with over 1000 planets to discover.' },
    { id: 8,  name: 'The Last of Us Part I', category: 'Survival', price: 2299.00, stock: 25, status: 'Available',    brand: 'Naughty Dog',    rating: 4.8, discount: 5,  description: 'Emotional post-apocalyptic survival story.' },
    { id: 9,  name: 'Forza Horizon 5',       category: 'Racing',   price: 1999.00, stock: 8,  status: 'Limited',      brand: 'Playground',     rating: 4.7, discount: 10, description: 'Open-world racing game set in vibrant Mexico.' },
    { id: 10, name: 'Call of Duty MW3',      category: 'FPS',      price: 3299.00, stock: 40, status: 'Available',    brand: 'Activision',     rating: 4.2, discount: 0,  description: 'Fast-paced modern warfare first-person shooter.' },
  ]);

  // ── getAll ──────────────────────────────────────────
  getProducts(): Product[] {
    return this.products();
  }

  // ── getById ─────────────────────────────────────────
  getProductById(id: number): Product | undefined {
    return this.products().find(p => p.id === id);
  }

  // ── search ──────────────────────────────────────────
  search(query: string): Product[] {
    return this.products().filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
    );
  }

  // ── add ─────────────────────────────────────────────
  addProduct(product: Product): void {
    this.products.update(list => [...list, product]);
  }

  // ── edit/update ──────────────────────────────────────
  updateProduct(updated: Product): void {
    this.products.update(list =>
      list.map(p => p.id === updated.id ? updated : p)
    );
  }

  // ── delete ───────────────────────────────────────────
  deleteProduct(id: number): void {
    this.products.update(list => list.filter(p => p.id !== id));
  }

  // ── session auth ─────────────────────────────────────
  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('auth-token');
  }

  login(): void  { sessionStorage.setItem('auth_token', 'demo-token'); }
  logout(): void { sessionStorage.removeItem('auth_token'); }
}