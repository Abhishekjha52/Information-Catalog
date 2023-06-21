import "./App.css";
import Header from "./Components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Display from "./Components/Display";

function App() {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  const addData = () => {
    setData([...data, form]);
    setForm(form);
    setForm({ name: "", email: "" });
  };

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} color="success" variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      <div className="data">
        <div className="table">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <Display
              name={element.name}
              email={element.email}
              index={index}
              data={data}
              setData={setData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
