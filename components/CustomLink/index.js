import Link from "next/link";
import { useRouter } from "next/router";
export const CustomLink = ({ to, title }) => {
  const router = useRouter();
  return (
    <Link href={to}>
      <a>{title}</a>
    </Link>
  );
};
