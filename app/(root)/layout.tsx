import LeftSidebar from "@/components/left-sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
        <main className="relative flex bg-black-3">
            <LeftSidebar />

            <section>
              <div>
                <div>
                  <Image />
                  MobileNav
                </div>
                <div>
                  Toaster
                </div>
              </div>
            </section>

            {children}
            <p className="text-white-1">Right Side Bar</p>
        </main>
    </div>
  );
}
