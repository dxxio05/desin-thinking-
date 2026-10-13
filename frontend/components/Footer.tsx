export default function Footer({ name }: { name: string }) {
  return (
    <footer className="mt-24 px-5 pb-14 text-center text-sm font-medium text-muted md:mt-[120px]">
      © {name} {new Date().getFullYear()}
    </footer>
  );
}
