package com.satishlabs.service;

import com.satishlabs.entity.Account;

import java.util.List;

public interface AccountService {
    public List<Account> getAllAccounts();
    public Account getAccountById(Integer id);
    public Account createAccount(Account account);
    public Account updateAccount(Integer id, Account account);
    public void deleteAccount(Integer id);
}
