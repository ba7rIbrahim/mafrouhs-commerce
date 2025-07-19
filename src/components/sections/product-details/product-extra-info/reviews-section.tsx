import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import type { Id } from "convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useReviews } from "@/hooks/use-reviews";
import { ReviewCard } from "@/components/cards";

export const ReviewsSection = ({ productId }: { productId: string }) => {
  const { isSignedIn, user } = useUser();
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { allReviews, addCommentToReviews } = useReviews(
    productId as Id<"products">
  );

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSignedIn || !comment.trim()) return;

    setIsSubmitting(true);
    try {
      await addCommentToReviews(
        productId as Id<"products">,
        user?.id,
        user?.fullName ?? "",
        user?.primaryEmailAddress?.emailAddress ?? "",
        user?.imageUrl,
        comment
      );

      setComment("");
      setShowReviewForm(false);
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Reviews Header */}
      <div className="flex items-center justify-end">
        {isSignedIn && (
          <Button
            onClick={() => setShowReviewForm(true)}
            className="flex items-center gap-2 justify-end"
          >
            <MessageCircle className="size-4" />
            Write a Review
          </Button>
        )}
      </div>

      {/* Review Form */}
      <AnimatePresence>
        {showReviewForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border border-gray-200 rounded-lg bg-gray-50"
          >
            <form onSubmit={handleSubmitReview} className="space-y-4 p-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Review
                </label>
                <Textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your experience with this product..."
                  className="min-h-[100px] text-sm"
                  required
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="submit"
                  disabled={isSubmitting || !comment.trim()}
                >
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowReviewForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reviews List */}
      <div className="space-y-4">
        {allReviews?.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <MessageCircle className="size-12 mx-auto mb-4 text-gray-300" />
            <p>No reviews yet. Be the first to review this product!</p>
          </div>
        ) : (
          allReviews?.map((review) => {
            console.log("Review:", review);
            return <ReviewCard key={review._id} review={review} />;
          })
        )}
      </div>
    </div>
  );
};
