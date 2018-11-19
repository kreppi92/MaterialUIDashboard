import React from "react";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";
import Email from "@material-ui/icons/Email";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";

import Select from "@material-ui/core/Select";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import PictureUpload from "components/CustomUpload/PictureUpload.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.jsx";

// Drop Zone
import Dropzone from 'react-dropzone'

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  inputAdornment: {
    position: "relative"
  },

  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  choiche: {
    textAlign: "center",
    cursor: "pointer",
    marginTop: "20px"
  },
  ...customSelectStyle,
  ...customCheckboxRadioSwitch
};

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      firstnameState: "",
      lastname: "",
      lastnameState: "",
      email: "",
      emailState: "",

      simpleSelect: "",
      desgin: false,
      code: false,
      develop: false,

      dropPath: "",
    };
  }
  sendState() {
    return this.state;
  }
  // function that returns true if value is email, false otherwise
  verifyEmail(value) {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  }
  // function that verifies if a string has a given length or not
  verifyLength(value, length) {
    if (value.length >= length) {
      return true;
    }
    return false;
  }
  change(event, stateName, type, stateNameEqualTo) {
    switch (type) {
      case "email":
        if (this.verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      case "length":
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  }
  isValidated() {
    if (
      this.state.firstnameState === "success" &&
      this.state.lastnameState === "success" &&
      this.state.emailState === "success"
    ) {
      return true;
    } else {
      if (this.state.firstnameState !== "success") {
        this.setState({ firstnameState: "error" });
      }
      if (this.state.lastnameState !== "success") {
        this.setState({ lastnameState: "error" });
      }
      if (this.state.emailState !== "success") {
        this.setState({ emailState: "error" });
      }
    }
    return false;
  }

  sendState() {
    return this.state;
  }
  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  isValidated() {
    return true;
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles)
    this.setState({
      dropPath: acceptedFiles[0].name
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>
            Lets start with basic information. What is the title info?
          </h4>
        </GridItem>
        <GridItem xs={12} sm={4}>
          <PictureUpload />
        </GridItem>
        <GridItem xs={12} sm={6}>
          <CustomInput
            success={this.state.firstnameState === "success"}
            error={this.state.firstnameState === "error"}
            labelText={
              <span>
                Title Name <small>(required)</small>
              </span>
            }
            id="firstname"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "firstname", "length", 3),
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.inputAdornment}
                >
                  <Face className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
          <CustomInput
            success={this.state.lastnameState === "success"}
            error={this.state.lastnameState === "error"}
            labelText={
              <span>
                Studio Name <small>(required)</small>
              </span>
            }
            id="lastname"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "lastname", "length", 3),
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.inputAdornment}
                >
                  <RecordVoiceOver className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={10}>
          <CustomInput
            success={this.state.emailState === "success"}
            error={this.state.emailState === "error"}
            labelText={
              <span>
                Contact E-mail <small>(required)</small>
              </span>
            }
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "email", "email"),
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.inputAdornment}
                >
                  <Email className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
        </GridItem>

        <h4 className={classes.infoText}>What type of title is this?</h4>
        <GridItem xs={12} sm={12} md={12} lg={10}>
          <GridContainer>
            <GridItem xs={12} sm={4}>
              <div className={classes.choiche}>
                <Checkbox
                  tabIndex={-1}
                  onClick={this.handleChange("desgin")}
                  checkedIcon={
                    <i
                      className={
                        "fas fa-film " + classes.iconCheckboxIcon
                      }
                    />
                  }
                  icon={
                    <i
                      className={
                        "fas fa-film " + classes.iconCheckboxIcon
                      }
                    />
                  }
                  classes={{
                    checked: classes.iconCheckboxChecked,
                    root: classes.iconCheckbox
                  }}
                />
                <h6>FILM</h6>
              </div>
            </GridItem>
            <GridItem xs={12} sm={4}>
              <div className={classes.choiche}>
                <Checkbox
                  tabIndex={-1}
                  onClick={this.handleChange("code")}
                  checkedIcon={
                    <i
                      className={
                        "fas fa-tv " + classes.iconCheckboxIcon
                      }
                    />
                  }
                  icon={
                    <i
                      className={
                        "fas fa-tv " + classes.iconCheckboxIcon
                      }
                    />
                  }
                  classes={{
                    checked: classes.iconCheckboxChecked,
                    root: classes.iconCheckbox
                  }}
                />
                <h6>TV SERIES</h6>
              </div>
            </GridItem>
            <GridItem xs={12} sm={4}>
              <div className={classes.choiche}>
                <Checkbox
                  tabIndex={-1}
                  onClick={this.handleChange("develop")}
                  checkedIcon={
                    <i
                      className={"fas fa-archive " + classes.iconCheckboxIcon}
                    />
                  }
                  icon={
                    <i
                      className={"fas fa-archive " + classes.iconCheckboxIcon}
                    />
                  }
                  classes={{
                    checked: classes.iconCheckboxChecked,
                    root: classes.iconCheckbox
                  }}
                />
                <h6>WHOLE SEASON</h6>
              </div>
              <FormControl fullWidth className={classes.selectFormControl}>
                <InputLabel
                  htmlFor="simple-select"
                  className={classes.selectLabel}
                >
                  Select Output
          </InputLabel>
                <Select
                  MenuProps={{
                    className: classes.selectMenu
                  }}
                  classes={{
                    select: classes.select
                  }}
                  value={this.state.simpleSelect}
                  onChange={this.handleSimple}
                  inputProps={{
                    name: "simpleSelect",
                    id: "simple-select"
                  }}
                >
                  <MenuItem
                    disabled
                    classes={{
                      root: classes.selectMenuItem
                    }}
                  >
                    Select Output
            </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="2"
                  >
                    Netflix
            </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="3"
                  >
                    Apple
            </MenuItem>
                </Select>
              </FormControl>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={10}>
          <Dropzone onDrop={this.onDrop}>
            { (!this.state.dropPath) ? "Drop your file here to specify a filepath to submit to VidChecker" : this.state.dropPath }
          </Dropzone>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(style)(Step1);
