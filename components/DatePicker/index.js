import React from 'react';

import * as UI from './ui';

export default class DatePickerComponent extends React.Component {
  render() {
    const { value, onChange } = this.props

    return (
      <UI.DatePicker
       date={value}
       mode="date"
       placeholder="select date"
       format="YYYY-MM-DD"
       minDate="2016-05-01"
       maxDate="2016-06-01"
       confirmBtnText="Confirm"
       cancelBtnText="Cancel"
       onDateChange={onChange}
     />
    )
  }
}
