import TextField from './TextField/TextField';
import SearchIcon from '@mui/icons-material/Search';
import ErrorIcon from '@mui/icons-material/Error';
import { StyledEngineProvider } from '@mui/material';

// import { TextField } from "@mui/material";

function HelloWorld() {
    return (
        <StyledEngineProvider injectFirst>
            <div>
                <h2>Hello world</h2>
                <h4>Bottom text</h4>
                <TextField
                    placeholder="Ex.: Veggie Burger"
                    adornment="startAdornment"
                    position="start"
                >
                    <SearchIcon />
                </TextField>
                {/* <TextField
                    placeholder="Error test"
                    error
                    adornment="endAdornment"
                    position="end"
                    helperText="Incorrect entry."
                >
                    <ErrorIcon />
                </TextField> */}
            </div>
        </StyledEngineProvider>
    );
}

export default HelloWorld;
