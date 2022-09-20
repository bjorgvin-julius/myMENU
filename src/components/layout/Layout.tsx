import React from "react";
import Navigation from "./navigation/Navigation";

type props = {
    children: React.ReactNode;
};

const Layout = ({children}: props) => {

    return(
        <div>
            <Navigation />
            <main>{children}</main>
            Footer
        </div>
    )
}

export default Layout;