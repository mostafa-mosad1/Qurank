import image from "../../assets/Mousque.jpg";
import PrayTime from "../../Components/AllPray/AllPray";
import Button from "../../Components/ui/Button";

function Home() {
  return (
    <>
      <div className="relative">
        <img src={image} className="w-full h-lvh" alt="langing" />
        <div className=" absolute inset-0 bg-black/40"></div>
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-white bg-black/40 rounded-md p-10 hover:text-green-600 ">
          صدقة جارية لجميع أموات المسلمين
        </p>
        <div className="absolute bottom-10 right-10 font-bold text-4xl text-white  p-10 ">
          <p>مرحبا بك فى</p>
          <p>موقع قرانك الاسلامي</p>
          <div className="flex gap-4">
            <Button
              className="par border-[2px] border-white mt-4 relative z-10 overflow-hidden"
              name="ابد التصفح"
            >
              <i className="fa-solid arrow fa-turn-down rotate-270  mx-4"></i>
            </Button>
           <a target="_self" href="#time">
           <Button
              className="par border-[2px] border-white mt-4 relative z-10 overflow-hidden"
              name="مواقيت الصلاة"
            >
              <i className="fa-regular arrow fa-clock rotate-270  mx-4"></i>
            </Button>
           </a>
          </div>
        </div>
      </div>
      <div className=" myShadow  container text-center my-4 p-8 ">
        <h2 className="text-green-600 text-3xl my-2">
          "هذا الموقع تم تصميمة ليكون صدقة جارية لجميع أموات المسلمين"
        </h2>
        <p className="text-2xl leading-10 ">
          " اللهمّ اجز الاموات عن الإحسان إحسانًا، وعن الإساءة عفوًا وغفرانًا.
          اللهم اغفر للموتى وعافهم واعف عنهم، وأكرم نزلهم، ووسع مدخلهم، واغسلهم
          بالماء والثلج والبرد، ونقهم من الذنوب كما ينقى الثوب الأبيض من الدنس.
          اللهمّ إنّ الاموات نَزَلوا بك وأنت خير منزولٍ به، وأصبحوا فقراء إلى
          رحمتك، وأنت غنيٌّ عن عذابههم. اللهمّ افسح للموتى في قبورهم مدّ بصرهم،
          وافرش قبورهم من فراش الجنّة. اللهمّ آتهم برحمتك ورضاك، وقهِم فتنة
          القبر وعذابه، وآتهم برحمتك الأمن من عذابك حتّى تبعثهم إلى جنّتك يا
          أرحم الرّاحمين. اللهمّ احم الموتى تحت الأرض، واستره يوم العرض، ولا
          تخزه يوم يبعثون “يوم لا ينفع مالٌ ولا بنون إلّا من أتى الله بقلبٍ
          سليم. اللهم آنس وحدتهم، وآنسهم في وحشتهم، وآنسهم في غربتهم، اللهم
          أنزلهم منزلًا منزلًا مباركًا، وأنت خير المنزلين، وأنزلهم منازل الشهداء
          والصديقين، وحسن أولئك رفيقًا. اللهم اغفر لهم وارفع درجتهم في المهديين،
          وافسح لهم قبورهم، ونور لهم فيه، واجعل قبورهم روضة من رياض الجنة، واغفر
          لنا ولهم يا أرحم الراحمين. اللهم اجعل قبورهم روضة من رياض الجنة، ولا
          تجعله حفرة من حفر النار، اللهم افسح له في قبره مد بصره، وافرش قبره من
          فراش الجنة. اللهم اعذهم من عذاب القبر، وجفاف الأرض على جنبيه، واملًا
          قبره بالرضا والنور، والفسحة والسرور. اللهم إن عبادك في ذمتك وحبل
          جوارك، فقهم فتنة القبر، وعذاب النار، وأنت أهل الوفاء والحق، فاغفر لهم
          وارحمهم، إنك أنت الغفور الرحيم. اللهمّ ادخلهم الجنّة من غير مناقشة
          حساب، ولا سابقة عذاب. اللهمّ آنسهم في وحدتهم، وفي وحشتهم، وفي غربتهم."
        </p>
      </div>
      <PrayTime />
    </>
  );
}

export default Home;
