import { TextField, Grid } from '@mui/material';

export default function Input({ half, name, handleChange, label, autoFocus, type, formData }) {

    return (
        <Grid item xs={12} sm={half? 6 : 12}>
            <TextField 
                name={name}
                onChange={handleChange}
                variant="outlined"
                value={formData[`${name}`]}
                required={name === "phone" || name === "companyName" || name === "portfolio" ? false : true}
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type} />
        </Grid>
    )
}