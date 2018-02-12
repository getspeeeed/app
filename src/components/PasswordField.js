import React, { Component } from 'react';
import { TextField } from 'material-ui';
import Show from 'genericons-neue-react/icons/show';
import Hide from 'genericons-neue-react/icons/hide';

class PasswordField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reveal: false,
      inputType: "password",
    };
  }

  toggleReveal = () => {
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
      height: "1.8rem",
      width: "1.8rem",
      transform: "translateY(-50%)",
      cursor: "pointer",
    }
    return Object.assign(style, this.props.iconStyle)
  }

  render() {
    let icon = <Hide fill={this.props.iconColor} onClick={this.toggleReveal} />
    if (this.state.reveal) {
      icon = <Show fill={this.props.iconColor} onClick={this.toggleReveal} />
    }

    return (
      <div style={{position: "relative"}}>
        <TextField
          id={this.props.id}
          type={this.state.inputType}
          name={this.props.name}
          className={this.props.className}
          hintText={this.props.hintText}
          fullWidth={this.props.fullWidth}
          inputStyle={this.props.inputStyle}
          hintStyle={this.props.hintStyle}
        />
        <div style={this.setIconStyle()}>{icon}</div>
      </div>
    );
  }
}

export default PasswordField;
