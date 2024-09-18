import { ScaleLoader } from "react-spinners";

interface IProps {
  open: boolean;
  setOpen: (val: boolean) => void;
  url: string;
  name: string;
}
function SingleRadio({ open, setOpen, url,name }: IProps) {
  return (
    <>

      
      <div className="fixed inset-0 space-y-10 bg-black text-white text-2xl flex flex-col justify-center items-center">
      <div
        onClick={() => {
          setOpen(false);
          console.log(url);
          console.log(open);
        }}
        className="absolute z-50 bg-red-700  right-8 top-36 md:top-28 p-2 bg-green flex justify-center items-center rounded-md text-white cursor-pointer"
      >
        <i className="fa-brands fa-x-twitter"></i>
      </div>
        <p className="text-3xl text-green-500 text-center my-8" >﴿ {name} ﴾</p>
        <div className="flex flex-wrap gap-4">
        <ScaleLoader
          color="#6aad39"
         
          height={200}
          margin={5}
          radius={2}
          speedMultiplier={1}
          width={8}
        />
        <ScaleLoader
          color="#6aad39"
         
          height={200}
          margin={5}
          radius={2}
          speedMultiplier={2}
          width={8}
        />
      </div>
        <audio autoPlay className="mx-auto w-[80%] my-4 w-full rounded-none " controls>
          <source src={`${url}`} type="audio/mp3" />
        </audio>
      </div>
    </>
  );
}

export default SingleRadio;
