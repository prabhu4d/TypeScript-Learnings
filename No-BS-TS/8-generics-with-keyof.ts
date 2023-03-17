function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const developers = [
  { name: "Prabhu", age: 23 },
  { name: "Boopathi", age: 26 },
];

console.log(pluck(developers, "name"));
console.log(pluck(developers, "age"));

interface BaseEvent {
  user: number;
  time: number;
}

interface EventMap {
  video_streaming: BaseEvent & { videoID: string };
  liked: BaseEvent & { videoID: string; time_frame: number };
  subcribed: BaseEvent & { channelID: string; videoID: string };
}

function trackEvent<Title extends keyof EventMap>(
  eventTitle: Title,
  payload: EventMap[Title]
): void {
  console.log([eventTitle, payload]);
}

trackEvent("video_streaming", {
  user: 1523,
  time: 17032023,
  videoID: "https://youtu.be/4XTj6sIGTdc",
});

trackEvent("liked", {
  user: 190551,
  time: 17032023,
  time_frame: 0,
  videoID: "https://youtu.be/4XTj6sIGTdc",
});
