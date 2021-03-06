import React from "react";
import ContentHeader from "./ContentHeader";
import ContentRouter from "../Components/Routes/ContentRouter";
import RightColumn from "./RightColumn";

export default React.memo(function Content({
  setMobileMenuOpen,
  userNavigation,
}) {
  console.log("content", setMobileMenuOpen, userNavigation);
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <ContentHeader
        userNavigation={userNavigation}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {/* Main content */}
      <div className="flex-1 flex items-stretch overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          {/* Primary column */}
          <section
            aria-labelledby="primary-heading"
            className="min-w-0 flex-1 h-full relative flex flex-col overflow-hidden lg:order-last"
          >
            <h1 id="primary-heading" className="sr-only">
              Content
            </h1>
            <ContentRouter />
          </section>
        </main>

        {/* Secondary column (hidden on smaller screens) */}
        <aside className="hidden w-96  bg-white dark:bg-gray-900 dark:text-gray-300 border-l border-gray-200 dark:border-gray-700 overflow-y-auto lg:block">
          <RightColumn />
        </aside>
      </div>
    </div>
  );
});
