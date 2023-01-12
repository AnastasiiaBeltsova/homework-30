import TextField from "@mui/material/TextField"; 

export default function SearchTextField(props) {
    const {
        label,
        type,
        variant,
        input,
        color,
        meta
    } = props;
    return (
        <TextField
            {...input}
            label={label}
            type={type}
            variant={variant}
            color={color}
            error={Boolean(meta.error && meta.touched)}
            helperText={meta.error && meta.touched ? meta.error : null}
        />
    );
}