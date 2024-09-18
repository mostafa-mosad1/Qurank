import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { HashLoader } from "react-spinners";
import { IRadio, IRadios } from "../../interfaces";
import { useState } from "react";
import SingleRadio from "./SingleRadio";

function Radio() {
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState("");
  const [name, setName] = useState("");

  const { isPending, data } = useQuery<IRadios>({
    queryKey: ["radio"],
    queryFn: async () => {
      const { data } = await axios.get("https://mp3quran.net/api/v3/radios");
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
  const allRadios = data?.radios.map((ele: IRadio) => (
    <div
      onClick={() => {
        setLink(ele.url);
        setName(ele.name);
        setOpen(true);
      }}
      key={ele.id}
      className="p-6 gap-6 border-[2px] flex flex-col justify-center items-center rounded-tr-2xl text-center rounded-bl-2xl text-2xl font-bold duration-700 hover:bg-green-500 hover:text-white border-green-500 "
    >
      <h2>{ele.name} </h2>
    </div>
  ));

  return (
    <>
      <p className="text-3xl text-green-500 text-center my-8">﴿ راديو ﴾</p>
      <div className="container grid md:grid-cols-2 xl:grid-cols-4  gap-6 ">
        {allRadios}
      </div>
      {open && <SingleRadio name={name} url={link} open={open} setOpen={setOpen} />}
    </>
  );
}

export default Radio;
