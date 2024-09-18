import { IQuran, TReferences } from "../../interfaces";
import { useNavigate } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { HashLoader } from "react-spinners";

function Quran() {
  const { isPending, isLoading, data } = useQuery<IQuran>({
    queryKey: ["quran"],
    queryFn: async () => {
      const { data } = await axios.get("https://api.alquran.cloud/v1/meta");
      return data.data.surahs;
    },
  });

  const navigate = useNavigate();

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

  const allsurahs = data?.references.map((ele: TReferences) => (
    <div
      onClick={() => navigate(`/Surah/${ele.number}`)}
      key={ele.number}
      className="p-6 gap-6 border-[2px] flex flex-col justify-center items-center rounded-tr-2xl text-center rounded-bl-2xl text-2xl font-bold duration-700 hover:bg-green-500 hover:text-white border-green-500 "
    >
      <p> {ele.name}</p>
      <p> {ele.englishName}</p>
    </div>
  ));

  return (
    <>
      <h2 className="text-3xl text-green-500 text-center my-8">
        ﴿ القرأن الكريم ﴾
      </h2>
      {isLoading ? (
        <div className=" mx-auto h-96 flex justify-center items-center">
          <HashLoader
            color="#419008"
            cssOverride={{}}
            size={100}
            speedMultiplier={1}
          />
        </div>
      ) : (
        <div className="container grid md:grid-cols-3 xl:grid-cols-6  gap-6 ">{allsurahs}</div>
      )}
    </>
  );
}

export default Quran;
