interface ProjectProps {
  title: string;
  company: string;
  description: string;
  highlights: string[];
}

export const Project = ({
  title,
  company,
  description,
  highlights,
}: ProjectProps) => (
  <div>
    <h3>
      {title} <span className="text-muted-foreground">（{company}）</span>
    </h3>
    <p>
      <span>项目介绍：</span>
      <span className="text-muted-foreground">{description}</span>
    </p>
    <p>成果亮点：</p>
    <ul className="text-muted-foreground list-disc pl-4">
      {highlights.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  </div>
);
