import { motion } from "motion/react";
import { ImageKit } from "../ui/image";
import type { Review } from "@/types/reviews";

export const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <motion.div
      className="border-b"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <ImageKit
            src={review.userImage ?? review.userName[0]}
            alt={review.userName[0]}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-semibold text-primary">{review.userName}</h4>
            <p className="text-sm md:text-base text-gray">{review.comment}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
