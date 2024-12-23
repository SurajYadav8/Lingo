import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";

const LearnPage = () =>{
    return (
        <div className="flex flex-row-reverse gap-[480px] px-6">
           <StickyWrapper>
             <UserProgress
               activeCourse={{  title: " English", imageSrc: "/USA.png"}}
               hearts={5}
               points={100}
               hasActiveSubscription={false}
             /> 
           </StickyWrapper>
           <FeedWrapper>
             <Header title="English"/>
           </FeedWrapper>
        </div>
    );
}
export default LearnPage;
