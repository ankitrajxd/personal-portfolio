import "server-only";

// get spotify access token
export async function getSpotifyAccessToken() {
  const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
  const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        `${CLIENT_ID}:${CLIENT_SECRET}`
      ).toString("base64")}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
  });

  return await response.json();
}

export async function getCurrentlyPlayingSong() {
  try {
    const accessToken = await getSpotifyAccessToken();

    const response = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        next: {
          revalidate: 60, // Revalidate every 60 seconds
        },

        headers: {
          Authorization: `Bearer ${accessToken.access_token}`,
        },
      }
    );

    // Handle empty response (204 No Content)
    if (response.status === 204) {
      console.log("No active playback");
      return null;
    }

    // Handle unauthorized (401) and other errors
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Spotify API Error:", errorData);
      throw new Error(
        `API request failed: ${response.status} ${response.statusText}`
      );
    }

    // Check content type before parsing
    const contentType = response.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      const text = await response.text();
      throw new Error(
        `Unexpected content type: ${contentType} - Response: ${text}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getCurrentlyPlayingSong:", error);
    throw new Error("Failed to fetch currently playing track");
  }
}
