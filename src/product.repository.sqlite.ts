import { Injectable } from '@nestjs/common';
import * as sqlite3 from 'sqlite3';
import { IProductRepository } from './product.repository';
import { Product } from './type';

@Injectable()
export class ProductServiceSQLite implements IProductRepository {
  private readonly db = new sqlite3.Database('data.db');

  constructor() {
    this.db.serialize(() => {
      this.db.run(
        'CREATE TABLE IF NOT EXISTS products (id INTEGER AUTO_INCREMENT PRIMARY KEY, name TEXT, price INTEGER)',
      );
    });
  }

  getProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM products', (err, rows: Product[]) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  }

  createProduct(product: Product): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.run(
        `INSERT INTO products (name, price) VALUES ("${product.name}", ${product.price})`,
        (err) => {
          if (err) {
            reject(err);
          }
          resolve();
        },
      );
    });
  }

  getProduct(id: number): Promise<Product> {
    return new Promise((resolve, reject) => {
      this.db.get(
        `SELECT * FROM products WHERE id = ${id}`,
        (err, row: Product) => {
          if (err) {
            reject(err);
          }
          resolve(row);
        },
      );
    });
  }
}
