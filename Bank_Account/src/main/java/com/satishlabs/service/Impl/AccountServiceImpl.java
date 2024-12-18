package com.satishlabs.service.Impl;

import com.satishlabs.entity.Account;
import com.satishlabs.repository.AccountRepository;
import com.satishlabs.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountRepository accountRepository;

    @Override
    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    @Override
    public Account getAccountById(Integer id) {
        return accountRepository.findById(id).orElseThrow(() -> new RuntimeException("Account not found"));
    }

    @Override
    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public Account updateAccount(Integer id, Account updateAccount) {
        Account account = new Account();
        account.setAccountNumber(updateAccount.getAccountNumber());
        account.setAccountHolder(updateAccount.getAccountHolder());
        account.setBalance(updateAccount.getBalance());
        return accountRepository.save(account);
    }

    @Override
    public void deleteAccount(Integer id) {
        accountRepository.deleteById(id);
    }

    @Override
    public Page<Account> getAllAccounts(Pageable pageable) {
        return accountRepository.findAll(pageable);
    }
}
