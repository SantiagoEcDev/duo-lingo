import { FeedWrapper } from "@/components/FeedWrapper";
import { StickyWrapper } from "@/components/StickyWrapper";
import { Header } from "./Header";
import { UserProgress } from "@/components/UserProgress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

const LearnPage = async () => {
  const userProgressData = getUserProgress();

  const [userProgress] = await Promise.all([userProgressData])

  if(!userProgress || !userProgress.activeCourse){
    redirect("/courses")
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: userProgress.activeCourse.title, imageSrc: userProgress.activeCourse.imageSrc }}
          hearts={3}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        <div className="space-y-4">
          
        </div>
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
