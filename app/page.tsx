import Image from "next/image";

const SUBJECTS = [
  {
    key: "korean",
    title: "국어",
    subtitle: "(해법독서논술)",
    href: "/korean",
    tone: "indigo",
  },
  {
    key: "english",
    title: "영어",
    subtitle: "(준비중)",
    href: "/english",
    tone: "emerald",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-5 py-10 text-center md:max-w-4xl">
        {/* Logo */}
        <div className="mb-3 flex items-center justify-center">
          {/* 로고 파일: public/logo.png */}
          <Image
            src="/logo.png"
            alt="SNCWON"
            width={500}
            height={500}
            className="h-20 w-auto object-contain md:h-75"
            priority
          />
        </div>

        {/* Brand */}
        <h1 className="text-4xl font-black tracking-tight text-slate-250 md:text-5xl">
          마곡 SnC
        </h1>
        <div className="mt-2 text-sm font-semibold text-blue-600 md:text-base">
          
        </div>

        
        {/* Cards */}
        <div className="mt-10 grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {SUBJECTS.map((s) => {
            const isKorean = s.tone === "indigo";

            // Pastel tones
            const border = isKorean ? "border-indigo-300" : "border-emerald-300";
            const bg = isKorean
              ? "bg-indigo-50 hover:bg-indigo-100/60"
              : "bg-emerald-50 hover:bg-emerald-100/60";

            const title = isKorean ? "text-indigo-800" : "text-emerald-800";
            const sub = isKorean ? "text-indigo-700/80" : "text-emerald-700/80";

            return (
              <a
                key={s.key}
                href={s.href}
                className={[
                  "rounded-2xl border p-7 text-left shadow-sm transition",
                  "active:scale-[0.985]",
                  "hover:shadow-md",
                  border,
                  bg,
                ].join(" ")}
              >
                <div className="flex items-end gap-2">
                  <div className={`text-3xl font-extrabold ${title}`}>
                    {s.title}
                  </div>
                  <div className={`text-base font-bold ${sub}`}>
                    {s.subtitle}
                  </div>
                </div>

                <div className="mt-6 text-lg font-extrabold text-slate-800">
                  
                </div>
              </a>
            );
          })}
        </div>

        {/* 안내 문구: 카드 아래로 이동 */}
        <p className="mt-8 text-lg font-semibold text-slate-1200">
          과목을 선택해주세요
        </p>

        {/* Version */}
        <p className="mt-3 text-xs font-medium text-slate-400">
          version 1.01
        </p>
      </div>
    </main>
  );
}