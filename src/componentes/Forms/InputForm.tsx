import { withStyles } from '@material-ui/core/styles';
import {
    TextField
  } from '@material-ui/core';

const InputForm = withStyles({
    root: {
      margin: '0px 10px',
      borderRadius: 5,
      display: 'flex',
      flex: 1,
      '& .MuiInputBase-input': {
        marginLeft: 20,
        color: '#6E6893', // Text color
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: '#F2F0F9', // color del subrayado del input 
      },
      '& .MuiInput-underline:hover:before': {
        borderBottomColor: '#6E6893', // color del subrayado del input en hover
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#6E6893', // color del subrayado del input en focus
      },
    },
  })(TextField);

export default InputForm