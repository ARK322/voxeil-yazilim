export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <main className="flex flex-col items-center justify-center px-6 py-12 text-center">
        {/* Animated Construction Icon */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full border-4 border-blue-500 rounded-lg animate-pulse"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-16 h-16 md:w-20 md:h-20 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in">
          Yapım Aşamasında
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md animate-fade-in-delay">
          Sitemiz şu anda geliştirilme aşamasındadır. Yakında sizlerle olacağız!
        </p>

        {/* Progress Bar */}
        <div className="w-full max-w-md mb-8">
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-progress"></div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Geliştirme devam ediyor...
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex gap-2 mt-8">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
        </div>
      </main>
    </div>
  );
}
