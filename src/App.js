import React from 'react';
import { BpkCode } from '@skyscanner/backpack-web/bpk-component-code';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';
import STYLES from './App.scss';
import format from 'date-fns/format';
import { Component } from 'react';
import BpkCalendar, {
  CALENDAR_SELECTION_TYPE,
} from '@skyscanner/backpack-web/bpk-component-calendar';
import BpkInput, {
  INPUT_TYPES,
} from '@skyscanner/backpack-web/bpk-component-input';



const c = className => STYLES[className] || 'UNKNOWN';
const formatDateFull = (date) => format(date, 'EEE, do MMMM yyyy');
const formatMonth = (date) => format(date, 'MMMM yyyy');
const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
  },
  {
    name: 'Monday',
    nameAbbr: 'Mon',
    index: 1,
    isWeekend: false
  },
  {
    name: 'Tuesday',
    nameAbbr: 'Tue',
    index: 2,
    isWeekend: false
  },
  {
    name: 'Wednesday',
    nameAbbr: 'Wed',
    index: 3,
    isWeekend: false
  },
  {
    name: 'Thursday',
    nameAbbr: 'Thur',
    index: 4,
    isWeekend: false
  },
  {
    name: 'Friday',
    nameAbbr: 'Fri',
    index: 5,
    isWeekend: false
  },
  {
    name: 'Saturday',
    nameAbbr: 'Sat',
    index: 6,
    isWeekend: true
  }
];

export default class App extends Component{
  constructor(){
    super();

    this.state = {
      selctionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: null,
      },
    };
  }

  handleDateSelect = (date) => {
    this.setState({
      selectionConfiguration:{
        type: this.props.selctionConfiguration.type,
        date: date,
      },
    });
  };

  render() {
    return (
      <div className={c('App')}>
      <header className={c('App__header')}>
        <div className={c('App__header-inner')}>
          <BpkText tagName="h1" textStyle="xxl" className={c('App__heading')}>Reservation Date</BpkText>
        </div>
      </header>
      <main className={c('App__main')}>
        <div>
          <BpkCalendar
            id='calendar'
            onDateSelect={this.handleDateSelect}
            formatMonth={formatMonth}
            formatDateFull={formatDateFull}
            daysOfWeek={daysOfWeek}
            weekStartsOn={0}
            changeMonthLabel="Change month"
            nextMonthLabel="Next month"
            previousMonthLabel="Previous month"
            selectionConfiguration={this.state.selectionConfiguration}
          />
          </div>
        <BpkButton onClick={() => alert('It works!')}>Continue</BpkButton>
      </main>
    </div>
    )
  }
}

// const App = () => (
//   <div className={getClassName('App')}>
//     <header className={getClassName('App__header')}>
//       <p>Select a Date</p>
//       <div className={getClassName('App__header-inner')}>
//         <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}></BpkText>
//       </div>
//     </header>

//     <main className={getClassName('App__main')}>
//       <BpkText tagName="p" className={getClassName('App__text')}>
//         <BpkCode>src/App.jsx</BpkCode>
//       </BpkText>
//       <BpkInput id="dateInput"
//           type={INPUT_TYPES.text}
//           name="date"
//           value={(this.state.selectionConfiguration.date|| '').toString()}
//           placeholder="Departure date"/>
//       <BpkCalendar id ="calendar"
//           onDateSelect={this.handleDateSelect}
//           formatMonth={formatMonth}
//           formatDateFull={formatDateFull}
//           daysOfWeek={daysOfWeek}
//           weekStartsOn={1}
//           changeMonthLabel="Change month"
//           nextMonthLabel="Next month"
//           previousMonthLabel="Previous month"
//           selectionConfiguration={this.state.selectionConfiguration}/>
//       <BpkButton onClick={() => alert('It works!')}>Continue</BpkButton>
//     </main>
//  </div>
// );

//export default App