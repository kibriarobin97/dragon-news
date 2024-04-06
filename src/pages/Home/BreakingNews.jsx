import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex my-5">
      <button className="btn btn-accent">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100} className="font-semibold">
      Match Highlights: Germany Stuns Brazil with Miraculous 7-1 Victory in World Cup Showdown   !   Match Highlights: Spain Dominates Argentina in Stunning 6-1 Victory in International Soccer Showdown ! 
      </Marquee>
    </div>
  );
};

export default BreakingNews;
