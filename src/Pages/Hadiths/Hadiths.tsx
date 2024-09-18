import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IHadiths, ISingleHadit } from "../../interfaces";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HashLoader } from "react-spinners";
import Slider from "react-slick";

function Hadiths() {
  const { isPending, data } = useQuery<IHadiths>({
    queryKey: ["Hadiths"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://api.hadith.gading.dev/books/muslim?range=1-300"
      );
      return data.data;
    },
  });

  if (isPending)
    return (
      <div className=" mx-auto h-96 flex justify-center items-center">
        <HashLoader
          color="#419008"
          cssOverride={{}}
          size={100}
          speedMultiplier={1}
        />
      </div>
    );
  const settings = {
    speed: 400,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
 
  const allHadiths = data?.hadiths.map((ele: ISingleHadit) => (
    <div key={ele.id} className="w-full my-8 p-20 hadith myShadow  text-2xl h-fit leading-10  " >{ele.arab}</div>
  ));

  return (
    <>
      <p className="text-3xl text-green-500 text-center my-8">﴿ أحاديث ﴾</p>
      <div className=" h-fit container overflow-hidden">
        <Slider {...settings}>{allHadiths}</Slider>
      </div>
    </>
  );
}

export default Hadiths;
