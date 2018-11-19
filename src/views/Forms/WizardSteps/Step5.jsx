import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";
import extendedTablesStyle from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.jsx";


// Drop Zone
import Dropzone from 'react-dropzone'

// Table Stuff
import Check from "@material-ui/icons/Check";
import Table from "components/Table/Table.jsx";


import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import Assignment from "@material-ui/icons/Assignment";
// RESEARCH MORE ON BELOW
// import { FormControlLabel } from "@material-ui/core";

// icons
import ErrorOutlinedIcon from "@material-ui/icons/ErrorOutline";

//tooltip
import Tooltip from '@material-ui/core/Tooltip';


const fakeTitle = {
  name: "The Developers of Juice Worldwide",
  type: "Movie",
  studio: "Juice Studios",
  checklistData: [
    {
      type: "CHECKLIST_CONTENT",
      label: "Is all content available in Juicebox?",
      format: ['amazon', 'telus'],
      value: true,
    },
    {
      type: "CHECKLIST_ARTWORK",
      label: "Has the artwork been properly uploaded to Juicebox?",
      format: ['netflix', 'amazon'],
      value: true,
    },
    {
      type: "CHECKLIST_MIN_REQUIREMENTS",
      label: "Does the package meet the miniumum storefront requirements of it's territories?",
      format: ['netflix', 'amazon', 'telus'],
      value: true,
    },
    {
      type: "CHECKLIST_QC_SUITABLE",
      label: "Does the package meet the minimum storefront requirements of it's territories?",
      format: ['netflix', 'telus'],
      value: false,
    },
    {
      type: "CHECKLIST_REVISIONS",
      label: "Have all the revisions been completed?",
      format: ['netflix', 'amazon', 'telus'],
      value: null,
    },
    {
      type: "CHECKLIST_EDIT",
      label: "Has there been an edit to the film or trailer? Double check that everything was completed correctly?",
      format: ['amazon', 'telus'],
      value: true,
    },
    {
      type: "CHECKLIST_ASPECT_RATIO",
      label: "Is the aspect ratio of the trailer suitable for the feature and vice versa?",
      format: ['netflix', 'amazon', 'telus'],
      value: true,
    },
    {
      type: "CHECKLIST_FRAME_RATE",
      label: "Is the frame rate of the trailer suitable for the feature and vice versa?",
      format: ['netflix', 'amazon'],
      value: false,
    },
    {
      type: "CHECKLIST_CHAPTER_CODES",
      label: "Are the chapter timecodes set correctly? Make sure the descriptions match the timecode?",
      format: ['netflix', 'amazon', 'telus'],
      value: null,
    },
  ]
}

const dropStyle = {
  width: "100%",
  height: "75px",
  border: "2px dashed grey",
  borderRadius: "3px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "50px"
}

const dropActiveStyle = {
  background: "#fbfbfb",
  width: "100%",
  height: "75px",
  border: "3px solid #4caf50",
  // borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  ...customSelectStyle,
  ...extendedTablesStyle
};

