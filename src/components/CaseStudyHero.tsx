interface CaseStudyHeroProps {
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  tools?: string;
  team: string;
  heroImage: string;
  accentColor?: string;
}

const CaseStudyHero = ({
  title,
  subtitle,
  role,
  timeline,
  tools,
  team,
  heroImage,
  accentColor = "from-airbnb-red/80 to-airbnb-red/60",
}: CaseStudyHeroProps) => {
  return (
    <section className="w-full min-h-[70vh] md:min-h-[85vh] flex items-end pt-16">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[70vh] md:h-[85vh] z-0">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${accentColor}`} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pb-12 md:pb-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            {/* Left - Project Meta */}
            <div className="md:col-span-4 lg:col-span-3">
              <div className="space-y-6 text-primary-foreground">
                <div>
                  <h3 className="text-sm font-semibold tracking-widest uppercase opacity-70 mb-1">
                    ROLE
                  </h3>
                  <p className="text-base font-medium">{role}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-widest uppercase opacity-70 mb-1">
                    DURATION
                  </h3>
                  <p className="text-base font-medium">{timeline}</p>
                </div>
                {tools && (
                  <div>
                    <h3 className="text-sm font-semibold tracking-widest uppercase opacity-70 mb-1">
                      TOOLS
                    </h3>
                    <p className="text-base font-medium">{tools}</p>
                  </div>
                )}
                <div>
                  <h3 className="text-sm font-semibold tracking-widest uppercase opacity-70 mb-1">
                    TEAM
                  </h3>
                  <p className="text-base font-medium">{team}</p>
                </div>
              </div>
            </div>

            {/* Right - Title (Removed per request) */}
            <div className="md:col-span-8 lg:col-span-9 hidden">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
