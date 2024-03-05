import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import './TextFieldComponent.scss';

const TextFieldComponent = ()=> {

    return <TextField 
    id="filled-basic" 
    placeholder="Ex.: Veggie Burger" 
    variant="filled" 
    InputProps={{
      startAdornment: <InputAdornment 
      style={{marginTop: 0}}
      position="start" 
      >
        <SearchIcon 
        sx={{
          width: 24,
          height: 24,
        }}
 
        />
        
        </InputAdornment>,
    }}
    sx={{
        width: 327,
        color: '#6C6F80',
        minHeight: 48,
    
        '&.MuiInputBase-root': {
          borderRadius: '8px',
        },
        '& input': {
          padding: '0',
          paddingRight: '12px',
          paddingLeft: '8px',
          fontFamily:'Open-sans',
          minHeight: '40px'
          
      }
      }}
      className='customTextField'
    />

}

export default TextFieldComponent;