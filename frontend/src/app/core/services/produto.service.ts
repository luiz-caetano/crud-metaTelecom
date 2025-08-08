import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Produto {
  id?: number;
  nome: string;
  precoUnitario: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private baseUrl = 'http://localhost:8080/Produtos';

  constructor(private http: HttpClient) {}

  criarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.baseUrl}/criar`, produto);
  }

  listarProdutos(): Observable<Produto[]> {
    return this.http.post<Produto[]>(`${this.baseUrl}/listar`, {}); // seu endpoint é POST listar
  }

  deletarProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete?id=${id}`);
  }
}
