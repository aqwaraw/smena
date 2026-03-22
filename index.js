function InitWeekDays() {
    const weekDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
    let offset = 0
    for (const weekDay of weekDays) {
        const wde = document.createElement('div')
        wde.style.width = '64px'
        wde.style.height = '64px'
        wde.style.position = 'absolute'
        wde.style.left = offset + 'px'
        wde.style.backgroundColor = 'green'
        wde.innerText = weekDay
        document.body.append(wde)
        offset += 64
    }
}
//InitWeekDays()


const nums = [0, 1, 2, 3, 4, 5, 6]
for (const num of nums) {
    const offset = num ? num - 1 : 6
//    console.log(offset)
}


const GetDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

for (let i = 0; i < 12; i++) {
//    console.log(GetDaysInMonth(new Date(2026, i)))
}





const TODAY = new Date()
const YEAR = TODAY.getFullYear()
const MONTH = TODAY.getMonth()
const DAYS_IN_MONTH = new Date(YEAR, MONTH + 1, 0).getDate()
let WEEK_DAY = new Date(YEAR, MONTH).getDay()

let YO = 0
for (let DAY = 1; DAY <= DAYS_IN_MONTH; DAY++) {
    const DAY_ELEM = document.createElement('div')
    DAY_ELEM.style.width = '64px'
    DAY_ELEM.style.height = '64px'
    DAY_ELEM.style.position = 'absolute'
    DAY_ELEM.style.left = WEEK_DAY ? 64 * (WEEK_DAY - 1) + 'px' : 64 * 6 + 'px'
    DAY_ELEM.style.top = YO + 'px'
    DAY_ELEM.style.backgroundColor = 'salmon'
    
    DAY_ELEM.onclick = () => {DAY_ELEM.style.backgroundColor = DAY_ELEM.style.backgroundColor === 'salmon' ? 'forestgreen' : 'salmon'}
    
    document.body.append(DAY_ELEM)
    
    console.log(DAY, WEEK_DAY, YO, DAY_ELEM.style.backgroundColor)
    WEEK_DAY = WEEK_DAY === 6 ? 0 : WEEK_DAY + 1
    YO = WEEK_DAY === 1 ? YO + 64 : YO
}