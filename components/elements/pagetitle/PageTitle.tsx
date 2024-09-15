import BackButton from "../button/BackButton";
import ForwardButton from "../button/ForwardButton";

export default async function PageTitle({ pagetitle }: any) {
  return (
    <div className="container flex justify-center gap-8 m-auto items-center mt-16 mb-8">
      <div>
        <BackButton />
      </div>
      <h1 className="text-4xl font-bold text-center">{pagetitle}</h1>
      <div>
        <ForwardButton />
      </div>
    </div>
  );
}
