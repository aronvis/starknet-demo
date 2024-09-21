import { ReactNode } from "react";
import { Footer, Navbar } from "./components";
import styles from "./layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div id={styles.layout}>
      <Navbar></Navbar>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
}
