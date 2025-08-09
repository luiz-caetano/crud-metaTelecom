import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private baseUrl = 'http://localhost:8080/produtos';

  constructor(private http: HttpClient) {}

  criarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.baseUrl}/criar`, produto);
  }

  listarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseUrl}/listar`, {});
  }

  deletarProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete?id=${id}`);
  }

  atualizarProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.baseUrl}/atualizar`, produto);
  }
}
