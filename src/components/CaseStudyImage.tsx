interface CaseStudyImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  fullWidth?: boolean;
}

const CaseStudyImage = ({
  src,
  alt,
  caption,
  className = "",
  fullWidth = true,
}: CaseStudyImageProps) => {
  return (
    <div className={`py-8 md:py-12 ${className}`}>
      <div className={fullWidth ? "container mx-auto px-6 md:px-12 lg:px-16" : "container mx-auto px-6 md:px-12 lg:px-16"}>
        <div className={fullWidth ? "" : "md:ml-[25%] md:w-[50%]"}>
          <figure>
            <img
              src={src}
              alt={alt}
              className="w-full rounded-lg"
            />
            {caption && (
              <figcaption className="mt-4 text-sm text-muted-foreground">
                {caption}
              </figcaption>
            )}
          </figure>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyImage;
