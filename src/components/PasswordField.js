import React, { Component } from 'react';
import { TextField } from 'material-ui';
import Show from 'material-ui/svg-icons/action/visibility';
import Hide from 'material-ui/svg-icons/action/visibility-off';

class PasswordField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reveal: false,
      inputType: "password",
    };
  }

  toggleVisibility = () => {
    if (this.state.reveal) {
      this.setState({
        reveal: false,
        inputType: "password",
      })
    } else {
      this.setState({
        reveal: true,
        inputType: "text",
      })
    }
  }

  setIconStyle = () => {
    const style = {
      position: 'absolute',
      top: "50%",
      right: "0",
      height: "1.6rem",
      width: "1.6rem",
      transform: "translateY(-50%)",
      cursor: "pointer",
      zIndex: 10,
    }
    return Object.assign(style, this.props.iconStyle)
  }

  render() {
    let icon = <Hide color={this.props.iconColor} />
    if (this.state.reveal) {
      icon = <Show color={this.props.iconColor} />
    }

    return (
      <div style={{position: "relative"}}>
        <TextField
          {...this.props}
          type={this.state.inputType}
        />
        <div style={this.setIconStyle()} onClick={this.toggleVisibility}>{icon}</div>
      </div>
    );
  }
}

export default PasswordField;
