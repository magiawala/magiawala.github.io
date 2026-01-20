interface CaseStudySectionProps {
  label?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const CaseStudySection = ({
  label,
  title,
  children,
  className = "",
  fullWidth = false,
}: CaseStudySectionProps) => {
  if (fullWidth) {
    return (
      <section className={`py-16 md:py-24 ${className}`}>
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          {label && <p className="section-label mb-3">{label}</p>}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {title}
          </h2>
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* Sidebar - Section Title */}
          <div className="md:col-span-3">
            {label && <p className="section-label mb-2">{label}</p>}
            <h2 className="text-xl md:text-2xl font-bold text-foreground sticky top-24">
              {title}
            </h2>
          </div>
          {/* Main Content */}
          <div className="md:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
