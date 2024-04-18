import MuiButton from '@mui/material/Button';

const ThemedButton = (props) => <MuiButton {...props} disableElevation disableFocusRipple disableRipple>{props.label}</MuiButton>;

export default ThemedButton;
