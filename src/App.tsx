import Section from "./components/Section/Section";
import Slide01 from "./components/Section/slides/Slide01/Slide01";
import Slide02 from "./components/Section/slides/Slide02/Slide02";
import Slide03 from "./components/Section/slides/Slide03/Slide03";
import Slide04 from "./components/Section/slides/Slide04/Slide04";
import Slide05 from "./components/Section/slides/Slide05/Slide05";
import Slide06 from "./components/Section/slides/Slide06/Slide06";
import Slide07 from "./components/Section/slides/Slide07/Slide07";
import Slide08 from "./components/Section/slides/Slide08/Slide08";
import Slide09 from "./components/Section/slides/Slide09/Slide09";
import Slide10 from "./components/Section/slides/Slide10/Slide10";
import { supabase } from "./components/Section/supabase";
// import previewData from "./previewData.json";
// import { init, useLaunchParams } from "@tma.js/sdk-react";
import { useState, useEffect } from "react";
import type { User } from "./User";

// init();

// const user = previewData[9];

function App() {
  // const launchParams = useLaunchParams();
  // const tgUser = launchParams?.tgWebAppData?.user;
  const tgUser = {
    id: 5011682404,
  };

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const { data, error } = await supabase
      .from("users-data")
      .select()
      .eq("userId", tgUser.id)
      .single();

    if (error) {
      console.log("oshibka", error);
    } else {
      setUser(data);
    }
  };

  // useEffect(() => {
  //   if (!tgUser?.id) return;

  //   const fetchData = async () => {
  //     const { data, error } = await supabase
  //       .from("users-data")
  //       .select()
  //       .eq("userId", tgUser.id)
  //       .maybeSingle();

  //     if (!error) setUser(data);
  //   };

  //   fetchData();
  // }, [tgUser]);

  // пока загружается
  if (!user) return <div>Loading...</div>;
  return (
    <>
      <Section>
        <Slide01 userName={user.userName.split(" ")[0]} />
      </Section>
      <Section>
        <Slide02 total={user.msgTotal} />
      </Section>
      <Section>
        <Slide03
          name={user.userName}
          date={user.firstMessageDate}
          text={user.firstMessageText}
          image={user.firstMessageImg}
        />
      </Section>
      {user.reactionsGotTotal && (
        <Section>
          <Slide04 reactionsGot={user.reactionsGotTotal} />
        </Section>
      )}
      {user.mostReactedCount && (
        <Section>
          <Slide05
            name={user.userName}
            text={user.mostReactedText}
            image={user.mostReactedImg}
            reactions={user.mostReactedReactions}
          />
        </Section>
      )}
      <Section>
        <Slide06 total={user.reactionsGaveTotal} />
      </Section>
      <Section>
        <Slide07 reaction={user.favReaction} />
      </Section>
      <Section>
        <Slide08 />
      </Section>
      <Section>
        <Slide09
          name={user.charName}
          movie={user.charShow}
          caption={user.charWhy}
          vidurl={user.vidUrl}
        />
      </Section>
      <Section>
        <Slide10
          msgtotal={user.msgTotal}
          reactsgiven={user.reactionsGaveTotal}
          reactsgot={user.reactionsGotTotal}
          date={user.firstMessageDate}
        />
      </Section>
    </>
  );
}

export default App;
