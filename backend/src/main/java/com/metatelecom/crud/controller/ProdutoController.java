package com.metatelecom.crud.controller;

import com.metatelecom.crud.model.Produto;
import com.metatelecom.crud.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoService service;

    @PostMapping("/criar")
    public Produto criar(@RequestBody Produto produto) {
        return service.salvar(produto);
    }

    @GetMapping("/listar")
    public List<Produto> listarProdutos() {
        return service.listarProdutos();
    }

    @DeleteMapping("/delete")
    public void deletar(Long id) {
        service.deletar(id);
    }

}
