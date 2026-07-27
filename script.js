    const courses = [
      { name: "Calculus - 1", code: "MA1110", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "1-2", day: "Monday", date: "2026-07-27", start: "10:00", end: "10:55" },
      { name: "Calculus - 1", code: "MA1110", category: "Basic Sciences", instructor: "Unspecified", room: "", credit: "1 Credit", segment: "1-2", day: "Wednesday", date: "2026-07-29", start: "09:00", end: "09:55" },
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
      { name: "Intro To MSME", code: "MS1990", category: "Departmental Core Theory", instructor: "Dr. Hemam Rachn", room: "", credit: "1 Credit", segment: "1-2", day: "Wednesday", date: "2026-07-29", start: "10:00", end: "10:55" },
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

    let activeDay = "all";
    let activeSeg = "all";
    let searchQuery = "";

    document.addEventListener("DOMContentLoaded", () => {
      initClock();
      renderSchedule();

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

      const filtered = courses.filter((item) => {
        const matchDay = activeDay === "all" || item.day === activeDay;
        const matchSeg = activeSeg === "all" || item.segment === activeSeg || (activeSeg === "1-2" && item.segment === "1-4");
        const matchSearch = searchQuery === "" || item.name.toLowerCase().includes(searchQuery) || item.code.toLowerCase().includes(searchQuery);
        return matchDay && matchSeg && matchSearch;
      });

      if (filtered.length === 0) {
        container.innerHTML = `<div class="empty-state">No lectures scheduled for the selected filters.</div>`;
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

        container.appendChild(card);
      });
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
