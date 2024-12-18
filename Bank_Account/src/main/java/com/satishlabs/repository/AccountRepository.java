package com.satishlabs.repository;

import com.satishlabs.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account,Integer> {
}
