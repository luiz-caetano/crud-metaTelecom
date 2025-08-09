import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../core/services/produto.service';
import { Produto } from '../../core/models/produto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <ng-container *ngIf="telaAtual === 'lista'; else cadastroTemplate">
      <ng-container *ngTemplateOutlet="listaTemplate"></ng-container>
    </ng-container>
    <ng-template #cadastroTemplate>
      <ng-container *ngTemplateOutlet="cadastroFormTemplate"></ng-container>
    </ng-template>

    <ng-template #listaTemplate>
      <h3>Lista de Produtos</h3>
      <button class="btn-lista" (click)="mostrarTelaCadastro()">Novo Produto</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço Unitário</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let produto of produtos">
            <td>{{ produto.id }}</td>
            <td>
              <span *ngIf="!estaEditando(produto)">{{ produto.nome }}</span>
              <input *ngIf="estaEditando(produto)" [(ngModel)]="produtoEditando!.nome" />
            </td>
            <td>
              <span *ngIf="!estaEditando(produto)">{{ produto.valor_unitario }}</span>
              <input *ngIf="estaEditando(produto)" type="number" [(ngModel)]="produtoEditando!.valor_unitario" />
            </td>
            <td>
              <div class="botoes-acao">
                <button
                  *ngIf="!estaEditando(produto)"
                  class="btn-editar"
                  (click)="iniciarEdicao(produto)">
                  Editar
                </button>
                <button
                  *ngIf="estaEditando(produto)"
                  class="btn-salvar"
                  (click)="salvarEdicao()">
                  Salvar
                </button>
                <button
                  *ngIf="estaEditando(produto)"
                  class="btn-cancelar"
                  (click)="cancelarEdicao()">
                  Cancelar
                </button>
                <button
                  class="btn-excluir"
                  (click)="excluirProduto(produto.id)">
                  Excluir
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </ng-template>

    <ng-template #cadastroFormTemplate>
      <h2>Cadastro de Produtos</h2>
      <form (submit)="adicionarProduto(); $event.preventDefault();">
        <label>
          Nome:
          <input [(ngModel)]="novoProduto.nome" name="nome" required />
        </label>
        <label>
          Preço Unitário:
          <input type="number" [(ngModel)]="novoProduto.valor_unitario" name="valor_unitario" required />
        </label>
        <div class="botoes-form">
          <button type="submit" class="btn-salvar">Adicionar Produto</button>
          <button type="button" class="btn-lista" (click)="mostrarTelaLista()">Ver Lista</button>
        </div>
      </form>
      <hr />
    </ng-template>
  `,
  styleUrls: ['./produto.css']
})
export class ProdutoComponent implements OnInit {
  produtos: Produto[] = [];
  novoProduto: Produto = this.criarProdutoVazio();
  produtoEditando: Produto | null = null;
  telaAtual: 'lista' | 'cadastro' = 'lista';

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  // Carrega todos os produtos do backend
  carregarProdutos(): void {
    this.produtoService.listarProdutos().subscribe({
      next: (produtos) => this.produtos = produtos,
      error: (err) => console.error('Erro ao carregar produtos', err)
    });
  }

  // Alterna para tela de cadastro
  mostrarTelaCadastro(): void {
    this.telaAtual = 'cadastro';
    this.novoProduto = this.criarProdutoVazio();
  }

  // Alterna para tela de lista e atualiza os produtos
  mostrarTelaLista(): void {
    this.telaAtual = 'lista';
    this.carregarProdutos();
  }

  // Adiciona novo produto
  adicionarProduto(): void {
    if (!this.novoProduto.nome || this.novoProduto.valor_unitario <= 0) {
      alert('Preencha nome e preço válido!');
      return;
    }
    this.produtoService.criarProduto(this.novoProduto).subscribe({
      next: () => this.mostrarTelaLista(),
      error: (err) => console.error('Erro ao adicionar produto', err)
    });
  }

  // Exclui produto e atualiza lista
  excluirProduto(id?: number): void {
    if (!id) return;
    if (!confirm('Tem certeza que deseja excluir este produto?')) return;
    this.produtoService.deletarProduto(id).subscribe({
      next: () => this.carregarProdutos(),
      error: (err) => console.error('Erro ao excluir produto', err)
    });
  }

  // Inicia edição do produto
  iniciarEdicao(produto: Produto): void {
    this.produtoEditando = { ...produto };
  }

  // Salva edição e atualiza lista
  salvarEdicao(): void {
    if (this.produtoEditando) {
      this.produtoService.atualizarProduto(this.produtoEditando).subscribe({
        next: () => {
          this.produtoEditando = null;
          this.carregarProdutos();
        },
        error: (err) => console.error('Erro ao atualizar produto', err)
      });
    }
  }

  // Cancela edição
  cancelarEdicao(): void {
    this.produtoEditando = null;
  }

  // Verifica se está editando o produto
  estaEditando(produto: Produto): boolean {
    return !!this.produtoEditando && this.produtoEditando.id === produto.id;
  }

  // Cria objeto produto vazio
  private criarProdutoVazio(): Produto {
    return { nome: '', valor_unitario: 0 };
  }
}

