import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex my-5">
      <button className="btn btn-accent">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100} className="font-semibold">
      Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BreakingNews;
