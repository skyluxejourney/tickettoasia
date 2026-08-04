"use client";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  overlayColor?: string;
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
  overlayColor = "from-black/70 via-black/60 to-black/75",
}: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-20 sm:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
          }}
        />
        {/* Dark Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-b ${overlayColor}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Decorative Accent Line - Warm Brown Theme */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-10 h-1"
        style={{
          background: `linear-gradient(to right, #5e503f, #b8956e, #eae0d5)`
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight font-heading">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 font-light tracking-wide leading-relaxed">
              {subtitle}
            </p>
          )}
          
          {/* Optional Decorative Element - Warm Theme */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span 
              className="w-12 h-0.5 rounded-full"
              style={{ backgroundColor: '#b8956e' }}
            />
            <span 
              className="w-2 h-2 rotate-45"
              style={{ backgroundColor: '#eae0d5' }}
            />
            <span 
              className="w-12 h-0.5 rounded-full"
              style={{ backgroundColor: '#b8956e' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}