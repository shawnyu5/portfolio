import React from "react";
import PropTypes from "prop-types";
import "./Toggle.css";

export default class Checkbox extends React.Component {
   static propTypes = {
      hasError: PropTypes.bool,
      id: PropTypes.string.isRequired,
      indeterminate: PropTypes.bool,
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["default", "switch"]),
   };
   static defaultProps = {
      hasError: false,
      indeterminate: undefined,
      type: "default",
   };

   componentDidMount() {
      // Apply the indeterminate attribute of the checkbox input
      this.selector.indeterminate = this.props.indeterminate;
   }

   componentDidUpdate(prevProps) {
      if (prevProps.indeterminate !== this.props.indeterminate) {
         this.selector.indeterminate = this.props.indeterminate;
      }
   }

   render() {
      const {
         id,
         label,
         type,
         indeterminate,
         hasError,
         onChange,
         ...inputProps
      } = this.props;
      const checkboxClassname = `
      m-checkbox
      ${type === "switch" && "m-checkbox--switch"}
      ${hasError && "m-checkbox--has-error"}
    `;

      const inputClassname = `
      m-checkbox__input
      ${type === "switch" && "m-checkbox--switch__input"}
      ${hasError && "m-checkbox--has-error__input"}
    `;

      return (
         <div className={checkboxClassname}>
            <input
               type="checkbox"
               className={inputClassname}
               ref={(el) => (this.selector = el)}
               id={id}
               onChange={onChange}
               {...inputProps}
            />
         </div>
      );
   }
}
