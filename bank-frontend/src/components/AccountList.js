import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper, IconButton, Button, Pagination } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import api from "../api";
import AccountForm from "../AccountForm";


const AccountList = () => {
  const [accounts, setAccounts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const rowsPerPage = 5; // Number of rows per page

  useEffect(() => {
    fetchAccounts();
  }, [currentPage]);

  const fetchAccounts = async () => {
    const response = await api.get(`/?page=${currentPage - 1}&size=${rowsPerPage}`);
    setAccounts(response.data.content);
    setTotalPages(response.data.totalPages);
  };

  const handleAdd = () => {
    setSelectedAccount(null);
    setIsFormOpen(true);
  };

  const handleEdit = (account) => {
    setSelectedAccount(account);
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    await api.delete(`/${id}`);
    fetchAccounts();
  };

  const handleSave = async (account) => {
    if (account.id) {
      // Update operation
      await api.put(`/${account.id}`, account);
    } else {
      // Create operation
      await api.post("/", account);
    }
    setIsFormOpen(false);
    fetchAccounts();
  };

  const handleCancel = () => {
    setIsFormOpen(false);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <h2>Bank Accounts</h2>
      {isFormOpen ? (
        <AccountForm selectedAccount={selectedAccount} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <div>
          <Button variant="contained" onClick={handleAdd} sx={{ mb: 2 }}>
            Add Account
          </Button>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Account Number</TableCell>
                  <TableCell>Account Holder</TableCell>
                  <TableCell>Balance</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {accounts.map((account) => (
                  <TableRow key={account.id}>
                    <TableCell>{account.id}</TableCell>
                    <TableCell>{account.accountNumber}</TableCell>
                    <TableCell>{account.accountHolder}</TableCell>
                    <TableCell>{account.balance}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEdit(account)}>
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(account.id)}>
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            sx={{ mt: 2 }}
          />
        </div>
      )}
    </div>
  );
};

export default AccountList;
