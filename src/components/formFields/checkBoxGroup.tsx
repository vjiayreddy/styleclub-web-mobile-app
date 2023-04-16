import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import CheckBox from "@mui/material/Checkbox";

import Grid, { GridProps } from "@mui/material/Grid";
import React from "react";
import { Control, FieldValues, Controller } from "react-hook-form";
import ImageAndLabelCard from "../cards/ImageAndLabelCard";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

interface ImageCheckBoxGroupProps {
  id: string;
  name: string;
  rules?: any;
  error?: any;
  label?: string;
  defaultValues?: any;
  variant?: "IMAGE" | "CHIP" | "NORMAL";
  onChange: (...event: any[]) => void;
  options: any[];
  control: Control<FieldValues, object>;
  gridProps?: GridProps;
}

const ImageCheckBoxGroup = ({
  gridProps,
  name,
  control,
  options,
  onChange,
  defaultValues,
  variant,
}: ImageCheckBoxGroupProps) => {
  return (
    <FormControl sx={{ width: "100%" }}>
      <Controller
        name={name}
        control={control}
        defaultValue={[]}
        rules={{
          required: true,
        }}
        render={({ field, fieldState }) => {
          {
            console.log(fieldState);
          }
          return (
            <Grid container spacing={1} {...gridProps}>
              {options.map((option) => (
                <Grid item xs={4} sm={4} md={3} lg={3} xl={3} key={option._id}>
                  <FormControlLabel
                    sx={{ width: "100%", margin: 0, padding: 0 }}
                    label=""
                    control={
                      <Box sx={{ width: "100%" }}>
                        <CheckBox
                          sx={{ width: "100%", padding: 0 }}
                          icon={
                            <Box sx={{ width: "100%" }}>
                              {variant === "IMAGE" && (
                                <ImageAndLabelCard
                                  cardWidth="100%"
                                  cardTitle={option.name}
                                  cardImageUrl="/assets/images/formal_dress.jpeg"
                                />
                              )}
                              {variant === "CHIP" && (
                                <Chip
                                  color="primary"
                                  sx={{ width: "100%" }}
                                  label={option.name}
                                  variant="outlined"
                                />
                              )}
                            </Box>
                          }
                          checkedIcon={
                            <Box sx={{ width: "100%" }}>
                              {variant === "IMAGE" && (
                                <ImageAndLabelCard
                                  cardWidth="100%"
                                  imageBoxSx={{ border: `3px solid #ffc400` }}
                                  cardTitle={option.name}
                                  cardImageUrl="/assets/images/formal_dress.jpeg"
                                />
                              )}
                              {variant === "CHIP" && (
                                <Chip
                                  color="primary"
                                  sx={{ width: "100%" }}
                                  label={option.name}
                                  variant="filled"
                                />
                              )}
                            </Box>
                          }
                          onChange={() => field.onChange(onChange(option._id))}
                          defaultChecked={defaultValues?.includes(option._id)}
                        />
                      </Box>
                    }
                  />
                </Grid>
              ))}
              {fieldState?.error && (
                <Grid item xs={12}>
                  <p>Please Select</p>
                </Grid>
              )}
            </Grid>
          );
        }}
      />
    </FormControl>
  );
};

export default ImageCheckBoxGroup;
