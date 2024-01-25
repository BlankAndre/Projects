package com.Andre.BookMangement.repository;

import com.Andre.BookMangement.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
