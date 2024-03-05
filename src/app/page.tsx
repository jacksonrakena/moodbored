const DayWidget = (props: {
  dayUpdate: {
    rating: {
      value: number;
      total: number;
      name: string;
    };
    date: Date;
    update: string;
    header?: string;
    extras?: {
      track?: {
        name: string;
        artist: string;
        cover: string;
      };
      with?: {
        people: string[];
      };
    };
  };
}) => {
  return (
    <div className="border rounded border-black" style={{ width: "400px" }}>
      {props.dayUpdate.header && (
        <div className="px-1 pt-1 text-xs">{props.dayUpdate.header}</div>
      )}
      <div className="flex items-center">
        <div className="p-4 self-center">
          <div className=" text-xl font-extrabold">
            {props.dayUpdate.rating.value}/{props.dayUpdate.rating.total}
          </div>
          <div>{props.dayUpdate.rating.name}</div>
        </div>
        <div className="">
          <div className="font-semibold text-sm">
            {props.dayUpdate.date.toDateString()}
          </div>
          <div>{props.dayUpdate.update}</div>
        </div>
      </div>
      {props.dayUpdate.extras?.with && (
        <div className="text-sm px-2 pb-0.5">
          With {humanize(props.dayUpdate.extras.with?.people, 3)}
        </div>
      )}
      {props.dayUpdate.extras?.track && (
        <div className="text-sm px-2 py-2">
          <img
            style={{ display: "inline" }}
            className="ml-1 mr-2 rounded"
            width={25}
            src={props.dayUpdate.extras.track.cover}
          />
          <span className="font-bold">{props.dayUpdate.extras.track.name}</span>{" "}
          by{" "}
          <span className="font-bold">
            {props.dayUpdate.extras.track.artist}
          </span>
        </div>
      )}
    </div>
  );
};

const humanize = (text: string[], limit: number): string => {
  if (text.length == 1) return text[0];
  if (text.length == 2) return `${text[0]} and ${text[1]}`;
  if (text.length < limit) {
    const precedent = text.slice(0, text.length - 2);
    return `${precedent.join(", ")}, and ${text[text.length - 1]}`;
  } else {
    const precedent = text.slice(0, limit);
    return `${precedent.join(", ")}, and ${text.length - limit} more`;
  }
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="p-5">
        <div className="flex items-center space-x-6" style={{ width: "600px" }}>
          <img
            className="rounded-2xl"
            width={100}
            src="https://avatars.githubusercontent.com/u/44521335?v=4"
          />
          <div className="flex flex-col">
            <div className="font-semibold text-2xl">Jackson</div>
            <div className="flex flex-col">
              <div>
                Member of{" "}
                <span className="font-semibold">St. Patricks Gaming Club</span>,{" "}
                <span className="font-semibold">
                  Strike Force Special Education
                </span>
                , and <span className="font-semibold">PME mood enjoyers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-8">
        <DayWidget
          dayUpdate={{
            rating: { value: 6, total: 10, name: "Okay" },
            date: new Date(),
            update: "uni + gym + code",
            extras: {
              with: {
                people: ["Kahu", "Rene"],
              },
              track: {
                name: "Think U The Shit (Fart)",
                artist: "Ice Spice",
                cover:
                  "https://i.scdn.co/image/ab67616d00001e0216028dc1a1bc9ff0fc661ea6",
              },
            },
          }}
        />
        <DayWidget
          dayUpdate={{
            rating: { value: 7, total: 10, name: "Good" },
            date: new Date(2024, 2, 4),
            update: "caught up with Leo, organised interview",
            extras: {
              track: {
                name: "Nostalgia (Round & Round)",
                artist: "NOTD",
                cover:
                  "https://i.scdn.co/image/ab67616d00001e021fbafcfd0a8d2ff5d3fbff1d",
              },
            },
          }}
        />
        <DayWidget
          dayUpdate={{
            rating: { value: 7, total: 10, name: "Good" },
            date: new Date(2024, 2, 3),
            update: "Newtown festival",
            extras: {
              with: {
                people: ["Josh", "Del", "Rain", "Zaki"],
              },
              track: {
                name: "YOU'RE THE ONE",
                artist: "KAYTRANADA",
                cover:
                  "https://i.scdn.co/image/ab67616d00001e02b2f893f4215f2930e7320355",
              },
            },
          }}
        />
        <DayWidget
          dayUpdate={{
            rating: { value: 9, total: 10, name: "Awesome" },
            date: new Date(2024, 2, 2),
            update: "Bush rave",
            header: "🔒 Only your close friends",
            extras: {
              with: {
                people: ["Novalie", "Max"],
              },
              track: {
                name: "Feels Like Home (Live It Up 'Til The End)",
                artist: "Sigala",
                cover:
                  "https://i.scdn.co/image/ab67616d00001e02681d6da9a0ab5ff23fadf0f9",
              },
            },
          }}
        />
        <DayWidget
          dayUpdate={{
            rating: { value: 8, total: 10, name: "Great" },
            date: new Date(2024, 2, 1),
            update: "🇲🇽🇲🇽🇲🇽 Skids + long drive",
            extras: {
              with: {
                people: ["Max"],
              },
              track: {
                name: "I Got U - High Contrast Remix",
                artist: "Duke Dumont",
                cover:
                  "https://i.scdn.co/image/ab67616d00001e0232ce51b719e990ae3caf73af",
              },
            },
          }}
        />
      </div>
    </main>
  );
}
