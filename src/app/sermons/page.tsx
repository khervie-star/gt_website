import { PageHeader } from '@/components';

const SermonsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <PageHeader
        title={
          <>
            <span className="text-foreground">Sermons</span>
          </>
        }
        description="Discover life-changing messages and grow in your faith through our collection of inspiring sermons and teachings."
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Download App Section */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-3xl border border-border overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-primary to-purple-900 text-white">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                    Now Available
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                    Access Sermons
                    <span className="block text-amber-300">On the Go</span>
                  </h2>

                  <p className="text-xl text-purple-100 leading-relaxed">
                    Download our mobile app to listen to powerful sermons,
                    follow along with scripture, and grow spiritually wherever
                    you are. Never miss a message again.
                  </p>

                  {/* Features */}
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-amber-300 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-lg">Stream & Download Sermons</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-amber-300 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-lg">
                        Interactive Scripture Reading
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-amber-300 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-lg">
                        Personal Notes & Bookmarks
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-amber-300 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-lg">Offline Listening</span>
                    </div>
                  </div>

                  {/* Download Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-8">
                    <button className="flex items-center justify-center px-6 py-4 bg-black rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center space-x-3">
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 24 24"
                          fill="white">
                          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                        </svg>
                        <div className="text-left">
                          <div className="text-xs text-gray-300">
                            Download on the
                          </div>
                          <div className="text-lg font-semibold">App Store</div>
                        </div>
                      </div>
                    </button>

                    <button className="flex items-center justify-center px-6 py-4 bg-black rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center space-x-3">
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 24 24"
                          fill="white">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                        <div className="text-left">
                          <div className="text-xs text-gray-300">Get it on</div>
                          <div className="text-lg font-semibold">
                            Google Play
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Magic UI Phone Mockup Side */}
              <div className="relative p-8 lg:p-12 bg-muted/30 flex items-center justify-center">
                {/* Background Decoration */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-pulse delay-1000"></div>
                </div>

                {/* Magic UI Phone Mockup */}
                <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="relative">
                    {/* Phone Frame */}
                    <div className="w-[280px] h-[560px] bg-foreground rounded-[2.75rem] p-1">
                      <div className="w-full h-full bg-card rounded-[2.5rem] relative overflow-hidden border border-border">
                        {/* Dynamic Island */}
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-24 h-7 bg-foreground rounded-full z-10"></div>

                        {/* Screen Content */}
                        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-purple-900">
                          {/* Status Bar */}
                          <div className="flex justify-between items-center px-8 pt-12 pb-4 text-white text-sm font-medium">
                            <span>9:41</span>
                            <div className="flex items-center space-x-1">
                              <div className="flex space-x-[2px]">
                                <div className="w-1 h-1 bg-white rounded-full"></div>
                                <div className="w-1 h-1 bg-white rounded-full"></div>
                                <div className="w-1 h-1 bg-white rounded-full"></div>
                                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                              </div>
                              <div className="w-6 h-3 border border-white rounded-sm">
                                <div className="w-4 h-full bg-white rounded-sm m-[1px]"></div>
                              </div>
                            </div>
                          </div>

                          {/* App Header */}
                          <div className="px-8 py-6">
                            <h3 className="text-white text-3xl font-bold">
                              Sermons
                            </h3>
                            <p className="text-purple-100 text-base mt-1">
                              Latest Messages
                            </p>
                          </div>

                          {/* Search Bar */}
                          <div className="px-8 mb-6">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20">
                              <div className="flex items-center space-x-3">
                                <svg
                                  className="w-5 h-5 text-white/70"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                  />
                                </svg>
                                <span className="text-white/70 text-sm">
                                  Search sermons...
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Sermon List */}
                          <div className="px-8 space-y-4 flex-1">
                            {/* Current Playing */}
                            <div className="bg-white/15 backdrop-blur-md rounded-3xl p-5 border border-white/20">
                              <div className="flex items-center space-x-4">
                                <div className="relative">
                                  <div className="w-16 h-16 bg-amber-300 rounded-2xl flex items-center justify-center">
                                    <svg
                                      className="w-8 h-8 text-primary"
                                      fill="currentColor"
                                      viewBox="0 0 20 20">
                                      <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center">
                                    <svg
                                      className="w-3 h-3 text-white"
                                      fill="currentColor"
                                      viewBox="0 0 20 20">
                                      <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-white font-bold text-base">
                                    Walking in Faith
                                  </h4>
                                  <p className="text-purple-100 text-sm">
                                    Pastor John Smith
                                  </p>
                                  <div className="flex items-center mt-2 space-x-2">
                                    <div className="flex-1 h-1 bg-white/20 rounded-full">
                                      <div className="w-1/3 h-full bg-amber-300 rounded-full"></div>
                                    </div>
                                    <span className="text-xs text-purple-100">
                                      15:32
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Sermon Item 1 */}
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                              <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-emerald-300 rounded-xl flex items-center justify-center">
                                  <svg
                                    className="w-6 h-6 text-primary"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                      fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-white font-semibold text-sm">
                                    God&apos;s Amazing Grace
                                  </h4>
                                  <p className="text-purple-100 text-xs">
                                    Pastor Sarah Johnson • 38 min
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Sermon Item 2 */}
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                              <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-rose-300 rounded-xl flex items-center justify-center">
                                  <svg
                                    className="w-6 h-6 text-primary"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                      fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-white font-semibold text-sm">
                                    Love & Hope in Christ
                                  </h4>
                                  <p className="text-purple-100 text-xs">
                                    Pastor Mike Davis • 42 min
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Bottom Tab Bar */}
                          <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 p-4">
                            <div className="flex justify-around">
                              <div className="flex flex-col items-center space-y-1">
                                <div className="w-6 h-6 bg-amber-300 rounded-lg"></div>
                                <div className="w-4 h-1 bg-amber-300 rounded-full"></div>
                              </div>
                              <div className="flex flex-col items-center space-y-1">
                                <div className="w-6 h-6 bg-white/30 rounded-lg"></div>
                              </div>
                              <div className="flex flex-col items-center space-y-1">
                                <div className="w-6 h-6 bg-white/30 rounded-lg"></div>
                              </div>
                              <div className="flex flex-col items-center space-y-1">
                                <div className="w-6 h-6 bg-white/30 rounded-lg"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Home Indicator */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-foreground/30 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              High Quality Audio
            </h3>
            <p className="text-gray-600">
              Crystal clear audio quality for an immersive listening experience.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Download & Save
            </h3>
            <p className="text-gray-600">
              Save sermons for offline listening when you&apos;re on the go.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Easy Navigation
            </h3>
            <p className="text-gray-600">
              Find and organize your favorite sermons with intuitive controls.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SermonsPage