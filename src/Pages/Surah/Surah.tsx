import { useNavigate, useParams } from "react-router-dom";
import { IAyah, ISurah } from "../../interfaces";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FlapperSpinner } from "react-spinners-kit";
import { HashLoader } from "react-spinners";

function Surah() {
  const { id } = useParams();
  const navigate = useNavigate()
  const { isPending, isLoading, data } = useQuery<ISurah>({
    queryKey: ["ayah", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.alquran.cloud/v1/surah/${id}`
      );
      return data.data;
    },
  });
  if (isPending)   return (
    <div className=" mx-auto h-96 flex justify-center items-center">
      <HashLoader
        color="#419008"
        cssOverride={{}}
        size={100}
        speedMultiplier={1}
      />
    </div>
  );

  const allAyahs = data?.ayahs.map((ayah: IAyah) => (
    <div key={ayah.number}>
      {ayah.text} ﴿ {ayah.numberInSurah} ﴾
    </div>
  ));
  return (
    <>
      <div
      onClick={()=>navigate(-1)}
      className="absolute bg-red-700  right-8 top-28 p-2 bg-green flex justify-center items-center rounded-md text-white cursor-pointer">
        <i className="fa-brands fa-x-twitter"></i>
      </div>

      {isLoading ? (
        <FlapperSpinner />
      ) : (
        <div className="container text-center my-10">
          <h3 className="text-3xl text-green-500 font-bold text-green font-sans">{data?.name}</h3>
          <p className="text-xl text-green-500 font-bold py-4 text-green">
            عدد الأيات : ( {data?.numberOfAyahs} )
          </p>
          <p className="text-3xl mt-4 mb-8">
            بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ
          </p>
          <audio className="mx-auto my-4" controls>
            <source
             src={`https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/${id}.mp3`}
              type="audio/mp3"
            />
          </audio>
          <div className="flex flex-wrap  text-xl gap-2 leading-10">
            {allAyahs}
          </div>
        </div>
      )}
    </>
  );
}

export default Surah;
