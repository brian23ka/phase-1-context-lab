function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ');
    this.timeInEvents.push({ type: "TimeIn", date, hour: parseInt(hour) });
    return this;
}

function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ');
    this.timeOutEvents.push({ type: "TimeOut", date, hour: parseInt(hour) });
    return this;
}

function hoursWorkedOnDate(date) {
    let inEvent = this.timeInEvents.find(event => event.date === date);
    let outEvent = this.timeOutEvents.find(event => event.date === date);
    return (outEvent.hour - inEvent.hour) / 100;
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function allWagesFor() {
    return this.timeInEvents.reduce((total, event) => total + wagesEarnedOnDate.call(this, event.date), 0);
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, record) => total + allWagesFor.call(record), 0);
}