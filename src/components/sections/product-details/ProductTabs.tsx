import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

export type Tabs = "reviews" | "addition_info" | "questions" | null;

interface ProductTabsProps {
  tab: Tabs;
  setTab: (tab: Tabs) => void;
  totalReviews: number;
  children: {
    reviews: React.ReactNode;
    questions: React.ReactNode;
    additionInfo: React.ReactNode;
  };
}

export const ProductTabs: React.FC<ProductTabsProps> = ({
  tab,
  setTab,
  totalReviews,
  children,
}) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-4 items-start w-full md:gap-8 md:flex-row md:border-b">
        {/* Reviews Tab */}
        <div className="w-full md:w-fit">
          <button
            className={`${tab === "reviews" ? "border-black border-b text-black" : " text-gray"} flex justify-between items-center pb-2 cursor-pointer w-full text-left`}
            aria-expanded={tab === "reviews"}
            aria-controls="reviews-panel"
            onClick={() => setTab(tab === "reviews" ? null : "reviews")}
          >
            <div className="flex items-center gap-2">
              Reviews ({totalReviews})
            </div>
            <ChevronDown
              className={`${tab === "reviews" ? "-rotate-180" : "rotate-0"} duration-300 md:hidden`}
            />
          </button>
          <AnimatePresence>
            {tab === "reviews" && (
              <motion.div
                id="reviews-panel"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="flex overflow-hidden flex-col gap-6 mt-4 md:hidden"
              >
                {children.reviews}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Questions Tab */}
        <div className="w-full md:w-fit">
          <button
            className={`${tab === "questions" ? "border-black border-b text-black" : " text-gray"} flex justify-between items-center pb-2 cursor-pointer w-full text-left`}
            aria-expanded={tab === "questions"}
            aria-controls="questions-panel"
            onClick={() => setTab(tab === "questions" ? null : "questions")}
          >
            Questions
            <ChevronDown
              className={`${tab === "questions" ? "-rotate-180" : "rotate-0"} duration-300 md:hidden`}
            />
          </button>
          <AnimatePresence>
            {tab === "questions" && (
              <motion.div
                id="questions-panel"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="flex overflow-hidden flex-col gap-6 mt-4 md:hidden"
              >
                {children.questions}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Addition Info Tab */}
        <div className="w-full md:w-fit">
          <button
            className={`${tab === "addition_info" ? "border-black border-b text-black" : " text-gray"} flex justify-between items-center pb-2 cursor-pointer w-full text-left`}
            aria-expanded={tab === "addition_info"}
            aria-controls="additional-info-panel"
            onClick={() =>
              setTab(tab === "addition_info" ? null : "addition_info")
            }
          >
            Addition Info
            <ChevronDown
              className={`${tab === "addition_info" ? "-rotate-180" : "rotate-0"} duration-300 md:hidden`}
            />
          </button>
          <AnimatePresence>
            {tab === "addition_info" && (
              <motion.div
                id="additional-info-panel"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="flex overflow-hidden flex-col gap-6 mt-4 md:hidden"
              >
                {children.additionInfo}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* Desktop View */}
      <ProductTabLargeResponsive tab={tab} children={children} />
    </div>
  );
};

const ProductTabLargeResponsive = ({
  tab,
  children,
}: {
  tab: Tabs;
  children: {
    reviews: React.ReactNode;
    questions: React.ReactNode;
    additionInfo: React.ReactNode;
  };
}) => (
  <div className="hidden w-full md:block">
    <div className={`${tab === "reviews" ? "block" : "hidden"} w-full`}>
      <div className="space-y-6">{children.reviews}</div>
    </div>
    <div className={`${tab === "questions" ? "block" : "hidden"} w-full`}>
      <div className="space-y-6">{children.questions}</div>
    </div>
    <div className={`${tab === "addition_info" ? "block" : "hidden"} w-full`}>
      <div className="space-y-6">{children.additionInfo}</div>
    </div>
  </div>
);
