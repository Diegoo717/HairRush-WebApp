import styles from "./MainContainer.module.css"

export default function MainContainer() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const generateCalendarDays = (year, month) => {
        const firstDay = getFirstDayOfMonth(year, month);
        const daysInMonth = getDaysInMonth(year, month);
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push(null);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day);
        }
        
        return days;
    };
    
    const currentMonthDays = generateCalendarDays(currentYear, currentMonth);
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    const nextMonthDays = generateCalendarDays(nextYear, nextMonth);

    const availableTimes = [
        "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "1:00 PM", "2:00 PM","4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
    ];
    
    return (
        <>
            <header className={styles.titleContainer}>
                <h1 className={styles.title}>Calendario</h1>
            </header>
            <main className={styles.mainContainer}>
                <section className={styles.calendarSection}>
                    <div className={styles.calendarsContainer}>
                        <div className={styles.calendarWrapper}>
                            <div className={styles.calendarHeader}>
                                <button className={styles.navButton}>
                                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
                                        <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                                    </svg>
                                </button>
                                <p className={styles.monthTitle}>
                                    {monthNames[currentMonth]} {currentYear}
                                </p>
                            </div>
                            <div className={styles.calendarGrid}>
                                <div className={styles.dayHeader}>S</div>
                                <div className={styles.dayHeader}>M</div>
                                <div className={styles.dayHeader}>T</div>
                                <div className={styles.dayHeader}>W</div>
                                <div className={styles.dayHeader}>T</div>
                                <div className={styles.dayHeader}>F</div>
                                <div className={styles.dayHeader}>S</div>
                                
                                {currentMonthDays.map((day, index) => (
                                    <button
                                        key={index}
                                        className={day === 5 ? styles.dayButtonSelected : styles.dayButton}
                                    >
                                        {day && (
                                            <div className={day === 5 ? styles.dayNumberSelected : styles.dayNumber}>
                                                {day}
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        <div className={styles.calendarWrapper}>
                            <div className={styles.calendarHeader}>
                                <p className={styles.monthTitle}>
                                    {monthNames[nextMonth]} {nextYear}
                                </p>
                                <button className={styles.navButton}>
                                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
                                        <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className={styles.calendarGrid}>
                                <div className={styles.dayHeader}>S</div>
                                <div className={styles.dayHeader}>M</div>
                                <div className={styles.dayHeader}>T</div>
                                <div className={styles.dayHeader}>W</div>
                                <div className={styles.dayHeader}>T</div>
                                <div className={styles.dayHeader}>F</div>
                                <div className={styles.dayHeader}>S</div>
                                
                                {nextMonthDays.map((day, index) => (
                                    <button
                                        key={index}
                                        className={styles.dayButton}
                                    >
                                        {day && (
                                            <div className={styles.dayNumber}>
                                                {day}
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className={styles.timesSection}>
                    <h3 className={styles.timesTitle}>Horas disponibles</h3>
                    <div className={styles.timesContainer}>
                        {availableTimes.map((time, index) => (
                            <a
                                key={index}
                                href="#"
                                className={time === "10:00 AM" ? styles.timeSlotSelected : styles.timeSlot}
                            >
                                <p className={styles.timeText}>{time}</p>
                            </a>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}