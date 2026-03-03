export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <section className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
            SNCWON
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            1인 교습소 통합 관리 웹앱 · 트랙을 선택해주세요
          </p>

          <div className="grid grid-cols-1 gap-4">
            <a
              href="/korean"
              className="group rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-sm text-gray-500">국어</div>
              <div className="mt-1 text-2xl font-extrabold text-indigo-700">
                국어해법 (논술)
              </div>
              <div className="mt-2 text-sm text-gray-600">
                숙제 · 출결 · 학생관리
              </div>
              <div className="mt-4 text-xs text-gray-500 group-hover:text-gray-700 transition">
                선택하기 →
              </div>
            </a>

            <a
              href="/english"
              className="group rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-sm text-gray-500">영어</div>
              <div className="mt-1 text-2xl font-extrabold text-green-700">
                영어
              </div>
              <div className="mt-2 text-sm text-gray-600">
                (다음 단계에서 구현)
              </div>
              <div className="mt-4 text-xs text-gray-500 group-hover:text-gray-700 transition">
                선택하기 →
              </div>
            </a>
          </div>
        </section>

        <section className="rounded-3xl bg-white/70 backdrop-blur border border-white/60 shadow-sm p-10 flex items-center justify-center min-h-[280px]">
          <div className="text-center">
            <div className="text-5xl font-black text-gray-900">SNCWON</div>
            <div className="mt-3 text-gray-600">국어해법 · 영어</div>
          </div>
        </section>
      </div>
    </main>
  );
}