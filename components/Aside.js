import Logo from "./Logo";
import Image from "next/image";
import { useRouter } from "next/router";

const Aside = () => {
  const router = useRouter();
  const isIndex = router.pathname === "/";

  return (
    <aside>
      {!isIndex && (
        <>
          <div className="mb-7">
            <Logo />
          </div>
        </>
      )}
      <div className="flex mb-12 items-center text-base">
        <Image
          src="https://pbs.twimg.com/profile_images/846150786799321088/5uUXkjeT_400x400.jpg"
          alt="Rukhsar Manzoor"
          width={48}
          height={48}
          className=" rounded-full"
        />
        <p className="ml-3.5 max-w-xs text-gray-700 dark:text-gray-400">
          Prsoneal blog by Rukhsar Manzoor.
          <span className="block">
            Web developer at{" "}
            <a
              className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none"
              href="https://www.madison.co.uk/"
            >
              Madison
            </a>
            .
          </span>
        </p>
      </div>
    </aside>
  );
};

export default Aside;
