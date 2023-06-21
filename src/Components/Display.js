import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
const Display = ({ name, email, index, data, setData }) => {
  const removeItem = () => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <div className="table">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <Stack>
        <Button onClick={removeItem} color="error" variant="contained">
          <DeleteIcon />
        </Button>
      </Stack>
    </div>
  );
};

export default Display;
