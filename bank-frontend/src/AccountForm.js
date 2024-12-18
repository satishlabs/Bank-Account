import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";

const AccountForm = ({ selectedAccount, onSave, onCancel }) => {
  const [account, setAccount] = useState({
    accountNumber: "",
    accountHolder: "",
    balance: "",
  });

  useEffect(() => {
    if (selectedAccount) {
      setAccount(selectedAccount);
    }
  }, [selectedAccount]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(account);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, mb: 2 }}>
      <TextField
        fullWidth
        label="Account Number"
        name="accountNumber"
        value={account.accountNumber}
        onChange={handleChange}
        required
        margin="normal"
      />
      <TextField
        fullWidth
        label="Account Holder"
        name="accountHolder"
        value={account.accountHolder}
        onChange={handleChange}
        required
        margin="normal"
      />
      <TextField
        fullWidth
        label="Balance"
        name="balance"
        type="number"
        value={account.balance}
        onChange={handleChange}
        required
        margin="normal"
      />
      <Box sx={{ mt: 2 }}>
        <Button type="submit" variant="contained" sx={{ mr: 1 }}>
          Save
        </Button>
        <Button variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default AccountForm;
