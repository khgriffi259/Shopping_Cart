import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect( props ) {
  
  
  const classes = useStyles();
//   const [values, setValues] = React.useState({
//     age: '',
//     name: 'hai',
//   });


//   function handleChange(event) {
//     setValues(oldValues => ({
//       ...oldValues,
//       [event.target.name]: event.target.value,
//     }));
//   }

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-simple">{props.label}</InputLabel>
        <Select
          value={props.filterType}
          onChange={props.changeFilterType}
        >
          {props.options && props.options.map((option,i) => (
            <MenuItem key={i} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
}
