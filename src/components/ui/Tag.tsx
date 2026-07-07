interface TagProps {
  children: string;
  variant?: 'default' | 'primary' | 'success' | 'warning';
  className?: string;
}

export function Tag({ children, variant = 'default', className = '' }: TagProps) {
  const variantClass = variant !== 'default' ? `tag-${variant}` : '';

  return (
    <span className={`tag ${variantClass} ${className}`.trim()}>
      {children}
    </span>
  );
}

interface TagsContainerProps {
  tags: string[];
  className?: string;
}

export function TagsContainer({ tags, className = '' }: TagsContainerProps) {
  return (
    <div className={`tags-container ${className}`.trim()}>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  );
}
