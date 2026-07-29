    const courses = [
      { name: "Introduction to Life Sciences", code: "BT1010", category: "Basic Sciences", instructor: "Dr. Gunjan Mehta", room: "", credit: "1 Credit", segment: "5-6", day: "Wednesday", date: "2026-10-07", start: "11:00", end: "11:55" },
      { name: "Introduction to Life Sciences", code: "BT1010", category: "Basic Sciences", instructor: "Dr. Gunjan Mehta", room: "", credit: "1 Credit", segment: "5-6", day: "Thursday", date: "2026-10-08", start: "10:00", end: "10:55" },
      { name: "Introduction to Life Sciences", code: "BT1010", category: "Basic Sciences", instructor: "Dr. Gunjan Mehta", room: "", credit: "1 Credit", segment: "5-6", day: "Monday", date: "2026-10-12", start: "09:00", end: "09:55" },
      { name: "Introduction to Life Sciences", code: "BT1010", category: "Basic Sciences", instructor: "Dr. Gunjan Mehta", room: "", credit: "1 Credit", segment: "5-6", day: "Wednesday", date: "2026-10-14", start: "11:00", end: "11:55" },
      { name: "Introduction to Life Sciences", code: "BT1010", category: "Basic Sciences", instructor: "Dr. Gunjan Mehta", room: "", credit: "1 Credit", segment: "5-6", day: "Thursday", date: "2026-10-15", start: "10:00", end: "10:55" },
      { name: "Introduction to Life Sciences", code: "BT1010", category: "Basic Sciences", instructor: "Dr. Gunjan Mehta", room: "", credit: "1 Credit", segment: "5-6", day: "Monday", date: "2026-10-19", start: "09:00", end: "09:55" },
      { name: "Introduction to Life Sciences", code: "BT1010", category: "Basic Sciences", instructor: "Dr. Gunjan Mehta", room: "", credit: "1 Credit", segment: "5-6", day: "Wednesday", date: "2026-10-21", start: "11:00", end: "11:55" },
      { name: "Introduction to Life Sciences", code: "BT1010", category: "Basic Sciences", instructor: "Dr. Gunjan Mehta", room: "", credit: "1 Credit", segment: "5-6", day: "Thursday", date: "2026-10-22", start: "10:00", end: "10:55" },
      { name: "Introduction to Life Sciences", code: "BT1010", category: "Basic Sciences", instructor: "Dr. Gunjan Mehta", room: "", credit: "1 Credit", segment: "5-6", day: "Monday", date: "2026-10-26", start: "09:00", end: "09:55" },
      { name: "Introduction to Life Sciences", code: "BT1010", category: "Basic Sciences", instructor: "Dr. Gunjan Mehta", room: "", credit: "1 Credit", segment: "5-6", day: "Wednesday", date: "2026-10-28", start: "11:00", end: "11:55" },
      { name: "Introduction to Life Sciences", code: "BT1010", category: "Basic Sciences", instructor: "Dr. Gunjan Mehta", room: "", credit: "1 Credit", segment: "5-6", day: "Thursday", date: "2026-10-29", start: "10:00", end: "10:55" },
      { name: "Introduction to Life Sciences", code: "BT1010", category: "Basic Sciences", instructor: "Dr. Gunjan Mehta", room: "", credit: "1 Credit", segment: "5-6", day: "Monday", date: "2026-11-02", start: "09:00", end: "09:55" },
      { name: "Introduction to Life Sciences", code: "BT1010", category: "Basic Sciences", instructor: "Dr. Gunjan Mehta", room: "", credit: "1 Credit", segment: "5-6", day: "Wednesday", date: "2026-11-04", start: "11:00", end: "11:55" },
      { name: "Introduction to Life Sciences", code: "BT1010", category: "Basic Sciences", instructor: "Dr. Gunjan Mehta", room: "", credit: "1 Credit", segment: "5-6", day: "Thursday", date: "2026-11-05", start: "10:00", end: "10:55" },
      { name: "Introduction to Life Sciences", code: "BT1010", category: "Basic Sciences", instructor: "Dr. Gunjan Mehta", room: "", credit: "1 Credit", segment: "5-6", day: "Monday", date: "2026-11-09", start: "09:00", end: "09:55" },
      { name: "Introduction to Life Sciences", code: "BT1010", category: "Basic Sciences", instructor: "Dr. Gunjan Mehta", room: "", credit: "1 Credit", segment: "5-6", day: "Wednesday", date: "2026-11-11", start: "11:00", end: "11:55" },
      { name: "Introduction to Life Sciences", code: "BT1010", category: "Basic Sciences", instructor: "Dr. Gunjan Mehta", room: "", credit: "1 Credit", segment: "5-6", day: "Thursday", date: "2026-11-12", start: "10:00", end: "10:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Monday", date: "2026-07-27", start: "11:01", end: "11:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Wednesday", date: "2026-07-29", start: "10:00", end: "10:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Thursday", date: "2026-07-30", start: "09:00", end: "09:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Monday", date: "2026-08-03", start: "11:01", end: "11:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Wednesday", date: "2026-08-05", start: "10:00", end: "10:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Thursday", date: "2026-08-06", start: "09:00", end: "09:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Monday", date: "2026-08-10", start: "11:01", end: "11:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Wednesday", date: "2026-08-12", start: "10:00", end: "10:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Thursday", date: "2026-08-13", start: "09:00", end: "09:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Monday", date: "2026-08-17", start: "11:01", end: "11:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Wednesday", date: "2026-08-19", start: "10:00", end: "10:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Thursday", date: "2026-08-20", start: "09:00", end: "09:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Monday", date: "2026-08-24", start: "11:01", end: "11:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Wednesday", date: "2026-08-26", start: "10:00", end: "10:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Thursday", date: "2026-08-27", start: "09:00", end: "09:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Monday", date: "2026-08-31", start: "11:01", end: "11:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Wednesday", date: "2026-09-02", start: "10:00", end: "10:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Thursday", date: "2026-09-03", start: "09:00", end: "09:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Monday", date: "2026-09-07", start: "11:01", end: "11:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Wednesday", date: "2026-09-09", start: "10:00", end: "10:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Thursday", date: "2026-09-10", start: "09:00", end: "09:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Monday", date: "2026-09-14", start: "11:01", end: "11:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Wednesday", date: "2026-09-16", start: "10:00", end: "10:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Thursday", date: "2026-09-17", start: "09:00", end: "09:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Monday", date: "2026-09-21", start: "11:01", end: "11:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Wednesday", date: "2026-09-23", start: "10:00", end: "10:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Thursday", date: "2026-09-24", start: "09:00", end: "09:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Monday", date: "2026-09-28", start: "11:01", end: "11:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Wednesday", date: "2026-09-30", start: "10:00", end: "10:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Thursday", date: "2026-10-01", start: "09:00", end: "09:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Monday", date: "2026-10-05", start: "11:01", end: "11:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Wednesday", date: "2026-10-07", start: "10:00", end: "10:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Thursday", date: "2026-10-08", start: "09:00", end: "09:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Monday", date: "2026-10-12", start: "11:01", end: "11:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Wednesday", date: "2026-10-14", start: "10:00", end: "10:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Thursday", date: "2026-10-15", start: "09:00", end: "09:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Monday", date: "2026-10-19", start: "11:01", end: "11:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Wednesday", date: "2026-10-21", start: "10:00", end: "10:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Thursday", date: "2026-10-22", start: "09:00", end: "09:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Monday", date: "2026-10-26", start: "11:01", end: "11:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Wednesday", date: "2026-10-28", start: "10:00", end: "10:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Thursday", date: "2026-10-29", start: "09:00", end: "09:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Monday", date: "2026-11-02", start: "11:01", end: "11:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Wednesday", date: "2026-11-04", start: "10:00", end: "10:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Thursday", date: "2026-11-05", start: "09:00", end: "09:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Monday", date: "2026-11-09", start: "11:01", end: "11:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Wednesday", date: "2026-11-11", start: "10:00", end: "10:55" },
      { name: "Discrete Maths for Computer Science", code: "CS1010", category: "Departmental Core Theory", instructor: "Dr. Rogers Mathew", room: "", credit: "3 Credits", segment: "1-6", day: "Thursday", date: "2026-11-12", start: "09:00", end: "09:55" },
      { name: "Calculus - 1", code: "MA1110", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "1-2", day: "Monday", date: "2026-07-27", start: "10:00", end: "10:55" },
      { name: "Calculus - 1", code: "MA1110", category: "Basic Sciences", instructor: "Unspecified", room: "LH6", credit: "1 Credit", segment: "1-2", day: "Wednesday", date: "2026-07-29", start: "09:00", end: "09:55" },
      { name: "Calculus - 1", code: "MA1110", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "1-2", day: "Thursday", date: "2026-07-30", start: "11:00", end: "11:55" },
      { name: "Calculus - 1", code: "MA1110", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "1-2", day: "Monday", date: "2026-08-03", start: "10:00", end: "10:55" },
      { name: "Calculus - 1", code: "MA1110", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "1-2", day: "Wednesday", date: "2026-08-05", start: "09:00", end: "09:55" },
      { name: "Calculus - 1", code: "MA1110", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "1-2", day: "Thursday", date: "2026-08-06", start: "11:00", end: "11:55" },
      { name: "Calculus - 1", code: "MA1110", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "1-2", day: "Monday", date: "2026-08-10", start: "10:00", end: "10:55" },
      { name: "Calculus - 1", code: "MA1110", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "1-2", day: "Wednesday", date: "2026-08-12", start: "09:00", end: "09:55" },
      { name: "Calculus - 1", code: "MA1110", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "1-2", day: "Thursday", date: "2026-08-13", start: "11:00", end: "11:55" },
      { name: "Calculus - 1", code: "MA1110", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "1-2", day: "Monday", date: "2026-08-17", start: "10:00", end: "10:55" },
      { name: "Calculus - 1", code: "MA1110", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "1-2", day: "Wednesday", date: "2026-08-19", start: "09:00", end: "09:55" },
      { name: "Calculus - 1", code: "MA1110", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "1-2", day: "Thursday", date: "2026-08-20", start: "11:00", end: "11:55" },
      { name: "Calculus - 1", code: "MA1110", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "1-2", day: "Monday", date: "2026-08-24", start: "10:00", end: "10:55" },
      { name: "Calculus - 1", code: "MA1110", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "1-2", day: "Wednesday", date: "2026-08-26", start: "09:00", end: "09:55" },
      { name: "Calculus - 1", code: "MA1110", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "1-2", day: "Thursday", date: "2026-08-27", start: "11:00", end: "11:55" },
      { name: "Calculus - 2", code: "MA1220", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-4", day: "Monday", date: "2026-08-31", start: "10:00", end: "10:55" },
      { name: "Calculus - 2", code: "MA1220", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-4", day: "Wednesday", date: "2026-09-02", start: "09:00", end: "09:55" },
      { name: "Calculus - 2", code: "MA1220", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-4", day: "Thursday", date: "2026-09-03", start: "11:00", end: "11:55" },
      { name: "Calculus - 2", code: "MA1220", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-4", day: "Monday", date: "2026-09-07", start: "10:00", end: "10:55" },
      { name: "Calculus - 2", code: "MA1220", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-4", day: "Wednesday", date: "2026-09-09", start: "09:00", end: "09:55" },
      { name: "Calculus - 2", code: "MA1220", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-4", day: "Thursday", date: "2026-09-10", start: "11:00", end: "11:55" },
      { name: "Calculus - 2", code: "MA1220", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-4", day: "Monday", date: "2026-09-14", start: "10:00", end: "10:55" },
      { name: "Calculus - 2", code: "MA1220", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-4", day: "Wednesday", date: "2026-09-16", start: "09:00", end: "09:55" },
      { name: "Calculus - 2", code: "MA1220", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-4", day: "Thursday", date: "2026-09-17", start: "11:00", end: "11:55" },
      { name: "Calculus - 2", code: "MA1220", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-4", day: "Monday", date: "2026-09-21", start: "10:00", end: "10:55" },
      { name: "Calculus - 2", code: "MA1220", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-4", day: "Wednesday", date: "2026-09-23", start: "09:00", end: "09:55" },
      { name: "Calculus - 2", code: "MA1220", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-4", day: "Thursday", date: "2026-09-24", start: "11:00", end: "11:55" },
      { name: "Calculus - 2", code: "MA1220", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-4", day: "Monday", date: "2026-09-28", start: "10:00", end: "10:55" },
      { name: "Calculus - 2", code: "MA1220", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-4", day: "Wednesday", date: "2026-09-30", start: "09:00", end: "09:55" },
      { name: "Calculus - 2", code: "MA1220", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-4", day: "Thursday", date: "2026-10-01", start: "11:00", end: "11:55" },
      { name: "Calculus - 2", code: "MA1220", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-4", day: "Monday", date: "2026-10-05", start: "10:00", end: "10:55" },
      { name: "Environmental Chemistry", code: "CY1010", category: "Basic Sciences", instructor: "Dr. Abhijit Sau", room: "", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-07-27", start: "14:30", end: "15:55" },
      { name: "Environmental Chemistry", code: "CY1010", category: "Basic Sciences", instructor: "Dr. Abhijit Sau", room: "", credit: "2 Credit", segment: "1-4", day: "Thursday", date: "2026-07-30", start: "16:00", end: "17:25" },
      { name: "Environmental Chemistry", code: "CY1010", category: "Basic Sciences", instructor: "Dr. Abhijit Sau", room: "", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-08-03", start: "14:30", end: "15:55" },
      { name: "Environmental Chemistry", code: "CY1010", category: "Basic Sciences", instructor: "Dr. Abhijit Sau", room: "", credit: "2 Credit", segment: "1-4", day: "Thursday", date: "2026-08-06", start: "16:00", end: "17:25" },
      { name: "Environmental Chemistry", code: "CY1010", category: "Basic Sciences", instructor: "Dr. Abhijit Sau", room: "", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-08-10", start: "14:30", end: "15:55" },
      { name: "Environmental Chemistry", code: "CY1010", category: "Basic Sciences", instructor: "Dr. Abhijit Sau", room: "", credit: "2 Credit", segment: "1-4", day: "Thursday", date: "2026-08-13", start: "16:00", end: "17:25" },
      { name: "Environmental Chemistry", code: "CY1010", category: "Basic Sciences", instructor: "Dr. Abhijit Sau", room: "", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-08-17", start: "14:30", end: "15:55" },
      { name: "Environmental Chemistry", code: "CY1010", category: "Basic Sciences", instructor: "Dr. Abhijit Sau", room: "", credit: "2 Credit", segment: "1-4", day: "Thursday", date: "2026-08-20", start: "16:00", end: "17:25" },
      { name: "Environmental Chemistry", code: "CY1010", category: "Basic Sciences", instructor: "Dr. Abhijit Sau", room: "", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-08-24", start: "14:30", end: "15:55" },
      { name: "Environmental Chemistry", code: "CY1010", category: "Basic Sciences", instructor: "Dr. Abhijit Sau", room: "", credit: "2 Credit", segment: "1-4", day: "Thursday", date: "2026-08-27", start: "16:00", end: "17:25" },
      { name: "Environmental Chemistry", code: "CY1010", category: "Basic Sciences", instructor: "Dr. Abhijit Sau", room: "", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-08-31", start: "14:30", end: "15:55" },
      { name: "Environmental Chemistry", code: "CY1010", category: "Basic Sciences", instructor: "Dr. Abhijit Sau", room: "", credit: "2 Credit", segment: "1-4", day: "Thursday", date: "2026-09-03", start: "16:00", end: "17:25" },
      { name: "Environmental Chemistry", code: "CY1010", category: "Basic Sciences", instructor: "Dr. Abhijit Sau", room: "", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-09-07", start: "14:30", end: "15:55" },
      { name: "Environmental Chemistry", code: "CY1010", category: "Basic Sciences", instructor: "Dr. Abhijit Sau", room: "", credit: "2 Credit", segment: "1-4", day: "Thursday", date: "2026-09-10", start: "16:00", end: "17:25" },
      { name: "Environmental Chemistry", code: "CY1010", category: "Basic Sciences", instructor: "Dr. Abhijit Sau", room: "", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-09-14", start: "14:30", end: "15:55" },
      { name: "Environmental Chemistry", code: "CY1010", category: "Basic Sciences", instructor: "Dr. Abhijit Sau", room: "", credit: "2 Credit", segment: "1-4", day: "Thursday", date: "2026-09-17", start: "16:00", end: "17:25" },
      { name: "Environmental Chemistry", code: "CY1010", category: "Basic Sciences", instructor: "Dr. Abhijit Sau", room: "", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-09-21", start: "14:30", end: "15:55" },
      { name: "Environmental Chemistry", code: "CY1010", category: "Basic Sciences", instructor: "Dr. Abhijit Sau", room: "", credit: "2 Credit", segment: "1-4", day: "Thursday", date: "2026-09-24", start: "16:00", end: "17:25" },
      { name: "Environmental Chemistry", code: "CY1010", category: "Basic Sciences", instructor: "Dr. Abhijit Sau", room: "", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-09-28", start: "14:30", end: "15:55" },
      { name: "Environmental Chemistry", code: "CY1010", category: "Basic Sciences", instructor: "Dr. Abhijit Sau", room: "", credit: "2 Credit", segment: "1-4", day: "Thursday", date: "2026-10-01", start: "16:00", end: "17:25" },
      { name: "Environmental Chemistry", code: "CY1010", category: "Basic Sciences", instructor: "Dr. Abhijit Sau", room: "", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-10-05", start: "14:30", end: "15:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Monday", date: "2026-08-31", start: "09:00", end: "09:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-09-02", start: "11:00", end: "11:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Thursday", date: "2026-09-03", start: "10:00", end: "10:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Monday", date: "2026-09-07", start: "09:00", end: "09:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-09-09", start: "11:00", end: "11:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Thursday", date: "2026-09-10", start: "10:00", end: "10:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Monday", date: "2026-09-14", start: "09:00", end: "09:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-09-16", start: "11:00", end: "11:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Thursday", date: "2026-09-17", start: "10:00", end: "10:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Monday", date: "2026-09-21", start: "09:00", end: "09:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-09-23", start: "11:00", end: "11:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Thursday", date: "2026-09-24", start: "10:00", end: "10:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Monday", date: "2026-09-28", start: "09:00", end: "09:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-09-30", start: "11:00", end: "11:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Thursday", date: "2026-10-01", start: "10:00", end: "10:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Monday", date: "2026-10-05", start: "09:00", end: "09:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-10-07", start: "11:00", end: "11:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Thursday", date: "2026-10-08", start: "10:00", end: "10:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Monday", date: "2026-10-12", start: "09:00", end: "09:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-10-14", start: "11:00", end: "11:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Thursday", date: "2026-10-15", start: "10:00", end: "10:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Monday", date: "2026-10-19", start: "09:00", end: "09:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-10-21", start: "11:00", end: "11:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Thursday", date: "2026-10-22", start: "10:00", end: "10:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Monday", date: "2026-10-26", start: "09:00", end: "09:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-10-28", start: "11:00", end: "11:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Thursday", date: "2026-10-29", start: "10:00", end: "10:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Monday", date: "2026-11-02", start: "09:00", end: "09:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-11-04", start: "11:00", end: "11:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Thursday", date: "2026-11-05", start: "10:00", end: "10:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Monday", date: "2026-11-09", start: "09:00", end: "09:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-11-11", start: "11:00", end: "11:55" },
      { name: "Modern Physics", code: "EP1108", category: "Basic Sciences", instructor: "Dr. Vandana Shan", room: "", credit: "2 Credit", segment: "3-6", day: "Thursday", date: "2026-11-12", start: "10:00", end: "10:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "LH5", credit: "3 Credit", segment: "1-6", day: "Tuesday", date: "2026-07-28", start: "11:00", end: "11:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-07-29", start: "14:30", end: "17:30" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-07-29", start: "14:30", end: "15:29" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Friday", date: "2026-07-31", start: "10:00", end: "10:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Tuesday", date: "2026-08-04", start: "11:00", end: "11:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-08-05", start: "14:30", end: "17:30" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-08-05", start: "14:30", end: "15:29" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Friday", date: "2026-08-07", start: "10:00", end: "10:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Tuesday", date: "2026-08-11", start: "11:00", end: "11:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-08-12", start: "14:30", end: "17:30" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-08-12", start: "14:30", end: "15:29" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Friday", date: "2026-08-14", start: "10:00", end: "10:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Tuesday", date: "2026-08-18", start: "11:00", end: "11:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-08-19", start: "14:30", end: "17:30" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-08-19", start: "14:30", end: "15:29" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Friday", date: "2026-08-21", start: "10:00", end: "10:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Tuesday", date: "2026-08-25", start: "11:00", end: "11:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-08-26", start: "14:30", end: "15:29" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-08-26", start: "14:30", end: "17:30" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Friday", date: "2026-08-28", start: "10:00", end: "10:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Tuesday", date: "2026-09-01", start: "11:00", end: "11:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-09-02", start: "14:30", end: "15:29" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-09-02", start: "14:30", end: "17:30" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Friday", date: "2026-09-04", start: "10:00", end: "10:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Tuesday", date: "2026-09-08", start: "11:00", end: "11:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-09-09", start: "14:30", end: "15:29" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-09-09", start: "14:30", end: "17:30" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Friday", date: "2026-09-11", start: "10:00", end: "10:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Tuesday", date: "2026-09-15", start: "11:00", end: "11:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-09-16", start: "14:30", end: "17:30" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-09-16", start: "14:30", end: "15:29" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Friday", date: "2026-09-18", start: "10:00", end: "10:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Tuesday", date: "2026-09-22", start: "11:00", end: "11:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-09-23", start: "14:30", end: "15:29" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-09-23", start: "14:30", end: "17:30" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Friday", date: "2026-09-25", start: "10:00", end: "10:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Tuesday", date: "2026-09-29", start: "11:00", end: "11:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-09-30", start: "14:30", end: "15:29" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-09-30", start: "14:30", end: "17:30" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Friday", date: "2026-10-02", start: "10:00", end: "10:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Tuesday", date: "2026-10-06", start: "11:00", end: "11:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-10-07", start: "14:30", end: "15:29" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-10-07", start: "14:30", end: "17:30" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Friday", date: "2026-10-09", start: "10:00", end: "10:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Tuesday", date: "2026-10-13", start: "11:00", end: "11:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-10-14", start: "14:30", end: "15:29" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-10-14", start: "14:30", end: "17:30" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Friday", date: "2026-10-16", start: "10:00", end: "10:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Tuesday", date: "2026-10-20", start: "11:00", end: "11:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-10-21", start: "14:30", end: "17:30" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-10-21", start: "14:30", end: "15:29" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Friday", date: "2026-10-23", start: "10:00", end: "10:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Tuesday", date: "2026-10-27", start: "11:00", end: "11:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-10-28", start: "14:30", end: "17:30" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-10-28", start: "14:30", end: "15:29" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Friday", date: "2026-10-30", start: "10:00", end: "10:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Tuesday", date: "2026-11-03", start: "11:00", end: "11:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-11-04", start: "14:30", end: "15:29" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-11-04", start: "14:30", end: "17:30" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Friday", date: "2026-11-06", start: "10:00", end: "10:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Tuesday", date: "2026-11-10", start: "11:00", end: "11:55" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-11-11", start: "14:30", end: "17:30" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Wednesday", date: "2026-11-11", start: "14:30", end: "15:29" },
      { name: "Intro To Programming", code: "ID1063", category: "Basic Engineering Skills", instructor: "Dr. N R Aravind", room: "", credit: "3 Credit", segment: "1-6", day: "Friday", date: "2026-11-13", start: "10:00", end: "10:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Tuesday", date: "2026-09-01", start: "10:00", end: "10:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Thursday", date: "2026-09-03", start: "12:00", end: "12:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Friday", date: "2026-09-04", start: "09:00", end: "09:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Tuesday", date: "2026-09-08", start: "10:00", end: "10:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Thursday", date: "2026-09-10", start: "12:00", end: "12:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Friday", date: "2026-09-11", start: "09:00", end: "09:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Tuesday", date: "2026-09-15", start: "10:00", end: "10:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Thursday", date: "2026-09-17", start: "12:00", end: "12:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Friday", date: "2026-09-18", start: "09:00", end: "09:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Tuesday", date: "2026-09-22", start: "10:00", end: "10:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Thursday", date: "2026-09-24", start: "12:00", end: "12:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Friday", date: "2026-09-25", start: "09:00", end: "09:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Tuesday", date: "2026-09-29", start: "10:00", end: "10:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Thursday", date: "2026-10-01", start: "12:00", end: "12:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Friday", date: "2026-10-02", start: "09:00", end: "09:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Tuesday", date: "2026-10-06", start: "10:00", end: "10:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Thursday", date: "2026-10-08", start: "12:00", end: "12:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Friday", date: "2026-10-09", start: "09:00", end: "09:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Tuesday", date: "2026-10-13", start: "10:00", end: "10:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Thursday", date: "2026-10-15", start: "12:00", end: "12:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Friday", date: "2026-10-16", start: "09:00", end: "09:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Tuesday", date: "2026-10-20", start: "10:00", end: "10:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Thursday", date: "2026-10-22", start: "12:00", end: "12:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Friday", date: "2026-10-23", start: "09:00", end: "09:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Tuesday", date: "2026-10-27", start: "10:00", end: "10:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Thursday", date: "2026-10-29", start: "12:00", end: "12:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Friday", date: "2026-10-30", start: "09:00", end: "09:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Tuesday", date: "2026-11-03", start: "10:00", end: "10:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Thursday", date: "2026-11-05", start: "12:00", end: "12:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Friday", date: "2026-11-06", start: "09:00", end: "09:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Tuesday", date: "2026-11-10", start: "10:00", end: "10:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Thursday", date: "2026-11-12", start: "12:00", end: "12:55" },
      { name: "Intro to Computing", code: "CS1000", category: "Departmental Core Theory", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "3-6", day: "Friday", date: "2026-11-13", start: "09:00", end: "09:55" },
      { name: "Intro To MSME", code: "MS1990", category: "Departmental Core Theory", instructor: "Dr. Hemam Rachn", room: "", credit: "1 Credit", segment: "1-2", day: "Monday", date: "2026-07-27", start: "11:01", end: "11:55" },
      { name: "Intro To MSME", code: "MS1990", category: "Departmental Core Theory", instructor: "Dr. Hemam Rachn", room: "LH7", credit: "1 Credit", segment: "1-2", day: "Wednesday", date: "2026-07-29", start: "10:00", end: "10:55" },
      { name: "Intro To MSME", code: "MS1990", category: "Departmental Core Theory", instructor: "Dr. Hemam Rachn", room: "", credit: "1 Credit", segment: "1-2", day: "Thursday", date: "2026-07-30", start: "09:00", end: "09:55" },
      { name: "Intro To MSME", code: "MS1990", category: "Departmental Core Theory", instructor: "Dr. Hemam Rachn", room: "", credit: "1 Credit", segment: "1-2", day: "Monday", date: "2026-08-03", start: "11:01", end: "11:55" },
      { name: "Intro To MSME", code: "MS1990", category: "Departmental Core Theory", instructor: "Dr. Hemam Rachn", room: "", credit: "1 Credit", segment: "1-2", day: "Wednesday", date: "2026-08-05", start: "10:00", end: "10:55" },
      { name: "Intro To MSME", code: "MS1990", category: "Departmental Core Theory", instructor: "Dr. Hemam Rachn", room: "", credit: "1 Credit", segment: "1-2", day: "Thursday", date: "2026-08-06", start: "09:00", end: "09:55" },
      { name: "Intro To MSME", code: "MS1990", category: "Departmental Core Theory", instructor: "Dr. Hemam Rachn", room: "", credit: "1 Credit", segment: "1-2", day: "Monday", date: "2026-08-10", start: "11:01", end: "11:55" },
      { name: "Intro To MSME", code: "MS1990", category: "Departmental Core Theory", instructor: "Dr. Hemam Rachn", room: "", credit: "1 Credit", segment: "1-2", day: "Wednesday", date: "2026-08-12", start: "10:00", end: "10:55" },
      { name: "Intro To MSME", code: "MS1990", category: "Departmental Core Theory", instructor: "Dr. Hemam Rachn", room: "", credit: "1 Credit", segment: "1-2", day: "Thursday", date: "2026-08-13", start: "09:00", end: "09:55" },
      { name: "Intro To MSME", code: "MS1990", category: "Departmental Core Theory", instructor: "Dr. Hemam Rachn", room: "", credit: "1 Credit", segment: "1-2", day: "Monday", date: "2026-08-17", start: "11:01", end: "11:55" },
      { name: "Intro To MSME", code: "MS1990", category: "Departmental Core Theory", instructor: "Dr. Hemam Rachn", room: "", credit: "1 Credit", segment: "1-2", day: "Wednesday", date: "2026-08-19", start: "10:00", end: "10:55" },
      { name: "Intro To MSME", code: "MS1990", category: "Departmental Core Theory", instructor: "Dr. Hemam Rachn", room: "", credit: "1 Credit", segment: "1-2", day: "Thursday", date: "2026-08-20", start: "09:00", end: "09:55" },
      { name: "Intro To MSME", code: "MS1990", category: "Departmental Core Theory", instructor: "Dr. Hemam Rachn", room: "", credit: "1 Credit", segment: "1-2", day: "Monday", date: "2026-08-24", start: "11:01", end: "11:55" },
      { name: "Intro To MSME", code: "MS1990", category: "Departmental Core Theory", instructor: "Dr. Hemam Rachn", room: "", credit: "1 Credit", segment: "1-2", day: "Wednesday", date: "2026-08-26", start: "10:00", end: "10:55" },
      { name: "Intro To MSME", code: "MS1990", category: "Departmental Core Theory", instructor: "Dr. Hemam Rachn", room: "", credit: "1 Credit", segment: "1-2", day: "Thursday", date: "2026-08-27", start: "09:00", end: "09:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "LH13", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-07-27", start: "12:00", end: "12:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "LH13", credit: "2 Credit", segment: "1-4", day: "Tuesday", date: "2026-07-28", start: "09:00", end: "09:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Friday", date: "2026-07-31", start: "11:00", end: "11:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-08-03", start: "12:00", end: "12:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Tuesday", date: "2026-08-04", start: "09:00", end: "09:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Friday", date: "2026-08-07", start: "11:00", end: "11:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-08-10", start: "12:00", end: "12:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Tuesday", date: "2026-08-11", start: "09:00", end: "09:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Friday", date: "2026-08-14", start: "11:00", end: "11:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-08-17", start: "12:00", end: "12:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Tuesday", date: "2026-08-18", start: "09:00", end: "09:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Friday", date: "2026-08-21", start: "11:00", end: "11:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-08-24", start: "12:00", end: "12:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Tuesday", date: "2026-08-25", start: "09:00", end: "09:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Friday", date: "2026-08-28", start: "11:00", end: "11:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-08-31", start: "12:00", end: "12:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Tuesday", date: "2026-09-01", start: "09:00", end: "09:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Friday", date: "2026-09-04", start: "11:00", end: "11:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-09-07", start: "12:00", end: "12:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Tuesday", date: "2026-09-08", start: "09:00", end: "09:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Friday", date: "2026-09-11", start: "11:00", end: "11:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-09-14", start: "12:00", end: "12:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Tuesday", date: "2026-09-15", start: "09:00", end: "09:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Friday", date: "2026-09-18", start: "11:00", end: "11:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-09-21", start: "12:00", end: "12:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Tuesday", date: "2026-09-22", start: "09:00", end: "09:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Friday", date: "2026-09-25", start: "11:00", end: "11:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-09-28", start: "12:00", end: "12:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Tuesday", date: "2026-09-29", start: "09:00", end: "09:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Friday", date: "2026-10-02", start: "11:00", end: "11:55" },
      { name: "Maths for Physics", code: "EP1118", category: "Basic Sciences", instructor: "Dr. Alok Kumar Pa", room: "", credit: "2 Credit", segment: "1-4", day: "Monday", date: "2026-10-05", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Tuesday", date: "2026-09-01", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-09-02", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Friday", date: "2026-09-04", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Tuesday", date: "2026-09-08", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-09-09", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Friday", date: "2026-09-11", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Tuesday", date: "2026-09-15", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-09-16", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Friday", date: "2026-09-18", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Tuesday", date: "2026-09-22", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-09-23", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Friday", date: "2026-09-25", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Tuesday", date: "2026-09-29", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-09-30", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Friday", date: "2026-10-02", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Tuesday", date: "2026-10-06", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-10-07", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Friday", date: "2026-10-09", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Tuesday", date: "2026-10-13", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-10-14", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Friday", date: "2026-10-16", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Tuesday", date: "2026-10-20", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-10-21", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Friday", date: "2026-10-23", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Tuesday", date: "2026-10-27", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-10-28", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Friday", date: "2026-10-30", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Tuesday", date: "2026-11-03", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-11-04", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Friday", date: "2026-11-06", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Tuesday", date: "2026-11-10", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Wednesday", date: "2026-11-11", start: "12:00", end: "12:55" },
      { name: "Communication Skills", code: "LA1760", category: "Liberal Arts Elective", instructor: "Unspecified", room: "", credit: "2 Credit", segment: "3-6", day: "Friday", date: "2026-11-13", start: "12:00", end: "12:55" }
    ];

    let activeDay = "today";
    let activeSeg = "all";
    let searchQuery = "";

    const MY_COURSES_KEY = "esScheduleMyCourses";

    function getUniqueCourseList() {
      const seen = new Map();
      courses.forEach((item) => {
        if (!seen.has(item.code)) {
          seen.set(item.code, { code: item.code, name: item.name, category: item.category, instructor: item.instructor });
        }
      });
      return Array.from(seen.values()).sort((a, b) => a.name.localeCompare(b.name));
    }

    function loadMyCourses() {
      try {
        const raw = localStorage.getItem(MY_COURSES_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : null;
      } catch (e) {
        return null;
      }
    }

    function saveMyCourses(codes) {
      try {
        localStorage.setItem(MY_COURSES_KEY, JSON.stringify(codes));
      } catch (e) {
        /* localStorage unavailable, ignore */
      }
    }

    let myCourses = loadMyCourses(); // null = never chosen yet, [] = chose none, [...] = chosen codes
    let pendingSelection = new Set(myCourses || []);

    function populateCourseModal() {
      const list = document.getElementById("modal-course-list");
      list.innerHTML = "";
      getUniqueCourseList().forEach((c) => {
        const item = document.createElement("label");
        item.className = `modal-course-item ${pendingSelection.has(c.code) ? "selected" : ""}`;
        item.innerHTML = `
          <input type="checkbox" data-code="${c.code}" ${pendingSelection.has(c.code) ? "checked" : ""} />
          <div>
            <div class="modal-course-name">${c.name}</div>
            <div class="modal-course-meta">${c.code} • ${c.category}${c.instructor && c.instructor !== "Unspecified" ? " • " + c.instructor : ""}</div>
          </div>
        `;
        const checkbox = item.querySelector("input");
        checkbox.addEventListener("change", () => {
          if (checkbox.checked) {
            pendingSelection.add(c.code);
            item.classList.add("selected");
          } else {
            pendingSelection.delete(c.code);
            item.classList.remove("selected");
          }
        });
        list.appendChild(item);
      });
    }

    function openCourseModal() {
      pendingSelection = new Set(myCourses || []);
      populateCourseModal();
      document.getElementById("my-courses-modal").classList.add("open");
    }

    function closeCourseModal() {
      document.getElementById("my-courses-modal").classList.remove("open");
    }

    /* ---------- Weekly Timetable (Google Calendar style) ---------- */
    const CAL_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const CAL_HOUR_START = 8;
    const CAL_HOUR_END = 19;
    const CAL_ROW_HEIGHT = 60; // px per hour

    function timeToMinutes(t) {
      const [h, m] = t.split(":").map(Number);
      return h * 60 + m;
    }

    function getWeekMonday(d) {
      const date = new Date(d);
      date.setHours(0, 0, 0, 0);
      const day = date.getDay(); // 0=Sun..6=Sat
      const diff = day === 0 ? -6 : 1 - day;
      date.setDate(date.getDate() + diff);
      return date;
    }

    function formatWeekRange(monday) {
      const friday = new Date(monday.getTime() + 4 * 24 * 60 * 60 * 1000);
      const startStr = monday.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      const endStr = friday.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      return `${startStr} – ${endStr}`;
    }

    // The schedule/semester begins the week of July 27, 2026 — never navigate earlier than that.
    const MIN_CALENDAR_WEEK_START = getWeekMonday(new Date("2026-07-27T00:00:00"));

    function clampWeekStart(date) {
      return date < MIN_CALENDAR_WEEK_START ? new Date(MIN_CALENDAR_WEEK_START) : date;
    }

    function getWeekStatus(weekStart) {
      const currentWeekStart = getWeekMonday(new Date());
      if (weekStart.getTime() === currentWeekStart.getTime()) return { label: "This Week", cls: "current" };
      if (weekStart.getTime() > currentWeekStart.getTime()) return { label: "Upcoming", cls: "upcoming" };
      return { label: "Past", cls: "past" };
    }

    let calendarWeekStart = clampWeekStart(getWeekMonday(new Date()));

    function getWeeklyEvents() {
      const hasMyCourses = Array.isArray(myCourses) && myCourses.length > 0;
      const source = hasMyCourses ? courses.filter((c) => myCourses.includes(c.code)) : courses;

      const weekStart = calendarWeekStart;
      const weekEnd = new Date(weekStart.getTime() + 5 * 24 * 60 * 60 * 1000); // Mon 00:00 through end of Fri

      return source.filter((item) => {
        if (!item.date) return false;
        const d = new Date(item.date + "T00:00:00");
        return d >= weekStart && d < weekEnd;
      });
    }

    function layoutDayEvents(dayEvents) {
      const events = dayEvents.map((e) => ({ ...e, _start: timeToMinutes(e.start), _end: timeToMinutes(e.end) }));
      events.sort((a, b) => a._start - b._start || a._end - b._end);

      const clusters = [];
      let current = [];
      let clusterEnd = -1;
      events.forEach((ev) => {
        if (current.length === 0 || ev._start < clusterEnd) {
          current.push(ev);
          clusterEnd = Math.max(clusterEnd, ev._end);
        } else {
          clusters.push(current);
          current = [ev];
          clusterEnd = ev._end;
        }
      });
      if (current.length) clusters.push(current);

      clusters.forEach((cluster) => {
        const colEnds = [];
        cluster.forEach((ev) => {
          let placed = false;
          for (let i = 0; i < colEnds.length; i++) {
            if (colEnds[i] <= ev._start) {
              ev._col = i;
              colEnds[i] = ev._end;
              placed = true;
              break;
            }
          }
          if (!placed) {
            ev._col = colEnds.length;
            colEnds.push(ev._end);
          }
        });
        cluster.forEach((ev) => {
          ev._totalCols = colEnds.length;
        });
      });

      return events;
    }

    function renderWeeklyTimetable() {
      const grid = document.getElementById("calendar-grid");
      grid.innerHTML = "";

      const hasMyCourses = Array.isArray(myCourses) && myCourses.length > 0;
      document.getElementById("calendar-modal-sub").textContent = hasMyCourses
        ? "Your selected courses for this week"
        : "All courses for this week — select \"My Courses\" to personalize";
      document.getElementById("week-nav-range").textContent = formatWeekRange(calendarWeekStart);

      const status = getWeekStatus(calendarWeekStart);
      const statusTag = document.getElementById("week-status-tag");
      statusTag.textContent = status.label;
      statusTag.className = `week-status-tag ${status.cls}`;

      document.getElementById("week-prev-btn").disabled =
        calendarWeekStart.getTime() <= MIN_CALENDAR_WEEK_START.getTime();

      const weeklyEvents = getWeeklyEvents();
      const totalMinutes = (CAL_HOUR_END - CAL_HOUR_START) * 60;
      const bodyHeight = (CAL_HOUR_END - CAL_HOUR_START) * CAL_ROW_HEIGHT;

      // Header row
      const headerRow = document.createElement("div");
      headerRow.className = "calendar-header-row";
      headerRow.innerHTML =
        `<div class="calendar-time-col-spacer"></div>` +
        CAL_DAYS.map((d) => `<div class="calendar-day-header">${d.slice(0, 3)}</div>`).join("");
      grid.appendChild(headerRow);

      // Body row
      const bodyRow = document.createElement("div");
      bodyRow.className = "calendar-body-row";
      bodyRow.style.height = bodyHeight + "px";

      // Time axis
      const timeCol = document.createElement("div");
      timeCol.className = "calendar-time-col";
      timeCol.style.height = bodyHeight + "px";
      for (let h = CAL_HOUR_START; h <= CAL_HOUR_END; h++) {
        const label = document.createElement("div");
        label.className = "calendar-time-label";
        label.style.top = (h - CAL_HOUR_START) * CAL_ROW_HEIGHT + "px";
        const displayHour = h % 12 === 0 ? 12 : h % 12;
        const ampm = h < 12 ? "AM" : "PM";
        label.textContent = `${displayHour} ${ampm}`;
        timeCol.appendChild(label);
      }
      bodyRow.appendChild(timeCol);

      let hasAnyEvent = false;

      CAL_DAYS.forEach((day) => {
        const dayCol = document.createElement("div");
        dayCol.className = "calendar-day-col";
        dayCol.style.height = bodyHeight + "px";

        for (let h = CAL_HOUR_START; h <= CAL_HOUR_END; h++) {
          const line = document.createElement("div");
          line.className = "calendar-hour-line";
          line.style.top = (h - CAL_HOUR_START) * CAL_ROW_HEIGHT + "px";
          dayCol.appendChild(line);
        }

        const dayEvents = layoutDayEvents(weeklyEvents.filter((e) => e.day === day));
        dayEvents.forEach((ev) => {
          hasAnyEvent = true;
          const startOffset = Math.max(0, ev._start - CAL_HOUR_START * 60);
          const endOffset = Math.min(totalMinutes, ev._end - CAL_HOUR_START * 60);
          const top = (startOffset / totalMinutes) * bodyHeight;
          const height = Math.max(22, ((endOffset - startOffset) / totalMinutes) * bodyHeight);
          const widthPct = 100 / ev._totalCols;
          const leftPct = widthPct * ev._col;

          const evEl = document.createElement("div");
          evEl.className = "calendar-event";
          evEl.style.top = top + "px";
          evEl.style.height = height + "px";
          evEl.style.left = `calc(${leftPct}% + 2px)`;
          evEl.style.width = `calc(${widthPct}% - 4px)`;
          evEl.style.zIndex = String(4 + ev._col);
          evEl.title = `${ev.name} (${ev.code})\n${ev.start} - ${ev.end}\n${ev.instructor}${ev.room ? " • Room " + ev.room : ""}`;
          evEl.innerHTML = `
            <div class="calendar-event-title">${ev.name}</div>
            <div class="calendar-event-meta">${ev.start}–${ev.end}</div>
          `;
          dayCol.appendChild(evEl);
        });

        bodyRow.appendChild(dayCol);
      });

      grid.appendChild(bodyRow);

      if (!hasAnyEvent) {
        const note = document.createElement("div");
        note.className = "calendar-empty-note";
        note.textContent = hasMyCourses
          ? "No classes from your selected courses this week."
          : "No classes scheduled this week.";
        grid.appendChild(note);
      }
    }

    function openWeeklyTimetable() {
      renderWeeklyTimetable();
      document.getElementById("weekly-timetable-modal").classList.add("open");
    }

    function closeWeeklyTimetable() {
      document.getElementById("weekly-timetable-modal").classList.remove("open");
    }

    document.addEventListener("DOMContentLoaded", () => {
      initClock();
      renderSchedule();

      // My Courses Button / Modal
      document.getElementById("my-courses-btn").addEventListener("click", openCourseModal);

      document.getElementById("modal-clear-btn").addEventListener("click", () => {
        pendingSelection = new Set();
        populateCourseModal();
      });

      document.getElementById("modal-save-btn").addEventListener("click", () => {
        myCourses = Array.from(pendingSelection);
        saveMyCourses(myCourses);
        closeCourseModal();
        renderSchedule();
      });

      document.getElementById("my-courses-modal").addEventListener("click", (e) => {
        if (e.target.id === "my-courses-modal") closeCourseModal();
      });

      // Weekly Timetable Button / Modal
      document.getElementById("weekly-timetable-btn").addEventListener("click", openWeeklyTimetable);
      document.getElementById("calendar-close-btn").addEventListener("click", closeWeeklyTimetable);
      document.getElementById("weekly-timetable-modal").addEventListener("click", (e) => {
        if (e.target.id === "weekly-timetable-modal") closeWeeklyTimetable();
      });

      document.getElementById("week-prev-btn").addEventListener("click", () => {
        calendarWeekStart = clampWeekStart(new Date(calendarWeekStart.getTime() - 7 * 24 * 60 * 60 * 1000));
        renderWeeklyTimetable();
      });

      document.getElementById("week-next-btn").addEventListener("click", () => {
        calendarWeekStart = new Date(calendarWeekStart.getTime() + 7 * 24 * 60 * 60 * 1000);
        renderWeeklyTimetable();
      });

      document.getElementById("week-today-btn").addEventListener("click", () => {
        calendarWeekStart = clampWeekStart(getWeekMonday(new Date()));
        renderWeeklyTimetable();
      });

      // All Classes Button / Modal
      document.getElementById("all-classes-btn").addEventListener("click", openAllClassesModal);
      document.getElementById("all-classes-close-btn").addEventListener("click", closeAllClassesModal);
      document.getElementById("all-classes-modal").addEventListener("click", (e) => {
        if (e.target.id === "all-classes-modal") closeAllClassesModal();
      });

      // First-time visitor: prompt for course selection
      if (myCourses === null) {
        openCourseModal();
      }

      // Day Tab Handlers
      document.querySelectorAll("#day-tabs .tab-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          document.querySelectorAll("#day-tabs .tab-btn").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          activeDay = btn.getAttribute("data-day");
          renderSchedule();
        });
      });

      // Segment Filter Handlers
      document.querySelectorAll("#segment-pills .seg-pill").forEach((btn) => {
        btn.addEventListener("click", () => {
          document.querySelectorAll("#segment-pills .seg-pill").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          activeSeg = btn.getAttribute("data-seg");
          renderSchedule();
        });
      });

      // Search Handler
      const searchInput = document.getElementById("course-search");
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderSchedule();
      });
    });

    function renderSchedule() {
      const container = document.getElementById("schedule-container");
      container.innerHTML = "";

      const now = new Date();
      const todayISO = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0");
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      const hasMyCourses = Array.isArray(myCourses) && myCourses.length > 0;

      const filtered = courses.filter((item) => {
        const matchDay = activeDay === "today" ? item.date === todayISO : item.day === activeDay;
        const matchSeg = activeSeg === "all" || item.segment === activeSeg || (activeSeg === "1-2" && item.segment === "1-4");
        const matchSearch = searchQuery === "" || item.name.toLowerCase().includes(searchQuery) || item.code.toLowerCase().includes(searchQuery);
        const matchMyCourses = !hasMyCourses || myCourses.includes(item.code);
        return matchDay && matchSeg && matchSearch && matchMyCourses;
      });

      if (filtered.length === 0) {
        if (hasMyCourses) {
          container.innerHTML = `<div class="empty-state">No lectures scheduled for the selected filters.</div>`;
        } else {
          container.innerHTML = `<div class="empty-state">No courses selected yet. Click "My Courses" (top left) to choose your courses.</div>`;
        }
        return;
      }

      // Sort: upcoming/today classes first (by date, then time), past classes pushed to bottom (most recently passed first)
      filtered.sort((a, b) => {
        const aPast = isPast(a, todayISO, currentMinutes);
        const bPast = isPast(b, todayISO, currentMinutes);
        if (aPast !== bPast) return aPast ? 1 : -1;
        if (aPast && bPast) {
          // most recently passed first
          if (a.date !== b.date) return a.date > b.date ? -1 : 1;
          return a.start > b.start ? -1 : 1;
        }
        if (a.date !== b.date) return a.date < b.date ? -1 : 1;
        return a.start < b.start ? -1 : 1;
      });

      filtered.forEach((item) => {
        container.appendChild(buildScheduleCard(item, todayISO, currentMinutes));
      });
    }

    function buildScheduleCard(item, todayISO, currentMinutes) {
      const isToday = item.date === todayISO;
      const [sH, sM] = item.start.split(":").map(Number);
      const [eH, eM] = item.end.split(":").map(Number);
      const classStart = sH * 60 + sM;
      const classEnd = eH * 60 + eM;
      const isActive = isToday && currentMinutes >= classStart && currentMinutes <= classEnd;
      const isClassPast = isPast(item, todayISO, currentMinutes);

      const dateObj = new Date(item.date + "T00:00:00");
      const formattedDate = dateObj.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });

      const card = document.createElement("div");
      card.className = `schedule-card ${isActive ? 'is-active' : ''} ${isClassPast ? 'is-past' : ''}`;

      card.innerHTML = `
        <div class="time-box">
          <div class="time-range">🕒 ${item.start} - ${item.end}</div>
          <div class="time-day">${item.day}, ${formattedDate}</div>
        </div>
        <div class="info-box">
          <div class="course-title">${item.name}</div>
          <div class="course-meta">
            <span class="code-badge">${item.code}</span>
            <span class="category-badge">${item.category}</span>
            <span class="meta-tag">Segment ${item.segment}</span>
            <span class="meta-tag">• ${item.credit}</span>
          </div>
          <div class="instructor-tag">👤 ${item.instructor} &nbsp;|&nbsp; 📍 Room: ${item.room ? item.room : "TBD"}</div>
        </div>
        <div class="action-box">
          <span class="status-badge ${isActive ? 'live' : ''}">
            ${isActive ? '● ACTIVE NOW' : (isClassPast ? 'COMPLETED' : 'SCHEDULED')}
          </span>
        </div>
      `;

      return card;
    }

    function renderAllClasses() {
      const container = document.getElementById("all-classes-list");
      container.innerHTML = "";

      const now = new Date();
      const todayISO = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0");
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      const all = [...courses].sort((a, b) => {
        const aPast = isPast(a, todayISO, currentMinutes);
        const bPast = isPast(b, todayISO, currentMinutes);
        if (aPast !== bPast) return aPast ? 1 : -1;
        if (aPast && bPast) {
          if (a.date !== b.date) return a.date > b.date ? -1 : 1;
          return a.start > b.start ? -1 : 1;
        }
        if (a.date !== b.date) return a.date < b.date ? -1 : 1;
        return a.start < b.start ? -1 : 1;
      });

      if (all.length === 0) {
        container.innerHTML = `<div class="empty-state">No classes found.</div>`;
        return;
      }

      all.forEach((item) => {
        container.appendChild(buildScheduleCard(item, todayISO, currentMinutes));
      });
    }

    function openAllClassesModal() {
      renderAllClasses();
      document.getElementById("all-classes-modal").classList.add("open");
    }

    function closeAllClassesModal() {
      document.getElementById("all-classes-modal").classList.remove("open");
    }

    function isPast(item, todayISO, currentMinutes) {
      if (item.date < todayISO) return true;
      if (item.date > todayISO) return false;
      const [eH, eM] = item.end.split(":").map(Number);
      const classEnd = eH * 60 + eM;
      return currentMinutes > classEnd;
    }

    function initClock() {
      const clockEl = document.getElementById("clock-display");
      function update() {
        const now = new Date();
        clockEl.innerText = now.toLocaleString("en-US", {
          weekday: "short", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"
        });
      }
      update();
      setInterval(update, 1000);
    }
