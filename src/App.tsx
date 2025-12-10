import Section from "./components/Section/Section";
import Empty from "./components/Empty/Empty";
import Slide01 from "./components/slides/Slide01/Slide01";
import Slide02 from "./components/slides/Slide02/Slide02";
import Slide03 from "./components/slides/Slide03/Slide03";
import Slide04 from "./components/slides/Slide04/Slide04";
import Slide05 from "./components/slides/Slide05/Slide05";
import Slide06 from "./components/slides/Slide06/Slide06";
import Slide07 from "./components/slides/Slide07/Slide07";
import Slide08 from "./components/slides/Slide08/Slide08";
import Slide09 from "./components/slides/Slide09/Slide09";
import Slide10 from "./components/slides/Slide10/Slide10";
import { supabase } from "./supabase";
// import previewData from "./previewData.json";
import { useState, useEffect } from "react";
import type { User } from "./User";

// const user = previewData[9];

function App() {
  // window.Telegram?.WebApp?.ready();
  // const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;

  const tgUser = {
    id: 5168897180,
  };

  const [user, setUser] = useState<User | null>(null);
  const [found, setFound] = useState("finding");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const { data, error } = await supabase
      .from("users-data")
      .select()
      .eq("userId", tgUser?.id)
      .single();

    if (error) {
      console.log("oshibka", error);
      setFound("not found");
    } else {
      setUser(data);
    }
  };
  if (found === "not found")
    return (
      <Empty
        symbol={"🤷"}
        text={
          "Ты либо не в чате, либо мы от тебя не слышали ни слова за весь год. Такие дела."
        }
      />
    );
  if (!user) return <Empty symbol={"⏳"} text={"Загрузочка..."} />;
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
