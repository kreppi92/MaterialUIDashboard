import React from "react";

// core components
import Wizard from "components/Wizard/Wizard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Step1 from "./WizardSteps/Step1.jsx";
import Step2 from "./WizardSteps/Step2.jsx";
import Step3 from "./WizardSteps/Step3.jsx";
import Step4 from "./WizardSteps/Step4.jsx";
import Step5 from "./WizardSteps/Step5.jsx";
import Step6 from "./WizardSteps/Step6.jsx";




class WizardView extends React.Component {
  render() {
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={8}>
          <Wizard
            color="warning"
            validate
            steps={[
              { stepName: "Checklist", stepComponent: Step5, stepId: "Checklist" },
              { stepName: "Quality Check", stepComponent: Step2, stepId: "Quality Check" },
              { stepName: "Revisions", stepComponent: Step3, stepId: "Revisions" },
              { stepName: "Master Review", stepComponent: Step4, stepId: "Master Review" },
              { stepName: "Encoding", stepComponent: Step1, stepId: "Encoding" },
              { stepName: "Submission", stepComponent: Step6, stepId: "Submission" },
            ]}
            title="JuiceBox Title Lifecycle"
            subtitle="This wizard will walk you through the steps of completing a title"
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default WizardView;
