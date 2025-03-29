const dateHelper = () => {
    const dateObj = new Date()
    const day = dateObj.getDay()
    const date = dateObj.getDate()
    const month = dateObj.getMonth()
    const year = dateObj.getFullYear()

    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
      ];

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



    return {
        day : days[day],
        date : date,
        month : months[month],
        year : year
    }

}

export default dateHelper