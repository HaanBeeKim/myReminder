import React, { useState } from "react";
import ReminderList from "./ReminderList";
import ReminderForm from "./ReminderForm";

const ReminderPage = () => {
  const [reminders, setReminders] = useState([]);

  const fetchReminders = () => {
    axios.get("http://localhost:8080/api/reminders")
      .then((res) => setReminders(res.data));
  };

  const handleAdd = (newReminder) => {
    setReminders([...reminders, newReminder]);
  };

  useEffect(() => {
    fetchReminders();
  }, []);

  return (
    <div>
      <ReminderForm onAdd={handleAdd} />
      <ReminderList reminders={reminders} />
    </div>
  );
};
