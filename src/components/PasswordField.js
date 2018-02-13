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
      transform: "translateY(-50%)",
      cursor: "pointer",
    }
    return Object.assign(style, this.props.iconStyle)
  }

  render() {
    let icon = <Hide color={this.props.iconColor} style={this.setIconStyle()} onClick={this.toggleVisibility} />
    if (this.state.reveal) {
      icon = <Show color={this.props.iconColor} style={this.setIconStyle()} onClick={this.toggleVisibility} />
    }

    const props = {...this.props}
    delete props.iconColor
    delete props.iconStyle

    return (
      <div style={{position: "relative"}}>
        <TextField
          {...props}
          type={this.state.inputType}
        />
        {icon}
      </div>
    );
  }
}

export default PasswordField;
