import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Checkout - Tata Harper Skincare",
    description: "Secure Checkout",
};

export default function CheckoutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
            <header style={{ padding: "1.5rem", borderBottom: "1px solid #e1e1e1", textAlign: "center" }}>
                <h1 style={{ fontSize: "1.8rem", color: "#5d8e6a", fontFamily: "Playfair Display, serif", letterSpacing: "1px" }}>
                    TATA HARPER
                </h1>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}
