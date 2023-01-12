import { Form, Field } from 'react-final-form';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SearchTextField from "./components/SearchTextField";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


function App() {
  const onValidate = (value) => {
    const errors = {};
    if (value.searchInput === undefined) {
      errors.searchInput = 'Enter something'
    }
    return errors;
  };

  const onSubmit = (data, form) => {
    console.log(data)
    form.reset()
  };


  return (
    <Form
      onSubmit={onSubmit}
      validate={onValidate}
      render={(props) => {
        const { handleSubmit, valid } = props;
        return (
          <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
              padding: '20px', display: 'flex', alignItems: 'center',
              width: 400, margin: 'auto'
            }}
          >
            <Box component='div' sx={{ margin: '0 auto' }}>
              <SearchOutlinedIcon sx={{ color: "grey", margin: '22px 10px' }} />
              <Field
                component={SearchTextField}
                name="searchInput"
                label="Search field"
                type="search"
                variant="standard"
                color="secondary"
              />
              
            </Box>
            <Button
              disabled={!valid}
              type="submit"
              variant="contained"
              color="secondary">
              Find
            </Button>
          </Paper>
        )
      }}
    />
  )
}


export default App;
