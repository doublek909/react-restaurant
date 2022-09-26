type HeadingProps = {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function Input(props: HeadingProps) {
  const Tag = `h${props.level}` as keyof JSX.IntrinsicElements;
  return (
    <>
      <Tag className="block text-xl">{props.children}</Tag>
    </>
  );
}
