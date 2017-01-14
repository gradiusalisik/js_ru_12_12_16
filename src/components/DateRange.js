import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { filterDataRange } from '../AC'
import { connect } from 'react-redux'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    handleDayClick = (e, day) => {
        const { filterDataRange, dateRange } = this.props
        filterDataRange(DateUtils.addDayToRange(day, dateRange))
    }

    render() {
        const { from, to } = this.props.dateRange;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(state => ({
    dateRange: state.filters.dateRange
}), { filterDataRange })(DateRange)
