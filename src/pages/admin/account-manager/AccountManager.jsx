import { Pagination, PaginationItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

export default function AccountManager() {
  const token = localStorage.getItem("token");
  const [accountData, setAccountData] = useState([]);
  const [paging, setPaging] = useState({
    perPage: 1,
    totalPages: 0,
  });
  const [searchParams] = useSearchParams();
  let page = searchParams.get("page") || 1;

  function hanlePage() {
    fetch(`http://localhost:3001/auth?page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setPaging({
          perPage: json.datas.perPage,
          totalPages: json.datas.lengthPage,
        });
        const data = json.datas.userDatas;
        setAccountData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    hanlePage();
  }, [page, accountData.length]);

  async function handleDelete(id) {
    try {
      const userDelete = await axios({
        method: "DELETE",
        url: `http://localhost:3001/auth/${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (userDelete.status(200)) {
        console.log(userDelete.message);
      }
    } catch (error) {}
  }

  return (
    <div>
      <form className="scroll-auto overflow-x-auto">
        <table className="mb-4">
          <thead>
            <tr>
              <th>STT</th>
              <th>FullName</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Role</th>
              <th>Create-At(Date)</th>
              <th>Update-At(Date)</th>
              <th colSpan={2}>Option</th>
            </tr>
          </thead>
          <tbody>
            {accountData.map((account, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1 + (page - 1) * paging.perPage}</td>
                  <td>{account.name}</td>
                  <td>{account.phone}</td>
                  <td>{account.email}</td>
                  <td>{account.role}</td>
                  <td>{account.createdAt}</td>
                  <td>{account.updatedAt}</td>
                  <td>
                    <FaRegEdit className="w-6 h-6 text-yellow-500 mx-4" />
                  </td>
                  <td>
                    <Link
                      to="/admin/accounts"
                      onClick={() => handleDelete(account._id)}
                    >
                      <RiDeleteBinLine className="w-6 h-6 text-red-500 mx-2" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>

      <div className="mt-24 flex justify-center">
        <Pagination
          page={paging.perPage}
          count={paging.totalPages}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/admin/accounts${
                item.page === 1 ? "" : `?page=${item.page}`
              }`}
              {...item}
            />
          )}
          variant="outlined"
          color="primary"
          showFirstButton
          showLastButton
        />
      </div>
    </div>
  );
}
