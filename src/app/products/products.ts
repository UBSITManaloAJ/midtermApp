import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  showModal: boolean = false;
  selectedProduct: Product | null = null;

  products: Product[] = [
    { id: 1,  name: 'Laptop Pro 15',      category: 'Electronics', price: 1299.99, stock: 15,  status: 'Available',    brand: 'TechBrand',  rating: 4.8, discount: 10, description: 'High-performance laptop with 15-inch display.' },
    { id: 2,  name: 'Wireless Mouse',     category: 'Accessories', price: 29.99,   stock: 50,  status: 'Available',    brand: 'ClickMaster',rating: 4.5, discount: 5,  description: 'Ergonomic wireless mouse with long battery life.' },
    { id: 3,  name: 'Mechanical Keyboard',category: 'Accessories', price: 89.99,   stock: 0,   status: 'Out of Stock', brand: 'TypeFast',   rating: 4.7, discount: 0,  description: 'RGB mechanical keyboard with tactile switches.' },
    { id: 4,  name: '4K Monitor',         category: 'Electronics', price: 499.99,  stock: 8,   status: 'Limited',      brand: 'ViewMax',    rating: 4.6, discount: 15, description: '27-inch 4K UHD monitor with HDR support.' },
    { id: 5,  name: 'USB-C Hub',          category: 'Accessories', price: 49.99,   stock: 30,  status: 'Available',    brand: 'ConnectAll', rating: 4.3, discount: 0,  description: '7-in-1 USB-C hub with HDMI and SD card reader.' },
    { id: 6,  name: 'Gaming Headset',     category: 'Audio',       price: 79.99,   stock: 3,   status: 'Limited',      brand: 'SoundPro',   rating: 4.4, discount: 20, description: 'Surround sound gaming headset with mic.' },
    { id: 7,  name: 'Webcam HD',          category: 'Electronics', price: 69.99,   stock: 0,   status: 'Out of Stock', brand: 'ClearView',  rating: 4.2, discount: 0,  description: '1080p HD webcam with built-in microphone.' },
    { id: 8,  name: 'External SSD 1TB',   category: 'Storage',     price: 119.99,  stock: 20,  status: 'Available',    brand: 'SpeedDrive', rating: 4.9, discount: 8,  description: 'Portable SSD with 1TB storage and fast transfer.' },
    { id: 9,  name: 'Laptop Stand',       category: 'Accessories', price: 39.99,   stock: 5,   status: 'Limited',      brand: 'ErgoPro',    rating: 4.1, discount: 0,  description: 'Adjustable aluminum laptop stand for ergonomics.' },
    { id: 10, name: 'Smart Speaker',      category: 'Audio',       price: 59.99,   stock: 12,  status: 'Available',    brand: 'EchoTech',   rating: 4.6, discount: 12, description: 'Voice-controlled smart speaker with HD audio.' },
  ];

  viewProductDetails(product: Product): void {
    this.selectedProduct = product;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedProduct = null;
  }
}