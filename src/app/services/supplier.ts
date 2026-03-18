import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier.interface';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private suppliers: Supplier[] = [
    { id: 1,  supplierName: 'TechCore Solutions',  location: 'Makati, Metro Manila',    email: 'techcore@email.com',    contactPerson: 'Juan Reyes',      phone: '09171234501', productsSupplied: ['Laptops', 'Monitors'],          category: 'Electronics', status: 'Active'   },
    { id: 2,  supplierName: 'GadgetHub PH',         location: 'Cebu City, Cebu',        email: 'gadgethub@email.com',   contactPerson: 'Maria Santos',    phone: '09171234502', productsSupplied: ['Phones', 'Tablets'],            category: 'Mobile',      status: 'Active'   },
    { id: 3,  supplierName: 'PeriphPlus Inc.',       location: 'Davao City, Davao',      email: 'periphplus@email.com',  contactPerson: 'Carlos Cruz',     phone: '09171234503', productsSupplied: ['Keyboards', 'Mice'],            category: 'Accessories', status: 'Active'   },
    { id: 4,  supplierName: 'AudioMax Trading',     location: 'Quezon City, NCR',       email: 'audiomax@email.com',    contactPerson: 'Ana Lim',         phone: '09171234504', productsSupplied: ['Headsets', 'Speakers'],         category: 'Audio',       status: 'Inactive' },
    { id: 5,  supplierName: 'StoragePro Corp.',     location: 'Baguio City, Benguet',   email: 'storagepro@email.com',  contactPerson: 'Ben Torres',      phone: '09171234505', productsSupplied: ['SSD', 'Hard Drives'],           category: 'Storage',     status: 'Active'   },
    { id: 6,  supplierName: 'NetLink Systems',      location: 'Iloilo City, Iloilo',    email: 'netlink@email.com',     contactPerson: 'Rosa Flores',     phone: '09171234506', productsSupplied: ['Routers', 'Switches'],          category: 'Networking',  status: 'Active'   },
    { id: 7,  supplierName: 'PowerEdge Supply',     location: 'Pasig, Metro Manila',    email: 'poweredge@email.com',   contactPerson: 'Marco Ramos',     phone: '09171234507', productsSupplied: ['UPS', 'Power Banks'],           category: 'Power',       status: 'Active'   },
    { id: 8,  supplierName: 'DisplayTech Phils.',   location: 'Taguig, Metro Manila',   email: 'displaytech@email.com', contactPerson: 'Liza Mendoza',    phone: '09171234508', productsSupplied: ['LED Monitors', '4K Displays'], category: 'Displays',    status: 'Inactive' },
    { id: 9,  supplierName: 'CoolMaster PH',        location: 'Cagayan de Oro, Misamis',email: 'coolmaster@email.com',  contactPerson: 'Tony Garcia',     phone: '09171234509', productsSupplied: ['Cooling Fans', 'Thermal Paste'],category: 'Cooling',    status: 'Active'   },
    { id: 10, supplierName: 'InputDevices Co.',     location: 'Mandaluyong, NCR',       email: 'inputdev@email.com',    contactPerson: 'Gina Villanueva', phone: '09171234510', productsSupplied: ['Webcams', 'Microphones'],       category: 'Input',       status: 'Active'   },
  ];

  getSuppliers(): Supplier[] {
    return this.suppliers;
  }

  getSupplierById(id: number): Supplier | undefined {
    return this.suppliers.find(s => s.id === id);
  }

  updateSupplier(updatedSupplier: Supplier): void {
    const index = this.suppliers.findIndex(s => s.id === updatedSupplier.id);
    if (index !== -1) {
      this.suppliers[index] = { ...updatedSupplier };
    }
  }
}