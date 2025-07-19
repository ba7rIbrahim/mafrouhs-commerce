import { UserProfileSkeleton } from "@/components/common";
import { BreadCrumbs } from "@/components/common/breadcrumb";
import { UserProfile, useUser } from "@clerk/clerk-react";

const breadcrumbsItems = [{ label: "Home", to: "/" }, { label: "Account" }];

export const ProfilePage = () => {
  const { isLoaded } = useUser();

  return (
    <div className="container mt-10">
      <BreadCrumbs items={breadcrumbsItems} />
      <div className="flex items-center justify-center mt-10">
        {!isLoaded && <UserProfileSkeleton />}
        <UserProfile path="/profile" routing="path" />
      </div>
    </div>
  );
};

export default ProfilePage;
