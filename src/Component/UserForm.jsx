import TextField from "@material-ui/core/TextField";
export const UserForm = () => {
  return (
    <>
      <form>
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </>
  );
};
