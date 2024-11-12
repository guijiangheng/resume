interface WorkProps {
  company: string;
  duration: string;
  description: string;
}

export const Work = ({ company, duration, description }: WorkProps) => (
  <div>
    <h3>
      {company}
      <span className="text-muted-foreground">（{duration}）</span>
    </h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);
