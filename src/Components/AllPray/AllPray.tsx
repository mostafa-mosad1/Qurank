import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { HashLoader } from "react-spinners";

function AllPray() {
  const { isPending, isLoading, data } = useQuery({
    queryKey: ["getHome"],
    queryFn: async () => {
      const res = await axios.get(
        "https://api.aladhan.com/v1/timingsByCity?city=cairo&country=egypt&method=8"
      );
      return res.data.data;
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

  const prayAll = () => {
    if (data?.timings) {
      return Object.entries(data?.timings);
    } else {
      return null;
    }
  };

  const max = prayAll();
  const requiredTimings = [
    "Fajr",
    "Sunrise",
    "Dhuhr",
    "Asr",
    "Maghrib",
    "Isha",
  ];
  //   const requiredName = {
  //     Fajr: "الفجر",
  //     Sunrise: "الشروق",
  //     Dhuhr: "الظهر",
  //     Asr: "العصر",
  //     Maghrib: "المغرب",
  //     Isha: "العشاء",
  //   };

  const filteredTimings = max?.filter(([name]) =>
    requiredTimings.includes(name)
  );

  return (
    <>
      <div id="time" className="text-center container  my-10">
        <h2 className="text-3xl text-green-500 my-4"> ﴿ مواقيت الصلاة ﴾</h2>
        <h2 className="text-3xl ">
          {data.date.hijri.weekday.ar} ( {data.date.hijri.day} من{" "}
          {data.date.hijri.month.ar}){" "}
        </h2>

        <div className="grid mt-10  sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-4  flex-wrap">
          {!isLoading &&
            filteredTimings?.map(([name, value]: [string, any], index) => (
              <div key={index}>
                <div className="card text-green-800  shadow-xl shadow-inner shadow-green-500  p-10">
                  <h3 className="Prayers mx-auto text-2xl rounded-full border-green-600 border-[6px] flex justify-center items-center size-32">
                    {value}
                  </h3>
                  <h3 className="text-3xl my-2">{name}</h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default AllPray;
