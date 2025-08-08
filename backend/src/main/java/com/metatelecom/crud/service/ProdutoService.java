package com.metatelecom.crud.service;

import com.metatelecom.crud.model.Produto;
import com.metatelecom.crud.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {

    @Autowired
    private JpaRepository<Produto, Long> repository;

    public Produto salvar(Produto produto) {
        return repository.save(produto);
    }

    public List<Produto> listarProdutos() {
        return repository.findAll();
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }

}
