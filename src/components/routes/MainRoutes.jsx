import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import HomePage from "../../pages/HomePage";
import AddProductPage from "../../pages/AddProductPage";
import EditContactPage from "../../pages/EditContactPage";

function MainRoutes({ addContact, contacts, deleteContact, editContact }) {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <HomePage deleteContact={deleteContact} contacts={contacts} />
          }
        />
        <Route
          path="/add"
          element={<AddProductPage addContact={addContact} />}
        />
        <Route
          path="/edit/:id"
          element={
            <EditContactPage contacts={contacts} editContact={editContact} />
          }
        />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
