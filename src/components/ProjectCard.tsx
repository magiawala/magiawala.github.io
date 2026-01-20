import { Link } from "react-router-dom";

interface ProjectTag {
  label: string;
  variant: "verizon" | "hp" | "airbnb" | "default";
}

interface ProjectCardProps {
  image: string;
  role: string;
  title: string;
  tags: ProjectTag[];
  description: string;
  href: string;
}

const ProjectCard = ({
  image,
  role,
  title,
  tags,
  description,
  href,
}: ProjectCardProps) => {
  const getTagStyles = (variant: ProjectTag["variant"]) => {
    switch (variant) {
      case "verizon":
        return "bg-red-100 text-red-700";
      case "hp":
        return "bg-blue-100 text-blue-700";
      case "airbnb":
        return "bg-rose-100 text-rose-600";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <article className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
      {/* Project Thumbnail */}
      <div className="aspect-video md:aspect-[4/3] rounded-lg overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="flex flex-col justify-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
          {role}
        </span>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4 leading-tight">
          {title}
        </h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className={`px-3 py-1 text-xs font-medium rounded-full ${getTagStyles(
                tag.variant
              )}`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        <p className="text-foreground/80 mb-6 leading-relaxed">
          {description}
        </p>

        <Link
          to={href}
          className="text-foreground font-medium hover:text-muted-foreground transition-colors inline-flex items-center gap-1 group"
        >
          View Project{" "}
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
