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

    // See http://www.material-ui.com/#/components/text-field
    // Note: If it has a `value` attribute, hint text will be shown after input.
    return (
      <div style={{position: "relative"}}>
        <TextField
          ref="passwordField"
          className={this.props.className}
          defaultValue={this.props.defaultValue}
          disabled={this.props.disabled}
          errorStyle={this.props.errorStyle}
          errorText={this.props.errorText}
          floatingLabelFixed={this.props.floatingLabelFixed}
          floatingLabelFocusStyle={this.props.floatingLabelFocusStyle}
          floatingLabelShrinkStyle={this.props.floatingLabelShrinkStyle}
          floatingLabelStyle={this.props.floatingLabelStyle}
          floatingLabelText={this.props.floatingLabelText}
          fullWidth={this.props.fullWidth}
          hintStyle={this.props.hintStyle}
          hintText={this.props.hintText}
          id={this.props.id}
          inputStyle={this.props.inputStyle}
          multiLine={this.props.multiLine}
          name={this.props.name}
          onChange={this.props.onChange}
          rows={this.props.rows}
          rowsMax={this.props.rowsMax}
          style={this.props.style}
          textareaStyle={this.props.textareaStyle}
          type={this.state.inputType}
          underlineDisabledStyle={this.props.underlineDisabledStyle}
          underlineFocusStyle={this.props.underlineFocusStyle}
          underlineShow={this.props.underlineShow}
          underlineStyle={this.props.underlineStyle}
        />
        <div style={this.setIconStyle()}>{icon}</div>
      </div>
    );
  }
}

export default PasswordField;
