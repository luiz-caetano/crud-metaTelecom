package com.metatelecom.crud.repository;

import com.metatelecom.crud.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {

}
