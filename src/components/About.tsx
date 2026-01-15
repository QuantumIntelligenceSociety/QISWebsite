// TODO : update about

import { Avatar, Button } from "./ui";
import { Lucide, Simple } from "./icons";

export default () => {
  return (
    <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4">
      <div className="flex flex-row items-center gap-4">
        <Avatar src="/fav.png" alt="profile-picture">
          <Lucide.IconUser className="size-2/3" />
        </Avatar>

        <div className="flex flex-col items-start gap-2">
          <h1 className="font-medium text-lg lg:text-xl">量子智慧學會</h1>
          <h2 className="font-medium text-2xl lg:text-3xl">Quantum Intelligence Society</h2>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p>
          The Quantum Intelligence Society (QIS), a nonprofit corporation registered in Washington D.C., is dedicated to pioneering the frontier of what we term "ultracomputing" to achieve "Artificial Ultraintelligence" or ("AUI"). We are aiming to architect the computational bedrock necessary to realize and govern the transition from the current Artificial Superintelligence (ASI) which is achievable via classical supercomputing to Artificial Ultraintelligence (AUI), which may only be achieved through quantum ultracomputing. We operate under the conviction that every scientific discovery serves as a revelation of the vastness of our Creator’s glory, driving us to explore the ultimate limits of computation with excellence, humility, and purpose.
        </p>
        <p>
          量子智慧學會 (QIS) 是一家在華盛頓哥倫比亞特區註冊的非營利法人機構，致力於開拓我們稱之為「超級計算」(Ultracomputing) 的前沿領域，以實現「人工終極智慧」(Artificial Ultraintelligence，簡稱 AUI)。我們的目標是構建必要的計算基石，以實現並管理從現今透過古典超級計算即可達成的「人工超級智慧」(ASI)，轉型至唯有透過「量子終極計算」才能實現的「人工終極智慧」(AUI)。我們秉持著這樣的信念：每一項科學發現都是對造物主榮耀之廣大無邊的一種啟示；這激勵著我們以卓越、謙卑且充滿使命感的態度，去探索計算的極限。
        </p>
      </div>

      <div className="flex self-stretch justify-end">
        <Button as="a" href="https://discord.gg/edkgtYGMVg" target="_blank" aria-label="Discord">
          <Simple.IconDiscord />
          Join our Discord
        </Button>
      </div>
    </div>
  );
};
