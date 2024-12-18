package com.satishlabs.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

import java.math.BigDecimal;
import java.sql.Timestamp;

@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank(message = "Account number is required")
    private String accountNumber;

    @NotBlank(message = "Account holder name is required")
    private String accountHolder;

    @Min(value = 0, message = "Balance cannot be negative")
    private BigDecimal balance;

    @Column(updatable = false)
    private java.sql.Timestamp createdAt;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public @NotBlank(message = "Account number is required") String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(@NotBlank(message = "Account number is required") String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public @NotBlank(message = "Account holder name is required") String getAccountHolder() {
        return accountHolder;
    }

    public void setAccountHolder(@NotBlank(message = "Account holder name is required") String accountHolder) {
        this.accountHolder = accountHolder;
    }

    public @Min(value = 0, message = "Balance cannot be negative") BigDecimal getBalance() {
        return balance;
    }

    public void setBalance(@Min(value = 0, message = "Balance cannot be negative") BigDecimal balance) {
        this.balance = balance;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }
}
