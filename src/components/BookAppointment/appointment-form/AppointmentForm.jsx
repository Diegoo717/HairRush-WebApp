import styles from "./AppointmentForm.module.css";
import ConfirmationModal from "../confirmationModal/ConfirmationModal";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export default function AppointmentForm() {
  const [pulseEnabled, setPulseEnabled] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");
  const [serviceError, setServiceError] = useState("");
  const [fieldsError, setFieldsError] = useState("");
  const [serverError, setServerError] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  function submitForm() {
    if (!name || !email || !date || !time || !service) {
      setFieldsError("Todos los campos son requeridos");
      return;
    }

    setFieldsError("");

    const nameErr = validateFullName(name);
    const emailErr = validateEmail(email);
    const dateErr = validateDate(date);
    const timeErr = validateTime(time);
    const serviceErr = validateService(service);

    setNameError(nameErr || "");
    setEmailError(emailErr || "");
    setDateError(dateErr || "");
    setTimeError(timeErr || "");
    setServiceError(serviceErr || "");

    if (!nameErr && !emailErr && !dateErr && !timeErr && !serviceErr) {
      mutation.mutate(
        {
          fullName: name,
          email: email,
          date: date,
          time: time,
          service: service,
        },
        {
          onSuccess: () => {
            setIsModalOpen(true);
            setServerError("");
          },
          onError: (error) => {
            const spanishMessage = translateErrorMessage(error.message);
            setServerError(spanishMessage);
          },
        }
      );
    }
  }

  const scheduleAppointment = async (userData) => {
    const response = await fetch(
      "https://hairrush-rest-api.diecode.lat/api/scheduleAppointment",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Error desconocido");
    }

    return data;
  };

  const mutation = useMutation({
    mutationFn: scheduleAppointment,
  });

  function translateErrorMessage(errorMessage) {
    const translations = {
      "All fields are required": "Todos los campos son obligatorios",
      "Server error": "Error del servidor",
      "Error desconocido": "Error desconocido",

      "Full name is required": "El nombre completo es obligatorio",
      "Name must be valid text": "El nombre debe ser texto válido",
      "Name cannot be empty": "El nombre no puede estar vacío",
      "Name must contain at least 8 characters":
        "El nombre debe contener al menos 8 caracteres",
      "Only letters, spaces and hyphens are allowed":
        "Solo se permiten letras, espacios y guiones",

      "Email is required": "El correo electrónico es obligatorio",
      "Email must be valid text": "El correo electrónico debe ser texto válido",
      "Enter a valid email address": "Ingresa un correo electrónico válido",

      "Date is required": "La fecha es obligatoria",
      "Date must have YYYY-MM-DD format":
        "La fecha debe tener el formato YYYY-MM-DD",
      "Month must be between 01 and 12": "El mes debe estar entre 01 y 12",
      "Day must be between 01 and 31": "El día debe estar entre 01 y 31",
      "Day is not valid for the selected month":
        "El día no es válido para el mes seleccionado",
      "Date must be at least 1 day in advance from today":
        "La fecha debe ser con al menos 1 día de antelación a partir de hoy",
      "Appointments can only be scheduled Monday to Friday":
        "Solo se puede agendar de lunes a viernes",

      "Time is required": "La hora es obligatoria",
      "Time must have HH:MM:SS format":
        "La hora debe tener el formato HH:MM:SS",
      "Seconds must be 00": "Los segundos deben ser 00",
      "Minutes must be 00 or 30": "Los minutos deben ser 00 o 30",
      "Service hours are 08:00 to 14:00 and 16:00 to 20:00":
        "El horario de atención es de 08:00 a 14:00 y de 16:00 a 20:00",

      "You must select a service": "Debes seleccionar un servicio",
      "Service must be valid text": "El servicio debe ser texto válido",
      "You must select a valid service": "Debes seleccionar un servicio válido",
      "Service must have at least 3 characters":
        "El servicio debe tener al menos 3 caracteres",
      "Service cannot have more than 40 characters":
        "El servicio no puede tener más de 40 caracteres",
      "Service can only contain letters and spaces":
        "El servicio solo puede contener letras y espacios",

      "Appointment scheduled already exists":
        "Ya existe una cita agendada para esa fecha y hora",
    };

    return translations[errorMessage] || errorMessage;
  }

  function closeModal() {
    setIsModalOpen(false);
    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setService("");
  }

  function validateFullName(fullName) {
    if (!fullName) {
      return "El nombre completo es obligatorio";
    }

    if (typeof fullName !== "string") {
      return "El nombre debe ser texto válido";
    }

    if (fullName.trim() === "") {
      return "El nombre no puede estar vacío";
    }

    if (fullName.replace(/\s/g, "").length < 8) {
      return "El nombre debe contener al menos 8 caracteres";
    }

    const regex = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s-]+$/;
    if (!regex.test(fullName)) {
      return "Solo se permiten letras, espacios y guiones";
    }

    return null;
  }

  function validateEmail(email) {
    if (!email) {
      return "El correo electrónico es obligatorio";
    }

    if (typeof email !== "string") {
      return "El correo electrónico debe ser texto válido";
    }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email.trim())) {
      return "Ingresa un correo electrónico válido";
    }

    return null;
  }

  function validateDate(date) {
    if (!date) {
      return "La fecha es obligatoria";
    }

    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(date)) {
      return "La fecha debe tener el formato YYYY-MM-DD";
    }

    const [year, month, day] = date.split("-").map(Number);

    if (month < 1 || month > 12) {
      return "El mes debe estar entre 01 y 12";
    }

    if (day < 1 || day > 31) {
      return "El día debe estar entre 01 y 31";
    }

    const lastDayOfMonth = new Date(year, month, 0).getDate();
    if (day > lastDayOfMonth) {
      return "El día no es válido para el mes seleccionado";
    }

    const inputDate = new Date(date + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    if (inputDate < tomorrow) {
      return "La fecha debe ser con al menos 1 día de antelación a partir de hoy";
    }

    if (inputDate.getDay() === 0 || inputDate.getDay() === 6) {
      return "Solo se puede agendar de lunes a viernes";
    }

    return null;
  }

  function validateTime(time) {
    if (!time) {
      return "La hora es obligatoria";
    }

    const regex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    if (!regex.test(time)) {
      return "La hora debe tener el formato HH:MM:SS";
    }

    const [hours, minutes, seconds] = time.split(":").map(Number);

    if (seconds !== 0) {
      return "Los segundos deben ser 00";
    }

    if (minutes !== 0 && minutes !== 30) {
      return "Los minutos deben ser 00 o 30";
    }

    if (hours < 8 || hours > 20 || (hours > 14 && hours < 16)) {
      return "El horario de atención es de 08:00 a 14:00 y de 16:00 a 20:00";
    }

    return null;
  }

  function validateService(service) {
    if (!service) {
      return "Debes seleccionar un servicio";
    }

    if (typeof service !== "string") {
      return "El servicio debe ser texto válido";
    }

    const trimmedService = service.trim();

    if (trimmedService === "") {
      return "Debes seleccionar un servicio válido";
    }

    if (trimmedService.length < 3) {
      return "El servicio debe tener al menos 3 caracteres";
    }

    if (trimmedService.length > 40) {
      return "El servicio no puede tener más de 40 caracteres";
    }

    const regex = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s]+$/;
    if (!regex.test(service)) {
      return "El servicio solo puede contener letras y espacios";
    }

    return null;
  }

  return (
    <>
      <form
        className={`${styles.formContainer} ${
          pulseEnabled ? styles.pulseEffect : ""
        }`}
      >
        <div className={styles.row}>
          <h1 className={styles.title}>Agenda tu cita</h1>
        </div>
        <div className={styles.row}>
          <input
            className={styles.smallInput}
            type="text"
            placeholder="Nombre Completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={styles.smallInput}
            type="email"
            placeholder="Correo Electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div
          className={
            nameError || emailError
              ? styles.errorContainerVisible
              : styles.errorContainer
          }
        >
          <div>
            <p className={styles.errorP}>{nameError}</p>
          </div>
          <div>
            <p className={styles.errorP}>{emailError}</p>
          </div>
        </div>
        <div className={styles.row}>
          <input
            type="date"
            className={styles.dateTimeInput}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            step="1"
            className={styles.dateTimeInput}
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div
          className={
            dateError || timeError
              ? styles.errorContainerVisible
              : styles.errorContainer
          }
        >
          <div>
            <p className={styles.errorP}>{dateError}</p>
          </div>
          <div>
            <p className={styles.errorP}>{timeError}</p>
          </div>
        </div>
        <div className={styles.row}>
          <select
            className={styles.selectService}
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Selecciona un servicio</option>
            <option value="Corte de cabello">Corte de cabello</option>
            <option value="Rasurado Tradicional">Rasurado Tradicional</option>
            <option value="Mascarilla de carbon activado">
              Mascarilla de carbon activado
            </option>
            <option value="Diesño y mantenimiento de barba y bigote">
              Diseño y mantenimiento de barba y bigote
            </option>
            <option value="Aplicacion de productos capilares">
              Aplicacion de productos capilares
            </option>
          </select>
        </div>
        <div
          className={
            serviceError ? styles.errorContainerVisible : styles.errorContainer
          }
        >
          <div>
            <p className={styles.errorP}>{serviceError}</p>
          </div>
        </div>

        <div
          className={
            serverError ? styles.errorContainerVisible : styles.errorContainer
          }
        >
          <div>
            <p className={styles.errorP}>{serverError}</p>
          </div>
        </div>

        {fieldsError && (
          <div className={styles.errorContainerVisible}>
            <div>
              <p className={styles.errorP}>{fieldsError}</p>
            </div>
          </div>
        )}
        <div className={styles.row}>
          <button
            type="button"
            className={styles.submitForm}
            onClick={submitForm}
          >
            Reservar
          </button>
        </div>
      </form>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        email={email}
      />
    </>
  );
}
