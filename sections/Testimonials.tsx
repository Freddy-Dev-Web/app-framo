import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)


const TestimonialsColumn = (pros: {testimonials: typeof testimonials }) => (
  <div className="flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
        {firstColumn.map(({text, imageSrc, name, username}, index) => (
          <div 
          key={index} 
          className="p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-sm w-full"
          >
            <div>{text}</div>

            <div className="flex items-center gap-2 mt-5">
              <Image 
              src={imageSrc} 
              width={40}
              height={40}
              alt={name} 
              className="h-10 w-10 rounded-full" 
              />
              <div className="flex flex-col">
                <div className="font-medium tracking-tight leading-5">{name}</div>
                <div className="leading-5 tracking-tight">{username}</div>
              </div>
            </div>
          </div>
        ))}
        </div>
)

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="px-4">
        <div className="flex justify-center">
        <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 ml-2 rounded-lg tracking-tight mt-5 ">Testimonials</div>
        </div>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">What ours users say</h2>
        <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
          From intuitive design to powerful features, our app has become an essential tool for users around the world.
        </p>
        <div className="flex justify-center gap-6">
        
        </div>
      </div>
    </section>
  )
};
