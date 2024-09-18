import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ISingleDescript, ISingleExplanationLine } from "../../interfaces";
import { HashLoader } from "react-spinners";

function SingleExplanation() {
  const { id, name } = useParams();
  const navigate = useNavigate()
  const { isPending, isLoading, data } = useQuery<ISingleDescript>({
    queryKey: ["SingleExplanation"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${id}`
      );
      return data;
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

  const allExplanation = data?.result.map((ele: ISingleExplanationLine) => (
    <div key={ele.aya}>
      <div className="flex gap-4 flex-wrap myShadow p-10 my-4">
        <p className="text-2xl text-green-500">﴿ {ele.aya} ﴾ </p>
        <h3 className="text-2xl">{ele.arabic_text}</h3>
      </div>
      <p className="text-2xl text-green-500">التفسير :  -</p>
      <h3 className="text-xl leading-10">{ele.translation}</h3>
    </div>
  ));
 

  return (
    <>
    <div
    onClick={()=>navigate(-1)}
    className="absolute bg-red-700  right-8 top-36 md:top-28 p-2 bg-green flex justify-center items-center rounded-md text-white cursor-pointer">
        <i className="fa-brands fa-x-twitter"></i>
      </div>
      {isLoading ? (
        <p>loading.....</p>
      ) : (
        <div className="mt-8">
          <h2 className="text-center text-2xl text-green-500">{name}</h2>
          <p className="text-xl text-center text-green-500 font-bold py-4 text-green">
            عدد الأيات : ( {data?.result.length} )
          </p>

          <div className=" my-10 container">{allExplanation}</div>
        </div>
      )}
    </>
  );
}

export default SingleExplanation;
