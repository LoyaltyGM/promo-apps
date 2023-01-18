import React from "react";
import { NextPage } from "next";
import Link from "next/link";

import { Sidebar } from "components";

const Page404: NextPage = () => {
    return (
        <div>
            <Sidebar>
                <section className="w-1/2">
                    <div className="text-center gap-2 space-y-6 items-center justify-center pt-36">
                        <h1 className="text-highlighter">{"Oppss..."}</h1>
                        <h1 className="text-highlighter">{"We couldn't find this page :("}</h1>
                        <div className="flex items-center justify-center">
                            <Link href="/">
                                <button className="main-button mt-10 lg:w-1/3 w-full h-14 main-button">
                                    Back to home
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </Sidebar>
        </div>
    );
};

export default Page404;
