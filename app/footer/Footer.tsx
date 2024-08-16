interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  return (
    <footer
      className={`${className} text-xs
     bottom-0 z-20 w-full p-4 border-gray-200 shadow md:p-6 border-0 `}
    >
      <p className=" text-gray-500 text-center  dark:text-gray-400">
        © 2024{" "}
        <a href="https://github.com/ankitrajxd" className="hover:underline">
          Ankit Raj
        </a>
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
