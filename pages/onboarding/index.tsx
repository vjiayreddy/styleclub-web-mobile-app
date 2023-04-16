import React from "react";
import DefaultContainer from "../../src/components/common/defaultContainer";
import LetsGetStarted from "../../src/components/shared/onboarding/letsGetStarted";
import PersonalizationForm from "../../src/forms/personalizationForm";
const OnBoardingPage = () => {
  const handleSubmitQuestions = (data: any) => {
    console.log(data);
  };

  return (
    <DefaultContainer disableGutters>
      {/* <LetsGetStarted /> */}
      <PersonalizationForm />
    </DefaultContainer>
  );
};

export default OnBoardingPage;
