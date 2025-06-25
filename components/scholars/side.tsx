const scholars = [
    {
        name: "Dr. Yusuf Al-Qaradawi",
        title: "Islamic Jurisprudence Scholar",
        avatar: "/scholar.jpg",
        specialties: ["Fiqh", "Contemporary Issues", "Fatwa"],
        followers: 15420,
        isVerified: true,
        bio: "Renowned Islamic scholar specializing in contemporary Islamic jurisprudence and modern-day applications of Islamic law.",
    },
    {
        name: "Sheikh Abdul Rahman",
        title: "Quran & Hadith Expert",
        avatar: "/scholar.jpg",
        specialties: ["Quran", "Hadith", "Tafsir"],
        followers: 12890,
        isVerified: true,
        bio: "Expert in Quranic studies and Hadith sciences with over 20 years of teaching experience.",
    },
    {
        name: "Dr. Aisha Muhammad",
        title: "Islamic Education Specialist",
        avatar: "/scholar.jpg",
        specialties: ["Islamic Education", "Islamic Studies", "Islamic Literature"],
        followers: 10000,
        isVerified: true,
        bio: "Expert in Islamic education and Islamic studies with over 15 years of teaching experience.",
    },
    {
        name: "Sheikh Omar Al-Farisi",
        title: "Aqeedah & Theology Scholar",
        avatar: "/scholar.jpg",
        specialties: ["Aqeedah", "Theology", "Comparative Religion"],
        followers: 8340,
        isVerified: true,
        bio: "Scholar of Islamic theology and comparative religion studies with expertise in interfaith dialogue.",
    },
    {
        name: "Dr. Fatima Al-Zahra",
        title: "Islamic Medicine Specialist",
        avatar: "/scholar.jpg",
        specialties: ["Islamic Medicine", "Islamic Surgery", "Islamic Dentistry"],
        followers: 6000,
        isVerified: true,
        bio: "Expert in Islamic medicine and Islamic surgery with over 10 years of teaching experience.",
    }
]

export default function ScholarsSide() {
    return (
      <div className="flex flex-col items-start justify-center w-full gap-2">
        {scholars.map((scholar, index) => (
          <div
            key={index}
            className="flex items-center w-full space-x-3 hover:cursor-pointer hover:bg-slate-100 py-2 px-4 rounded-md"
          >
            <img
              src={scholar.avatar}
              alt={scholar.name}
              className="w-10 h-10 rounded-full object-cover border"
            />
            <div className="flex flex-col">
              <span>{scholar.name}</span>
              <span className="text-sm text-muted-foreground">{scholar.followers - 1}+</span>
            </div>
          </div>
        ))}
      </div>
    );
}