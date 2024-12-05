import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://67516657d1983b9597b2978d.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
