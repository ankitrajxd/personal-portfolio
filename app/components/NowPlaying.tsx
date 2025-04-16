import { getCurrentlyPlayingSong } from "@/lib/spotify";
import Image from "next/image";

export async function NowPlaying() {
  const data = await getCurrentlyPlayingSong();

  if (!data)
    return (
      <div>
        <p className="text-xs">Not currently playing</p>
      </div>
    );

  const track = data.item;
  const artistNames = track?.artists
    ?.map((a: { name: string }) => a.name)
    .join(", ");

  return (
    <div className="flex items-center gap-2">
      <Image
        src="https://static.cdnlogo.com/logos/s/89/spotify.svg"
        width={16}
        height={16}
        alt="Spotify Logo"
        className="opacity-80"
      />
      <div className="flex flex-col leading-tight">
        <p className="text-xs font-medium bg-gradient-to-r from-white via-green-400 to-white bg-[length:200%_100%] bg-clip-text text-transparent animate-shine">
          {track?.name}
        </p>
        <p className="text-[10px] text-zinc-400">{artistNames}</p>
      </div>
    </div>
  );
}
