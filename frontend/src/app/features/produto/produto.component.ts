import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoService } from '../../core/services/produto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produto.html',
  styleUrls: ['./produto.css']
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[] = [];
  novoProduto: Produto = { nome: '', valor_unitario: 0 };

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.listarProdutos().subscribe({
      next: (produtos) => this.produtos = produtos,
      error: (err) => console.error('Erro ao carregar produtos', err)
    });
  }

  adicionarProduto(): void {
    if (!this.novoProduto.nome || this.novoProduto.valor_unitario <= 0) {
      alert('Preencha nome e preço válido!');
      return;
    }
    this.produtoService.criarProduto(this.novoProduto).subscribe({
      next: (produto) => {
        this.produtos.push(produto);
        this.novoProduto = { nome: '', valor_unitario: 0 };
      },
      error: (err) => console.error('Erro ao adicionar produto', err)
    });
  }

  deletarProduto(id?: number): void {
    if (!id) return;
    if (!confirm('Tem certeza que deseja deletar este produto?')) return;

    this.produtoService.deletarProduto(id).subscribe({
      next: () => {
        this.produtos = this.produtos.filter(p => p.id !== id);
      },
      error: (err) => console.error('Erro ao deletar produto', err)
    });
  }
}
export type { Produto };

