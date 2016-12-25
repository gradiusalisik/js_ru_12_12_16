import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import './dataPicker.css'

import "react-day-picker/lib/style.css"

export default class DatePicker extends Component {
  static propTypes = {

  }

  state = {
    from: null,
    to: null
  }

  handleDayClick = (e, day) => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  handleResetClick = e => {
    e.preventDefault();
    this.setState({
      from: null,
      to: null
    })
  }

  render() {
    const { from, to } = this.state;
    return (
      <div>
        <div className='dayPicker'>
          <DayPicker
            selectedDays={day => DateUtils.isDayInRange(day, { from , to })}
            onDayClick={this.handleDayClick}
            />
        </div>

        { !from && !to && <p className='dayPicker__text'>Please select the <strong>first day</strong>.</p> }
        { from && !to && <p className='dayPicker__text'>Please select the <strong>last day</strong>.</p> }
        { from && to &&
          <p className='dayPicker__text'>
            Вы выбрали даты с { from.toLocaleDateString() } до { to.toLocaleDateString() }.
            { ' ' }<a href="." onClick={ this.handleResetClick }>Очистить</a>
          </p>
        }
      </div>
    )
  }
}
