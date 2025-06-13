import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-center items-center gap-5">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Mohanraj G . All rights reserved    ||   Web Developer    || Freelancer 
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/50  hover:bg-stone-300 text-primary transition-colors"
      >
        <ArrowUp size={22}  className="text-white hover:text-primary"/>
      </a>
    </footer>
  );
};
