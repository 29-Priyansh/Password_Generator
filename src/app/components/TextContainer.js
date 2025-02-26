import React from "react";
import { TextField } from "@mui/material";

function TextContainer({ text, updateText }) {
    return (
        <>
            <TextField
                type="text"
                className="bg-[--dark-grey] text-[white] text-2xl md:text-[2rem] w-full"
                value={text}
                id="password"
                variant="outlined"
                label="Password"
                aria-live="assertive"
                tabIndex="-1"              
                InputProps={{
                    readOnly: true,                   
                    style: {
                        fontSize: "1.5rem",
                        paddingBlock: "0.25rem",
                        fontWeight: 900,
                    },
                }}
                InputLabelProps={{
                    style: {
                        color:
                            text.length === 0
                                ? "hsla(252, 9%, 53%, 1)"
                                : "white",
                        fontSize: "1.5rem",
                    },
                }}
                sx={{
                    input: { color: "white" },
                    "& input .Mui-disabled": {
                        color: "white",
                    },
                }}
                onChange={updateText}
            />
        </>
    );
}

export default TextContainer;
