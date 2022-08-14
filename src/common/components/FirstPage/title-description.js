import Head from "next/head";
import Description from "./description";

const TitleAndDescription = () => {
  const titleLines = [
    { text: "DESBLOQU", changedText: "EIA", tracking: -0.01 },
    { text: "O PODER D", changedText: "A", tracking: 0.025 },
    { text: "CRIATIVID", changedText: "ADE", tracking: 0.005 },
  ];
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Bevan&family=Ruluko&display=swap');
        </style>
      </Head>

      <div className="absolute left-[19.3%] top-[26.38%] flex flex-col z-50 gap-5">
        <div className="flex flex-col gap-5 font-normal text-7xl font-[Bevan] text-[#212121]">
          {titleLines.map(({ text, changedText, tracking }) => (
            <TextLine
              text={text}
              changedText={changedText}
              tracking={tracking}
            />
          ))}
        </div>

        {/* Description */}
        <Description />
      </div>
    </>
  );
};

export default TitleAndDescription;

const TextLine = ({ text, changedText, tracking }) => {
  return (
    <>
      <span className={`tracking-[${tracking}em]`}>
        {text}
        <span className="text-[#FFF]">{changedText}</span>
      </span>
    </>
  );
};
