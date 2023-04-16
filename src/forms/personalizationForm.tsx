import React from "react";
import MobileDeviceStepper from "../components/mobileStepper/mobileDeviceStepper";
import Grid from "@mui/material/Grid";
import HeadingWithContent from "../components/headings/headingWithContent";
import ImageCheckBoxGroup from "../components/formFields/checkBoxGroup";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";

const options = [
  {
    _id: 1,
    name: "hello",
  },
  {
    _id: 2,
    name: "hello",
  },
  {
    _id: 3,
    name: "hello",
  },
];

const PersonalizationForm = () => {
  const { control, handleSubmit, getValues } = useForm();

  const handleCheck = (checkedId: any) => {
    const { sample: ids } = getValues();
    const newIds = ids?.includes(checkedId)
      ? ids?.filter((id: any) => id !== checkedId)
      : [...(ids ?? []), checkedId];
    return newIds;
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <MobileDeviceStepper
      mobileStepperActiveStep={0}
      mobileStepperContent={
        <Box p={2}>
          <Grid pt={2} container>
            <Grid mb={2} item xs={12}>
              <HeadingWithContent
                hideHelpIcon={false}
                heading="What outfits do you
            prefer?"
                content="To understand you better we need to know
  your persona, please select where you fit
  best!"
              />
            </Grid>
            <Grid mb={2} item xs={12}>
              <ImageCheckBoxGroup
                variant="IMAGE"                options={options}
                control={control}
                name="sample"
                onChange={handleCheck}
                id="init"
              />
            </Grid>
          </Grid>
        </Box>
      }
      mobileStepperSteps={5}
      mobileStepperOnClickNext={handleSubmit(onSubmit)}
      mobileStepperOnClickPrevious={() => {}}
    />
  );
};

export default PersonalizationForm;