class Step5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desgin: false,
      code: false,
      develop: false,

      dropPath: "",

      titleName: "",
      titleType: "",
      titleStudio: "",

      checklistType: [],

      checked: []

    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }

  sendState() {
    return this.state;
  }

  handleMultiple = event => {
    this.setState({ checklistType: event.target.value });
  };

  isValidated() {
    return true;
  }

  handleDroppedName = () => {
    this.setState({
      titleName: fakeTitle.name,
      titleType: fakeTitle.type,
      titleStudio: fakeTitle.studio,
    })
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    this.setState({
      dropPath: acceptedFiles[0].name
    })
    this.handleDroppedName()
  }

  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>Specify the path of the Movie file below.</h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={10}>
          <Dropzone onDrop={this.onDrop}
            style={dropStyle}
            activeStyle={dropActiveStyle}
          >
            {(!this.state.dropPath) ? "Drop your file here to specify a filepath to submit to VidChecker" : this.state.dropPath}
          </Dropzone>
        </GridItem>
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>Perform checklist test before proceeding.</h4>
        </GridItem>
        <GridItem xs={12} sm={7}>
          <CustomInput
            labelText="Title Name"
            id="streetname"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              value: this.state.titleName,
              disabled: true
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <CustomInput
            labelText="Title Type"
            id="streetno"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              value: this.state.titleType,
              disabled: true
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={5}>
          <CustomInput
            labelText="Title Studio"
            id="city"
            formControlProps={{
              fullWidth: true
            }
            }
            inputProps={{
              value: this.state.titleStudio,
              disabled: true
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={5}>
          <FormControl
            fullWidth
            className={classes.selectFormControl}
          >
            <InputLabel
              htmlFor="multiple-select"
              className={classes.selectLabel}
            >
              Select Applicable Checklists
                          </InputLabel>
            <Select

              multiple
              value={this.state.checklistType}
              onChange={this.handleMultiple}
              MenuProps={{ className: classes.selectMenu }}
              classes={{ select: classes.select }}
              inputProps={{
                name: "multipleSelect",
                id: "multiple-select"
              }}
            >
              <MenuItem
                disabled
                classes={{
                  root: classes.selectMenuItem
                }}
              >
                Select Applicable Checklists
                            </MenuItem>
              <MenuItem
                classes={{
                  root: classes.selectMenuItem,
                  selected: classes.selectMenuItemSelectedMultiple
                }}
                value="amazon"
              >
                Amazon
                            </MenuItem>
              <MenuItem
                classes={{
                  root: classes.selectMenuItem,
                  selected: classes.selectMenuItemSelectedMultiple
                }}
                value="telus"
              >
                Telus
                            </MenuItem>
              <MenuItem
                classes={{
                  root: classes.selectMenuItem,
                  selected: classes.selectMenuItemSelectedMultiple
                }}
                value="netflix"
              >
                Netflix
                            </MenuItem>
            </Select>
          </FormControl>
        </GridItem>
        {this.state.checklistType.length > 0 ?
          (<GridItem xs={12}>
            <Card>
              <CardHeader color="warning" icon>
                <CardIcon color="warning">
                  <Assignment />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Film Package Checklist</h4>
              </CardHeader>
              <CardBody>
                <Table
                  striped
                  tableHead={[
                    "Juicebox",
                    "Value",
                  ]}
                  tableData={
                    fakeTitle.checklistData.filter(rowItem => {
                      for (let x = 0; x < this.state.checklistType.length; x++) {
                        if (rowItem.format.includes(this.state.checklistType[x])) {
                          return true
                        }
                      }
                      return false
                    }
                    ).map((rowElement) => {
                      return (

                        {
                          color: rowElement.value == false ? "danger" : "",
                          data: [
                            rowElement.label,
                            rowElement.value == null ? (
                              <Tooltip
                                id="tooltip-top"
                                title="This item requires manual validation!"
                                placement="left"
                                classes={{ tooltip: classes.tooltip }}
                              >

                                <Checkbox
                                  tabIndex={-1}
                                  onClick={() => this.handleToggle(4)}
                                  checkedIcon={<Check 
                                    className={classes.checkedIcon}
                                    color="secondary"
                                    />}
                                  icon={<Check 
                                    className={classes.uncheckedIcon}
                                    />}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                  }}
                                />


                              </Tooltip>

                            ) : (rowElement.value ? (
                              <Tooltip
                                id="tooltip-top"
                                title="This item had successfully passed testing!"
                                placement="left"
                                classes={{ tooltip: classes.tooltip }}
                              >
                                <IconButton
                                  color="secondary"
                                  className={classes.button}
                                  className={classes.test}
                                  component="span"
                                  classes={{
                                    root: classes.checkRoot,
                                  }}
                                >
                                  <Check />
                                </IconButton>
                              </Tooltip>

                            ) : (

                                <Tooltip
                                  id="tooltip-top"
                                  title="This item requires your attention!"
                                  placement="left"
                                  classes={{ tooltip: classes.tooltip }}
                                >
                                  <IconButton
                                  color="primary"
                                    className={classes.button}
                                    component="span"
                                  >
                                    <ErrorOutlinedIcon/>
                                  </IconButton>

                                </Tooltip>

                              ))
                          ]
                        })
                    })}
                  customCellClasses={[
                    classes.left,
                    classes.center,
                  ]}
                  customClassesForCells={[1, 2]}
                  customHeadCellClasses={[
                    classes.left,
                    classes.center,
                  ]}
                  customHeadClassesForCells={[1, 2]}
                />
              </CardBody>
            </Card>
          </GridItem>)
          :
          ""
        }
      </GridContainer>
    );
  }
}

export default withStyles(style)(Step5);
