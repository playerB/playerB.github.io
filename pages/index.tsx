/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { TableOfContentsFloating } from "./components/TableOfContentsFloating";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className={styles.description}>
                    Get started by editing{" "}
                    <code className={styles.code}>pages/index.tsx</code>
                </p>

                <TableOfContentsFloating links= {[
                    {
                    "label": "Usage",
                    "link": "#usage",
                    "order": 1
                    },
                    {
                    "label": "Position and placement",
                    "link": "#position",
                    "order": 1
                    },
                    {
                    "label": "With other overlays",
                    "link": "#overlays",
                    "order": 1
                    },
                    {
                    "label": "Manage focus",
                    "link": "#focus",
                    "order": 1
                    },
                    {
                    "label": "Examples",
                    "link": "#1",
                    "order": 1
                    },
                    {
                    "label": "Show on focus",
                    "link": "#2",
                    "order": 2
                    },
                    {
                    "label": "Show on hover",
                    "link": "#3",
                    "order": 2
                    },
                    {
                    "label": "With form",
                    "link": "#4",
                    "order": 2
                    }
                ]
                }/>
                <div className={styles.grid}>
                    <Link href="/test"><a className={styles.card}>
                        <h2>Documentation &rarr;</h2>
                        <p>
                            My first post!
                        </p>
                    </a></Link>

                    <Link href="/project/tourist?pid=7">
                        <a className={styles.card}>
                            <h2>ID &rarr;</h2>
                            <p>
                                Check my ID
                            </p>
                        </a>
                    </Link>

                    <a
                        href="https://github.com/vercel/next.js/tree/canary/examples"
                        className={styles.card}
                    >
                        <h2>Examples &rarr;</h2>
                        <p>
                            Discover and deploy boilerplate example Next.js
                            projects.
                        </p>
                    </a>
                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h2>Deploy &rarr;</h2>
                        <p>
                            Instantly deploy your Next.js site to a public URL
                            with Vercel.
                        </p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <span className={styles.logo}>
                        <img src="/vercel.svg" alt="Vercel Logo" />
                    </span>
                </a>
            </footer>
        </div>
    );
};

export default Home;
