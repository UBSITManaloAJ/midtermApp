import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Supplier } from '../../models/supplier.interface';
import { SupplierService } from '../../services/supplier';

@Component({
  selector: 'app-supplier-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './supplier-details.html',
  styleUrl: './supplier-details.css'
})
export class SupplierDetailsComponent implements OnInit, OnDestroy {

  supplier: Supplier | undefined;
  saveSuccess = false;
  private sub: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supplierService: SupplierService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.supplier = this.supplierService.getSupplierById(id);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  saveChanges(): void {
    if (!this.supplier) return;
    this.supplierService.updateSupplier(this.supplier);
    this.saveSuccess = true;
    setTimeout(() => this.saveSuccess = false, 3000);
  }

  goBack(): void {
    this.router.navigate(['/suppliers']);
  }
}