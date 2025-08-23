import styles from "./MainContainer.module.css";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export default function MainContainer() {
  const currentDate = new Date();
  const realCurrentMonth = currentDate.getMonth();
  const realCurrentYear = currentDate.getFullYear();
  const today = currentDate.getDate();

  const [currentMonth, setCurrentMonth] = useState(realCurrentMonth);
  const [currentYear, setCurrentYear] = useState(realCurrentYear);

  const [selectedDay, setSelectedDay] = useState(5);
  const [selectedMonth, setSelectedMonth] = useState(realCurrentMonth);
  const [selectedYear, setSelectedYear] = useState(realCurrentYear);

  useEffect(() => {
      window.scrollTo(0, 0);
      
      if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
      }
    }, []);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const fetchAppointments = async () => {
    const response = await fetch(
      "https://hairrush-rest-api.diecode.lat/api/getAppointments"
    );

    if (!response.ok) {
      throw new Error("Error al obtener las citas");
    }

    const data = await response.json();
    return data;
  };

  const {
    data: appointments = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["appointments"],
    queryFn: fetchAppointments,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const getOccupiedTimes = (year, month, day) => {
    if (!appointments.length) return [];

    const selectedDate = `${year}-${String(month + 1).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}`;

    const dateAppointments = appointments.filter(
      (appointment) => appointment.date === selectedDate
    );

    return dateAppointments.map((appointment) => {
      const time = appointment.time;
      const [hours, minutes] = time.split(":");
      const hour24 = parseInt(hours);
      const hour12 = hour24 === 0 ? 12 : hour24 > 12 ? hour24 - 12 : hour24;
      const ampm = hour24 >= 12 ? "PM" : "AM";
      return `${hour12}:${minutes} ${ampm}`;
    });
  };

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

    while (days.length < 42) {
      days.push(null);
    }

    return days;
  };

  const currentMonthDays = generateCalendarDays(currentYear, currentMonth);
  const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
  const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  const nextMonthDays = generateCalendarDays(nextYear, nextMonth);

  const availableTimes = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
  ];

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const occupiedTimes = getOccupiedTimes(
    selectedYear,
    selectedMonth,
    selectedDay
  );

  const handleDayClick = (day, month, year) => {
    if (day) {
      setSelectedDay(day);
      setSelectedMonth(month);
      setSelectedYear(year);
    }
  };

  const isTimeOccupied = (time) => {
    return occupiedTimes.includes(time);
  };

  const isDayDisabled = (day, month, year) => {
    if (!day) return true;

    const dayDate = new Date(year, month, day);
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    dayDate.setHours(0, 0, 0, 0);

    return dayDate < todayDate;
  };

  const isPreviousMonthDisabled = () => {
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;

    return (
      previousYear < realCurrentYear ||
      (previousYear === realCurrentYear && previousMonth < realCurrentMonth)
    );
  };

  const isSelectedDay = (day, month, year) => {
    return (
      day === selectedDay && month === selectedMonth && year === selectedYear
    );
  };

  if (error) {
    console.error("Error loading appointments:", error);
  }

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
                <button
                  className={styles.navButton}
                  onClick={goToPreviousMonth}
                  disabled={isPreviousMonthDisabled()}
                  style={{
                    opacity: isPreviousMonthDisabled() ? 0.3 : 1,
                    cursor: isPreviousMonthDisabled()
                      ? "not-allowed"
                      : "pointer",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
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
                    className={
                      isSelectedDay(day, currentMonth, currentYear)
                        ? styles.dayButtonSelected
                        : styles.dayButton
                    }
                    onClick={() =>
                      handleDayClick(day, currentMonth, currentYear)
                    }
                    disabled={isDayDisabled(day, currentMonth, currentYear)}
                    style={{
                      opacity: isDayDisabled(day, currentMonth, currentYear)
                        ? 0.5
                        : 1,
                      cursor: isDayDisabled(day, currentMonth, currentYear)
                        ? "not-allowed"
                        : "pointer",
                    }}
                  >
                    {day && (
                      <div
                        className={
                          isSelectedDay(day, currentMonth, currentYear)
                            ? styles.dayNumberSelected
                            : styles.dayNumber
                        }
                      >
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
                <button className={styles.navButton} onClick={goToNextMonth}>
                  <svg
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
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
                    className={
                      isSelectedDay(day, nextMonth, nextYear)
                        ? styles.dayButtonSelected
                        : styles.dayButton
                    }
                    onClick={() => handleDayClick(day, nextMonth, nextYear)}
                    disabled={isDayDisabled(day, nextMonth, nextYear)}
                    style={{
                      opacity: isDayDisabled(day, nextMonth, nextYear)
                        ? 0.5
                        : 1,
                      cursor: isDayDisabled(day, nextMonth, nextYear)
                        ? "not-allowed"
                        : "pointer",
                    }}
                  >
                    {day && (
                      <div
                        className={
                          isSelectedDay(day, nextMonth, nextYear)
                            ? styles.dayNumberSelected
                            : styles.dayNumber
                        }
                      >
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

          {isLoading && (
            <p
              style={{ color: "white", fontSize: "14px", marginBottom: "16px" }}
            >
              Cargando horarios disponibles...
            </p>
          )}

          <div className={styles.timesContainer}>
            {availableTimes.map((time, index) => {
              const occupied = isTimeOccupied(time);
              return (
                <div
                  key={index}
                  className={
                    occupied ? styles.timeSlotOccupied : styles.timeSlot 
                  }
                  style={{
                    cursor: occupied ? "not-allowed" : "pointer",
                    position: "relative",
                  }}
                >
                  <p className={styles.timeText}>{time}</p>
                </div>
              );
            })}
          </div>

          {occupiedTimes.length > 0 && (
            <div
              style={{
                marginTop: "16px",
                padding: "12px",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "8px",
              }}
            >
              <p style={{ color: "white", fontSize: "14px", margin: 0 }}>
                <strong>Horarios ocupados:</strong> {occupiedTimes.join(", ")}
              </p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
