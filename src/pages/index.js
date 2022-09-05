import Section1 from '~components/Section1';
import Section2 from '~components/Section2';
import Section3 from '~components/Section3';
import Section4 from '~components/Section4';
import Section5 from '~components/Section5';
import FlowerLeft from '~icons/FlowerLeft';
import FlowerRight from '~icons/FlowerRight';

export default function Home() {
  return (
    <div>
      <div className="absolute left-0 right-0 top-0 z-10 flex justify-between">
        <FlowerLeft />
        <FlowerRight />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}
