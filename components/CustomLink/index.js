import Link from "next/link";
import { useRouter } from "next/router";
export const CustomLink = ({ to, title }) => {
  const router = useRouter();
  return (
    <Link href={to} passHref={true}>
      <a visited={to === router.pathname} className="list-none">
        {title}
      </a>
    </Link>
  );
};
