"use client"

import { Button } from "@/components/ui/button"
import { TracingLine } from "./components/tracing-line"
import { AnimatedStat } from "./components/animated-stat"
import { ZosonoBadge } from "./components/zosono-badge"
import { useServiceRotation } from "./hooks/use-service-rotation"
import { TrustIndicators } from "./components/trust-indicators"
import { BackgroundGrid } from "./components/background-grid"
import { BackgroundParticles } from "./components/background-particles"

export default function HeroSection() {
  const {
    currentService,
    currentIndex,
    totalServices,
    isTransitioning,
    isPaused,
    setIsPaused,
    goToService,
    touchHandlers,
  } = useServiceRotation()

  return (
    <section
      className="min-h-screen relative flex items-center justify-center px-5 md:px-6 py-10 md:py-20 bg-gradient-to-br from-black via-black to-gray-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      {...touchHandlers}
      tabIndex={0}
      role="region"
      aria-label="Dynamic service showcase"
    >
      {/* Background Grid */}
      <BackgroundGrid />

      {/* Background Particles */}
      <BackgroundParticles />

      {/* Tracing Line */}
      <TracingLine />

      <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-16 relative z-10 w-full">
        {/* Service Category */}
        <div
          className={`transition-all duration-700 ease-out ${
            isTransitioning ? "opacity-0 translate-y-4 translate-x-8" : "opacity-100 translate-y-0 translate-x-0"
          }`}
        >
          <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-widest uppercase mb-4 md:mb-6 font-system">
            {currentService.category}
          </div>
        </div>

        {/* Main Headline - Clean hierarchy */}
        <div
          className={`transition-all duration-700 ease-out ${
            isTransitioning ? "opacity-0 translate-y-6 translate-x-12" : "opacity-100 translate-y-0 translate-x-0"
          }`}
          style={{ transitionDelay: isTransitioning ? "0ms" : "200ms" }}
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight font-system px-2 sm:px-0 mb-6 md:mb-8">
            {currentService.headline}
          </h1>
        </div>

        {/* Subheading - Supporting text */}
        <div
          className={`transition-all duration-700 ease-out ${
            isTransitioning ? "opacity-0 translate-y-4 translate-x-8" : "opacity-100 translate-y-0 translate-x-0"
          }`}
          style={{ transitionDelay: isTransitioning ? "0ms" : "400ms" }}
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-400 font-light tracking-wide max-w-4xl mx-auto font-system px-4 sm:px-0 mb-8 md:mb-12">
            {currentService.subheadline}
          </p>
        </div>

        {/* CTA Buttons - Clear and accessible */}
        <div
          className={`transition-all duration-700 ease-out ${
            isTransitioning ? "opacity-0 translate-y-4 translate-x-6" : "opacity-100 translate-y-0 translate-x-0"
          }`}
          style={{ transitionDelay: isTransitioning ? "0ms" : "600ms" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
            <Button
              size="lg"
              className="w-full md:w-auto min-h-[52px] relative bg-gray-800 hover:bg-gray-700 text-white px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-medium rounded-xl border-0 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] font-system group overflow-hidden shadow-lg md:shadow-none"
              style={{ backgroundColor: "#1D1D1F" }}
            >
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full md:w-auto min-h-[52px] relative bg-transparent hover:bg-cyan-400/10 text-white border-cyan-400/50 hover:border-cyan-400 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-medium rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] font-system group shadow-lg md:shadow-none"
            >
              <span className="relative z-10">View Our Work</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/5 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>

        {/* Three Metric Cards - Organized bottom section */}
        <div
          className={`transition-all duration-700 ease-out ${
            isTransitioning ? "opacity-0 translate-y-6 translate-x-10" : "opacity-100 translate-y-0 translate-x-0"
          }`}
          style={{ transitionDelay: isTransitioning ? "0ms" : "800ms" }}
        >
          {/* Mobile: Vertical stack */}
          <div className="flex flex-col md:hidden space-y-6 max-w-sm mx-auto mb-12">
            {currentService.stats.map((stat, index) => (
              <AnimatedStat
                key={`${currentIndex}-${index}`}
                iconName={stat.iconName}
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
                isVisible={!isTransitioning}
                delay={index * 300}
              />
            ))}
          </div>

          {/* Tablet: 2x2 grid */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 max-w-lg mx-auto mb-12">
            {currentService.stats.slice(0, 2).map((stat, index) => (
              <AnimatedStat
                key={`${currentIndex}-${index}`}
                iconName={stat.iconName}
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
                isVisible={!isTransitioning}
                delay={index * 300}
              />
            ))}
            {currentService.stats[2] && (
              <div className="col-span-2 flex justify-center">
                <div className="w-1/2">
                  <AnimatedStat
                    key={`${currentIndex}-2`}
                    iconName={currentService.stats[2].iconName}
                    value={currentService.stats[2].value}
                    suffix={currentService.stats[2].suffix}
                    prefix={currentService.stats[2].prefix}
                    label={currentService.stats[2].label}
                    isVisible={!isTransitioning}
                    delay={600}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Desktop: Horizontal row */}
          <div className="hidden lg:grid grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto mb-12">
            {currentService.stats.map((stat, index) => (
              <AnimatedStat
                key={`${currentIndex}-${index}`}
                iconName={stat.iconName}
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
                isVisible={!isTransitioning}
                delay={index * 300}
              />
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div
          className={`transition-all duration-700 ease-out ${
            isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
          style={{ transitionDelay: isTransitioning ? "0ms" : "1000ms" }}
        >
          <div className="flex justify-center items-center gap-3 mb-8">
            {Array.from({ length: totalServices }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToService(index)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-cyan-400 w-8 shadow-lg shadow-cyan-400/50"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div
          className={`transition-all duration-700 ease-out ${
            isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
          style={{ transitionDelay: isTransitioning ? "0ms" : "1200ms" }}
        >
          <TrustIndicators />
        </div>

        {/* Mobile Zosono Badge */}
        <div className="block md:hidden">
          <ZosonoBadge />
        </div>
      </div>

      {/* Subtle ambient glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-white/5 rounded-full blur-3xl opacity-30" />

      {/* Desktop Zosono Badge */}
      <div className="hidden md:block">
        <ZosonoBadge />
      </div>
    </section>
  )
}
